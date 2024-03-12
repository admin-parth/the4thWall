<template>
  <!-- <div class="wizard-form-details log-in"> -->
  <div class="title-3 text-start">
    <h2>Add your Location</h2>
  </div>
  <form class="row" id="needs-validation1" :class="classes" novalidate>
    <div class="form-group col-md-12">
      <div class="input-group">
        <div class="input-group-text">
          <Icon name="ph:map-pin" />
        </div>
        <input
          type="text"
          class="form-control"
          v-model="property.property_name"
          id="property_name"
          placeholder="Property name"
          required
        />
      </div>
    </div>
    <div class="form-group col-md-4">
      <div class="input-group">
        <div class="input-group-text">
          <Icon name="ph:map-pin" />
        </div>
        <input
          type="text"
          class="form-control"
          v-model="property.property_type"
          id="property_type"
          placeholder="Property type"
          required
        />
      </div>
    </div>
    <div class="form-group col-md-4">
      <div class="input-group">
        <div class="input-group-text">
          <Icon name="ph:map-pin" />
        </div>
        <input
          type="text"
          class="form-control"
          v-model="property.property_bhk"
          id="property_bhk"
          placeholder="Sq. ft. or BHK"
          required
        />
      </div>
    </div>
    <div class="form-group col-md-4">
      <div class="input-group">
        <div class="input-group-text">
          <Icon name="material-symbols:map-outline" />
        </div>
        <input
          type="text"
          class="form-control"
          v-model="property.property_area"
          id="property_area"
          placeholder="Property location & area"
          required
        />
      </div>
    </div>
    <div class="form-group col-md-4">
      <div class="input-group">
        <div class="input-group-text">
          <Icon name="material-symbols:map-outline" />
        </div>
        <input
          type="text"
          class="form-control"
          v-model="property.property_city"
          id="city"
          placeholder="City"
          required
        />
      </div>
    </div>
    <div class="form-group col-md-4">
      <div class="input-group">
        <div class="input-group-text">
          <Icon name="ph:map-pin" />
        </div>
        <input
          class="form-control"
          v-model="property.property_state"
          id="state"
          placeholder="State"
          required
        />
      </div>
    </div>
    <div class="form-group col-md-4">
      <div class="input-group">
        <div class="input-group-text">
          <Icon name="ph:map-pin" />
        </div>
        <input
          type="number"
          class="form-control"
          v-model="property.property_pincode"
          id="pin_code"
          placeholder="Pincode"
          required
        />
      </div>
    </div>
  </form>
  <!-- </div> -->
</template>

<script setup lang="ts">
import { usePropertyStore } from "~/store/property";
defineProps({
  classes: String,
});
let property = usePropertyStore();
</script>

<style scoped></style>
