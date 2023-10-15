<template>
    <div class="left-sidebar filter-bottom-content" :class="showfilter ? 'd-block open' : ''">
        <h6 class="d-lg-none d-block text-end"><nuxt-link to="javascript:void(0)" class="close-filter-bottom"
                @click="closefilter()">Close filter</nuxt-link></h6>
        <div class="row">
            <div class="col-lg-4">
                <ElementFilteroptionStatus :data="data" />
            </div>
            <div class="col-lg-4">
                <ElementFilteroptionType :data="data" />
            </div>
            <div class="col-lg-4">
                <ElementFilteroptionRooms :data="data" />
            </div>
            <div class="col-lg-4">
                <ElementFilteroptionBed :data="data" />
            </div>
            <div class="col-lg-4">
                <ElementFilteroptionBath :data="data" />
            </div>
            <div class="col-lg-4">
                <ElementFilteroptionAgencies :data="data" />
            </div>
            <div class="col-lg-4">
                <ElementFilteroptionPrice label="Price" />
            </div>
            <div class="col-lg-4">
                <ElementFilteroptionArea label="area" />
            </div>
            <div class="col-lg-4 text-end">
                <nuxt-link to="javascript:void(0)" class="mt-3 btn btn-gradient color-2 btn-pill">Search
                    Property</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useFiltersStore } from "~/store/filter.js";
let props = defineProps({
    showfilter: Boolean
})
let close = ref<boolean>(false)
const data = useFiltersStore().data;
let emit = defineEmits(['closefilter'])
function closefilter() {
    close.value = false;
    emit('closefilter', close.value)
}
</script>

<style scoped></style>