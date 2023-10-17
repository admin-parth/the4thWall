<template>
  <section class="login-wrap">
    <div class="container">
      <div class="row log-in">
        <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12">
          <div class="theme-card">
            <div class="title-3 text-start">
              <h2>Sign Up</h2>
            </div>
            <div>
              <div v-if="showOtpInput">
                <v-otp-input
                  ref="otpInput"
                  v-model:value="verificationCode"
                  input-classes="otp-input"
                  separator="-"
                  :num-inputs="6"
                  input-type="tel"
                  :placeholder="['*', '*', '*', '*','*','*']"
                  @on-change="handleOnChange"
                  @on-complete="handleOnComplete"
                />
                <button class="w-100 text-center" @click="verifyPhoneNumber">Verify Code</button>
              </div>
              <div v-else>
                <h1>Phone Number Authentication</h1>
                <vue-tel-input v-model="phoneNumber" mode="international" />
                <button class="w-100 text-center" @click="sendVerificationCode">Send Verification Code</button>
              </div>
              <div id="recaptcha-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import "vue-tel-input/vue-tel-input.css";
export default {
  setup() {
    const auth = inject('auth');
    
    const showOtpInput = ref(false);

    const phoneNumber = ref("");
    const verificationCode = ref("");
    let confirmationResult = null;
    let recaptchaVerifier = null;

    const handleOnComplete = (value) => {
      console.log("OTP completed: ", value);
    };

    const handleOnChange = (value) => {
      console.log("OTP changed: ", value);
    };

    const sendVerificationCode = () => {
      const phone = phoneNumber.value;

      if (!recaptchaVerifier) {
        recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
          },
          auth
        );
      }

      signInWithPhoneNumber(auth, phone, recaptchaVerifier)
        .then((result) => {
          confirmationResult = result;
          showOtpInput.value = true;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const verifyPhoneNumber = () => {
      if (confirmationResult) {
        confirmationResult.confirm(verificationCode.value)
          .then((result) => {
            console.log("Phone number verified:", {uid, phoneNumber}= result.user);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    };

    return {
      showOtpInput,
      phoneNumber,
      verificationCode,
      handleOnComplete,
      handleOnChange,
      sendVerificationCode,
      verifyPhoneNumber,
    };
  },
};
</script>


<style>
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}

.otp-input.is-complete {
  background-color: #e4e4e4;
  color: black;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}

button{
  margin-top: 18px;
  padding: 10px;
  background-color: #635c5c;
  color: white;
}

</style>
