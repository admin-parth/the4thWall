<template>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="position-relative">
            <div class="card p-4 text-center">
                <img src="/image/logo/logo.svg" alt="The 4th wall. " height="50" class="mb-3"/>
                <h6>Please enter the one time password <br> to verify your account</h6>
                <div class="my-2"> <span>A code has been sent to</span> <small>******{{ user.phone.substr(user.phone.length-4) }}</small> </div>
                <div class="otp w-full flex justify-around" @input="handleOtpInput">
                    <template v-for="field in 6" :key="field">
                    <input
                        v-model="data[field - 1]"
                        ref="firstInputEl"
                        type="text"
                        maxlength="1"
                        pattern="\d"
                        class="border rounded w-10 h-10 text-center otp-input"
                        @paste="handlePaste($event)"
                    />
                    </template>
                </div>
                <div class="mt-4"> 
                    <button id="validate" class="btn btn-danger px-4 mb-3 validate" @click="getOtp">Validate</button> 
                </div>
                <p v-if='showInvalidOTPError'>OTP you entered is not valid. Please try again...</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useUserStore } from "~/store/user";
import { ref } from 'vue';

const user = useUserStore();
const supabase = inject("supabase");

const data = ref([]);
let otpValue = undefined;
const showInvalidOTPError = ref(false);

const handleOtpInput = (e) => {
  if (e.data && e.target.nextElementSibling) {
    e.target.nextElementSibling.focus();
  } else if (e.data == null && e.target.previousElementSibling) {
    e.target.previousElementSibling.focus();
  }
};

const  handlePaste = (e) => {
  const pasteData = e.clipboardData.getData('text');
  let nextEl = firstInputEl.value[0].nextElementSibling;
  for (let i = 1; i < pasteData.length; i++) {
    if (nextEl) {
      data.value[i] = pasteData[i];
      nextEl = nextEl.nextElementSibling;
    }
  }
};
let getOtp = async () => {
  const otp = data.value.join('')
  // Check otp with actualy shared number.
  if (otpValue == otp) {
    user.setUserVerified(true);
    await supabase.from('customer').update({verified: true}).eq('id', user.id).select()
    // Continue to enter more information.
    user.setBuildingDetails(true);
    navigateTo('/main/signup')
  } else {
    showInvalidOTPError.value = true;
  }
  
};

let generateOtp = () => {
  const random = Math.random()
  otpValue = Math.floor(random * 1000000)
  if (otpValue < 100000) {
    otpValue = Math.floor(random * 10000000)
  }
  if (user.phone) { sendOtp(); }
}

const sendOtp = async () => {
  const payload = {
    "template_id": "67436b4cd6fc057efd418672",
    "realTimeResponse": "1",
    "recipients": [
      {
        "mobiles": `91${user.phone}`,
        "otp": otpValue.toString()
      }
    ]
  }
  await useFetch('/api/sendsms', {
    method: 'post',
    body: payload
  })
  
}
    onMounted(() => {
      generateOtp();
    });
</script>
<style scoped>
.height-100 {
    height: 100vh
}

.otp-input {
    max-width: 50px;
    padding: 5px;
}

.container {
    height: 100vh;
}

.card {
    border: none;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 20px 5px #00000020;
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