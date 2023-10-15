<template>
    <div class="col-lg-12">
        <div class="form-group m-0">
            <label v-if="props.label">{{ props.label }}</label>
            <div class="dropdown">
                <span class="dropdown-toggle font-rubik d-flex justify-content-between align-items-center"
                    data-bs-toggle="dropdown" @click="open = !open"><span>{{
                        route.query.propertyType ? route.query.propertyType : type }}</span>
                    <Icon name="material-symbols:keyboard-arrow-down" class="fs-5" />
                </span>
                <div class="dropdown-menu text-start" :class="open ? 'show' : ''">
                    <nuxt-link class="dropdown-item" v-for="(status, index) in data" :key="index"
                        @click.prevent="getstatus(status.name)" to="javascript:void(0)">{{ status.name }}</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useSidebarfilterStore } from '~/store/sidebarfilter'
let props = defineProps({
    label: String,
    data: Object
})
let router = useRouter();
let route = useRoute()
let store = useSidebarfilterStore();
let type = ref<string>('Property Type')
let open = ref<boolean>(false);
let data = computed<void>(() => {
    return props.data.filter((item: string) => item.filter === 'type')[0].type
})

function getstatus(value: string) {
    type.value = value;
    store.gettype(value)
    store.filterdata()
    store.mapfilterdata();
}

</script>

<style lang="scss" scoped></style>