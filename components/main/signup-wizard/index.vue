<template>
  <section class="property-wizard horizontal-wizard mb-3">
    <div class="container">
      <div class="row wizard-box">
        <div class="col-lg-8 col-sm-10">
          <div class="theme-card">
            <div class="logo-flex">
                <img src="/image/logo/temp-logo.png" alt="The 4th wall. " height="50" />
            </div>
            <form-wizard
              @on-complete="onComplete"
              :start-index="activeStep"
              finish-button-text="Submit details"
            >
              <div class="wizard-form-details log-in">
                <tab-content
                  title="Account information"
                  :before-change="beforeTabSwitch"
                >
                  <MainSignupWizardAccountInfo :classes="validationclass" />
                </tab-content>
                <tab-content
                  title="Property information"
                  :before-change="beforeTabSwitch2"
                >
                  <MainSignupWizardLocation :classes="validationclass" />
                </tab-content>
                <tab-content title="Verify details">
                  <MainSignupWizardSubmitted />
                </tab-content>
              </div>
            </form-wizard>
          </div>
        </div>
      </div>
      <!-- <MainLoading v-if="loading"/> -->
      <template v-if="loading"> <MainLoading /> </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import Swal from "sweetalert2";
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
import { usewizaredStore } from "~/store/wizard";
import { useUserStore } from "~/store/user";
import { usePropertyStore } from "~/store/property";
// import loading from "../loading.vue";
const showLoader = ref(false);
const loading = ref(false);
const supabase = inject("supabase");
const validationclass = ref<string>("");
let store = usewizaredStore();
let user = useUserStore();
let property = usePropertyStore();
let activeStep = user.getBuildingDetails ? 1 : 0;
let router = useRouter();

function beforeTabSwitch() {
  if (
    user.name !== "" &&
    user.phone !== "" &&
    user.email !== "" &&
    user.password !== ""
  ) {
    validationclass.value = "was-validated";
    return true;
  } else {
    return false;
  }
}
function beforeTabSwitch2() {
  if (
    property.property_name !== "" &&
    property.property_type !== "" &&
    property.property_bhk !== "" &&
    property.property_area !== "" &&
    property.property_city !== "" &&
    property.property_state !== "" &&
    property.property_pincode !== ""
  ) {
    validationclass.value = "was-validated";
    return true;
  } else {
    return false;
  }
}

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success ms-1',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})
async function onComplete() {
  showLoader.value = true;
  loading.value = true;
  let uploadInfo =  { data: '', error: '' }
  let uploadUrl;
  if(property.floor_plan) {
    const fileExtension = property.floor_plan.name.split('.').pop()
    const filename = window.crypto.randomUUID()+'.'+fileExtension
    uploadInfo = await supabase.storage
    .from('floor-plan')
    .upload(filename, property.floor_plan)

    uploadUrl = await supabase.storage.from('floor-plan').getPublicUrl(uploadInfo.data.path)
  }

  let query_info = {
    name: user.name,
    phone: user.phone,
    email: user.email,
    password: user.password,
    property_name: property.property_name,
    property_type: property.property_type,
    property_bhk: property.property_bhk,
    property_area: property.property_area,
    property_city: property.property_city,
    property_state: property.property_state,
    property_pincode: property.property_pincode,
    floor_plan: uploadUrl?.data.publicUrl
  }
  const { data, error } = await supabase.from('query').insert(query_info)

  loading.value = false
  swalWithBootstrapButtons.fire({
    icon: 'success',
    title: 'Your request has been Submitted.',
    text: 'We will contact you soon.'
  }).then(() => {
    property.$reset();
    router.push({ path: "/" });
  })
  // store.submit()
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.modal-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
}

.modal-content {
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 20px;
}

.modal-loader {
  display: block;
  border: 5px solid #d3d3d380;
  border-left-color: #a9a9a994;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  animation: spin 1.25s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.logo-flex{
display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}
</style>
