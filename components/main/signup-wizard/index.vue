<template>
  <section class="property-wizard horizontal-wizard">
    <div class="container">
      <div class="row wizard-box">
        <div class="col-lg-8 col-sm-10">
          <div class="theme-card">
            <form-wizard @on-complete="onComplete" :start-index="activeStep">
              <div class="wizard-form-details log-in">
                <tab-content title="Account information" :before-change="beforeTabSwitch">
                  <MainSignupWizardAccountInfo :classes="validationclass" />
                </tab-content>
                <tab-content title="Location" :before-change="beforeTabSwitch2">
                  <MainSignupWizardLocation :classes="validationclass" />
                </tab-content>
                <tab-content title="Successfully submitted">
                  <MainSignupWizardSubmitted />
                </tab-content>
              </div>
            </form-wizard>
          </div>
        </div>
      </div>
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

const validationclass = ref<string>("");
let store = usewizaredStore();
let user = useUserStore();
let property = usePropertyStore();
let activeStep = user.getBuildingDetails ? 1 : 0
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
function onComplete() {
  store.submit()
}
</script>

<style scoped></style>
