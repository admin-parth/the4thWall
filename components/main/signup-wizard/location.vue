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
        
        <!-- <input
          type="text"
          class="form-control"
          v-model="property.property_type"
          id="property_type"
          placeholder="Property type"
          required
        /> -->
        <div class="dropdown property-type-dropdown">
          <span class="dropdown-toggle font-rubik align-items-center"
              data-bs-toggle="dropdown" @click="openPropertyType">
              <div class="input-group-text">
                <Icon name="ph:map-pin" />
              </div>
              <div class="dropdown-text">
                <span>{{ propertyType }}</span>
                <Icon name="material-symbols:keyboard-arrow-down" class="fs-5" />
              </div>
          </span>
          <div class="dropdown-menu text-start" :class="showPropertyType ? 'show' : ''">
              <p class="dropdown-item" v-for="(property, index) in properyTypeData" :key="index"
                  @click.prevent="setPropertyType(property)">{{ property }}</p>
          </div>
        </div>
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
          :placeholder="propertyBHKplaceholder"
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
          v-model="property.property_purpose"
          id="property_purpose"
          placeholder="Purpose (eg. Stay, Rent)"
          required
        />
      </div>
    </div>
    <div class="form-group col-md-4">
      <div class="input-group">
        <!-- <input
          type="text"
          class="form-control"
          v-model="property.property_work"
          id="property_work"
          placeholder="Work type"
          required
        /> -->
        <div class="dropdown property-type-dropdown">
          <span class="dropdown-toggle font-rubik align-items-center"
              data-bs-toggle="dropdown" @click="openWorkType">
              <div class="input-group-text">
                <Icon name="material-symbols:map-outline" />
              </div>
              <div class="dropdown-text">
                <span>{{ workType }}</span>
                <Icon name="material-symbols:keyboard-arrow-down" class="fs-5" />
              </div>
          </span>
          <div class="dropdown-menu text-start" :class="showWorkType ? 'show' : ''">
              <p class="dropdown-item" v-for="(work, index) in workTypeData" :key="index"
                  @click.prevent="setWorkType(work)">{{ work }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group col-md-8">
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
    <div class="form-group offset-md-2 col-md-8 justify-self-center">
      <div class="input-group">
        <div class="input-group-text">
          <Icon name="ph:map-pin" />
          <label class="mb-0" for="floor-plan"
            >Upload brochure or floorplan</label
          >
        </div>
        <input
          type="file"
          class="form-control"
          id="floor-plan"
          @change="handleUpload($event)"
        />
      </div>
    </div>
  </form>
  <!-- </div> -->
</template>

<script setup lang="ts">
import { usePropertyStore } from "~/store/property";
import Swal from "sweetalert2";
defineProps({
  classes: String,
});
let property = usePropertyStore();
let showPropertyType = ref<boolean>(false);
let propertyType = ref<string>('Property type');
const properyTypeData = [
  'Residential',
  'Commercial',
  'Other'
]
const openPropertyType = () => {
  showPropertyType.value = true
}
const setPropertyType = (value: string) => {
  propertyType.value = value
  showPropertyType.value = false
  property.property_type = value
}

let showWorkType = ref<boolean>(false);
let workType = ref<string>('Work type');
const workTypeData = [
  'New',
  'Renovation',
  'Other'
]
const openWorkType = () => {
  showWorkType.value = true
}
const setWorkType = (value: string) => {
  workType.value = value
  showWorkType.value = false
  property.work_type = value
}

const propertyBHKplaceholder = computed(() => {
  if(property.property_type == 'Residential') return 'BHK'
  else if (property.property_type == 'Commercial') return 'Square feet'
  else return 'Specify additional information'
})

const handleUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target && target.files) {
    property.SET_floorPlan(target.files[0]);
  }
};
</script>

<style scoped></style>
