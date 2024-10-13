<template>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="position-relative">
            <div class="card p-2 text-center">
                <!-- <img src="/image/logo/logo.svg" alt="The 4th wall. " height="50" class="my-3"/> -->
                <h6>Please enter the one time password <br> to verify your account</h6>
                <div> <span>A code has been sent to</span> <small>******{{ user.phone.substr(user.phone.length-4) }}</small> </div>
                <div class="otp w-full flex justify-around" @input="handleOtpInput">
                    <template v-for="field in 6" :key="field">
                    <input
                        v-model="data[field - 1]"
                        ref="firstInputEl"
                        type="text"
                        maxlength="1"
                        class="border rounded w-10 h-10 text-center otp-input"
                        @paste="field === 1 && handlePaste($event)"
                    />
                    </template>
                </div>
                <div class="mt-4"> 
                    <button id="validate" class="btn btn-danger px-4 mb-3 validate" @click="getOtp">Validate</button> 
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useUserStore } from "~/store/user";
import { ref, watch } from 'vue';

const user = useUserStore();

const data = ref([]);
const firstInputEl = ref(null);
const emit = defineEmits(['update:modelValue']);

watch(
  () => data,
  (newVal) => {
    if (
      newVal.value != '' &&
      newVal.value.length === props.fields &&
      !newVal.value.includes('')
    ) {
      emit('update:modelValue', Number(newVal.value.join('')));
    } else {
      emit('update:modelValue', null);
    }
  },
  { deep: true }
);

const handleOtpInput = (e) => {
  if (e.data && e.target.nextElementSibling) {
    e.target.nextElementSibling.focus();
  } else if (e.data == null && e.target.previousElementSibling) {
    e.target.previousElementSibling.focus();
  }
};

const handlePaste = (e) => {
  const pasteData = e.clipboardData.getData('text');
  let nextEl = firstInputEl.value[0].nextElementSibling;
  for (let i = 1; i < pasteData.length; i++) {
    if (nextEl) {
      data.value[i] = pasteData[i];
      nextEl = nextEl.nextElementSibling;
    }
  }
};

    // let otp_number = [null, null, null, null, null, null]
    // const setOtp = (val, place) =>  {
    //     otp_number.splice(place, 1, val)
    // };
    let getOtp = () => {
        user.setUserVerified(true);
        // if(otp_number.some(item => item == null)) return false
        // else return otp_number.join('')
    };
    // onMounted(() => {
    //     document.querySelectorAll(".inputs > input").forEach(element => {
    //         element.addEventListener('keyup', (e) => {
    //             const val = e.target.value
    //             if(val.match(/[0-9]/)) {
    //                 setOtp(val, element.dataset.position)
    //                 document.getElementById(element.dataset.next).focus()
    //             }
    //         })
    //     })
    // });
</script>
<style scoped>
.height-100 {
    height: 100vh
}

.otp-input {
    max-width: 50px;
    padding: 5px;
}

.card {
    width: 400px;
    border: none;
    height: 300px;
    /* box-shadow: 0px 5px 20px 0px #d2dae3; */
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center
}

.card h6 {
    color: #DE280F;
    font-size: 20px;
}
input {
    width: 40px;
    height: 40px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
}

.card-2 {
    background-color: #fff;
    padding: 10px;
    width: 350px;
    height: 100px;
    bottom: -50px;
    left: 20px;
    position: absolute;
    border-radius: 5px;
}

.card-2 .content {
    margin-top: 50px;
}

.card-2 .content a {
    color: #DE280F;
}

.form-control:focus {
    box-shadow: none;
    border: 2px solid #DE280F;
}

.validate {
    border-radius: 20px;
    height: 40px;
    background-color: #DE280F;
    border: 1px solid #DE280F;
    width: 140px;
}
</style>