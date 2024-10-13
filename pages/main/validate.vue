<template>
    <div class="container height-100 d-flex justify-content-center align-items-center">
        <div class="position-relative">
            <div class="card p-2 text-center">
                <img src="/image/logo/logo.svg" alt="The 4th wall. " height="50" class="my-3"/>
                <h6>Please enter the one time password <br> to verify your account</h6>
                <div> <span>A code has been sent to</span> <small>******{{ user.phone.substr(user.phone.length-4) }}</small> </div>
                <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2"> 
                    <input class="m-2 text-center form-control rounded" type="text" id="first" data-next="second" data-position="0" maxlength="1" /> 
                    <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" data-next="third" data-position="1"/> 
                    <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" data-next="fourth" data-position="2"/> 
                    <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" data-next="fifth" data-position="3"/> 
                    <input class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" data-next="sixth" data-position="4"/> 
                    <input class="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" data-next="validate" data-position="5"/> 
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

    const user = useUserStore()
    let otp_number = [null, null, null, null, null, null]
    const setOtp = (val, place) =>  {
        this.otp_number.splice(place, 1, val)
    };
    let getOtp = () => {
        if(this.otp_number.some(item => item == null)) return false
        else return this.otp_number.join('')
    };
    onMounted(() => {
        document.querySelectorAll(".inputs > input").forEach(element => {
            element.addEventListener('keyup', (e) => {
                const val = e.target.value
                if(val.match(/[0-9]/)) {
                    this.setOtp(val, element.dataset.position)
                    document.getElementById(element.dataset.next).focus()
                }
            })
        })
    });
</script>
<style scoped>
.height-100 {
    height: 100vh
}

.card {
    width: 400px;
    border: none;
    height: 300px;
    box-shadow: 0px 5px 20px 0px #d2dae3;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center
}

.card h6 {
    color: #DE280F;
    font-size: 20px;
}

.inputs input {
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