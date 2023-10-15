<template>
    <div class="filter-tag-div">
        <div class="filter-tag" v-if="filterdata.propertyStatus">
            property-status : {{ filterdata.propertyStatus }}
        </div>
        <div class="filter-tag" v-if="filterdata.propertyType">
            property-Type : {{ filterdata.propertyType }}
        </div>
        <div class="filter-tag" v-if="filterdata.rooms">
            Max-Rooms : {{ filterdata.rooms }}
        </div>
        <div class="filter-tag" v-if="filterdata.bed">
            Bed : {{ filterdata.bed }}
        </div>
        <div class="filter-tag" v-if="filterdata.bath">
            bath : {{ filterdata.bath }}
        </div>
        <div class="filter-tag" v-if="filterdata.agencies">
            Agencies : {{ filterdata.agencies }}
        </div>

    </div>
</template>

<script setup lang="ts">
import { useSidebarfilterStore } from '~/store/sidebarfilter'
let store = useSidebarfilterStore();
let route = useRoute();
let filterdata = ref(route.query)
let price = useCookie('price');
let area = useCookie('area')
watch(route, () => {
    filterdata.value = route.query
})
onMounted(() => [
    filterdata.value = route.query
])

</script>

<style scoped></style>