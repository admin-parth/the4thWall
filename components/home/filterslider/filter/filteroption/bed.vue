<template>
    <div class="col-lg-6">
        <div class="form-group">
            <label>{{ props.label }}</label>
            <div class="dropdown">
                <span class="dropdown-toggle font-rubik d-flex justify-content-between align-items-center"
                    data-bs-toggle="dropdown" @click="open = !open"><span>{{ bed }}</span>
                    <Icon name="material-symbols:keyboard-arrow-down" class="fs-5" />
                </span>
                <div class="dropdown-menu text-start" :class="open ? 'show' : ''">
                    <a class="dropdown-item" v-for="(bed, index) in data" :key="index" @click.prevent="getstatus(bed.name)"
                        href="javascript:void(0)">{{ bed.name }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Bed {
    filter: string;
    bath: {
        name: string | number
    }
}
interface MyProps {
    label?: string;
    data: Bed
}
let props = defineProps<MyProps>()
let bed = ref<string>('Bed')
let open = ref<boolean>(false);
let data = computed<Bed>(() => {
    return props.data.filter((item: Bed) => item.filter === 'bed')[0].bed
})

function getstatus(value: string) {
    bed.value = value
}
</script>

<style lang="scss" scoped></style>