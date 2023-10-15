<template>
    <div class="col-lg-6">
        <div class="form-group">
            <label>{{ props.label }}</label>
            <div class="dropdown">
                <span class="dropdown-toggle font-rubik d-flex justify-content-between align-items-center"
                    data-bs-toggle="dropdown" @click="open = !open"><span>{{ bath }}</span>
                    <Icon name="material-symbols:keyboard-arrow-down" class="fs-5" />
                </span>
                <div class="dropdown-menu text-start" :class="open ? 'show' : ''">
                    <a class="dropdown-item" v-for="(bath, index) in data" :key="index"
                        @click.prevent="getstatus(bath.name)" href="javascript:void(0)">{{ bath.name }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Bath {
    filter: string;
    bath: {
        name: string | number
    }
}
interface MyProps {
    label?: string;
    data: Bath
}
let props = defineProps<MyProps>()
let bath = ref<string>('Bath')
let open = ref<boolean>(false);
let data = computed<Bath>(() => {
    return props.data.filter((item: Bath) => item.filter === 'bath')[0].bath
})

function getstatus(value: string) {
    bath.value = value
}
</script>

<style lang="scss" scoped></style>