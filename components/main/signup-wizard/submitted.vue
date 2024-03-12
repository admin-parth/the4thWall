<template>
    <!-- <div class="wizard-form-details log-in"> -->
    <div class="title-3 text-start">
        <h2>complete details</h2>
    </div>
    <div class="input-data">
        <div class="account-content">
            <h3>Account information</h3>
            <ul>
                <li>Name : <span class="first_name">{{ user.name }}</span></li>
                <li>phone number : <span class="phone_number">{{ user.phone }}</span></li>
                <li>Email : <span class="email_add">{{ user.email }}</span></li>
            </ul>
        </div>
        <div class="account-content">
            <h3>Location Details</h3>
            <ul>
                <li>Property Name : <span class="address-type">{{ property.property_name }}</span></li>
                <li>Property Type : <span class="city-name">{{ property.property_type }}</span></li>
                <li>Sq. Ft. or BHK : <span class="state-name">{{ property.property_bhk }}</span></li>
                <!-- <li>Area : <span class="country-name">{{ property.property_area }}</span></li>
                <li>City : <span class="pin-code">{{ property.property_city }}</span></li>
                <li>State : <span class="pin-code">{{ property.property_state }}</span></li>
                <li>Pincode : <span class="pin-code">{{ property.property_pincode }}</span></li> -->
            </ul>
        </div>
        <div class="account-content">
            <h3>Address</h3>
            <ul>
                <li>Area : <span class="country-name">{{ property.property_area }}</span></li>
                <li>City : <span class="pin-code">{{ property.property_city }}</span></li>
                <li>State : <span class="pin-code">{{ property.property_state }}</span></li>
                <li>Pincode : <span class="pin-code">{{ property.property_pincode }}</span></li>
            </ul>
        </div>
    </div>
    <!-- </div> -->
</template>

<script setup lang="ts">
import { usewizaredStore } from '~/store/wizard'
import { useUserStore } from "~/store/user";
import { usePropertyStore } from "~/store/property";

let user = useUserStore();
let property = usePropertyStore();

defineProps([

])
let store = usewizaredStore();
</script>

<style scoped></style>