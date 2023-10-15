<template>
    <div class="property-details">
        <span class="font-roboto">{{ item.country }}</span>
        <nuxt-link :to="'/property/single-property-6/' + item.id">
            <h3>{{ item.title }}</h3>
        </nuxt-link>
        <h6>${{ item.price }}*</h6>
        <p class="font-roboto">{{ item.details }}</p>
        <ul>
            <li><img src="/image/svg/icon/double-bed.svg" class="img-fluid" alt="">{{ 'Bed' }} : {{ item.bed }}</li>
            <li><img src="/image/svg/icon/bathroom.svg" class="img-fluid" alt="">{{ 'Baths' }} : {{ item.bath }}</li>
            <li><img src="/image/svg/icon/square-ruler-tool.svg" class="img-fluid ruler-tool" alt="">{{ 'Sq Ft' }} : {{
                item.sqft }}</li>
        </ul>
        <div class="property-btn d-flex">
            <span>{{ item.date }}</span>
            <nuxt-link :to="'/property/single-property-6/' + item.id" class="btn btn-dashed btn-pill color-2" :class="color"
                @click="getimges(item.img)">Details</nuxt-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import DataType from '~/static/data/types/letestforrent'
interface MyProps {
    item: DataType;
    color: string;
}
let props = defineProps<MyProps>()
function getimges(value: string[]) {
    let images = useCookie<string[]>('images')
    images.value = value
}
</script>

<style scoped></style>