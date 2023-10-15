<template>
    <div class="col-lg-6">
        <div class="form-group">
            <label>{{ props.label }}</label>
            <div class="dropdown">
                <span class="dropdown-toggle font-rubik d-flex justify-content-between align-items-center"
                    data-bs-toggle="dropdown" @click="open = !open"><span>{{ agencies }}</span>
                    <Icon name="material-symbols:keyboard-arrow-down" class="fs-5" />
                </span>
                <div class="dropdown-menu text-start" :class="open ? 'show' : ''">
                    <a class="dropdown-item" v-for="(agency, index) in data" :key="index"
                        @click.prevent="getstatus(agency.name)" href="javascript:void(0)">{{ agency.name }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Agencies {
    filters: string;
    agencies: {
        name: string;
    }[]
}
interface MyProps {
    label: string;
    data: Agencies;
}
let props = defineProps<MyProps>()
let agencies = ref<string>('Agencies')
let open = ref<boolean>(false);
let data = computed<Agencies>(() => {
    return props.data.filter((item: Agencies) => item.filters === 'agencies')[0].agencies
})
function getstatus(value: string) {
    agencies.value = value
}
</script>

<style lang="scss" scoped></style>