<template>
    <div class="col-lg-12">
        <div class="form-group">
            <label>{{ props.label }}</label>
            <div class="dropdown">
                <span class="dropdown-toggle font-rubik d-flex justify-content-between align-items-center"
                    data-bs-toggle="dropdown" @click="open = !open"><span>{{ status }}</span>
                    <Icon name="material-symbols:keyboard-arrow-down" class="fs-5" />
                </span>
                <div class="dropdown-menu text-start" :class="open ? 'show' : ''">
                    <a class="dropdown-item" v-for="(status, index) in data" :key="index"
                        @click.prevent="getstatus(status.name)" href="javascript:void(0)">{{ status.name }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Status {
    filter: string;
    status: {
        name: string
    }
}
interface MyProps {
    label?: string;
    data: Status
}
const props = defineProps<MyProps>()
let status = ref<string>('Property Status')
let open = ref<boolean>(false);
let data = computed<Status>(() => {
    return props.data.filter((item: Status) => item.filter === 'status')[0].status
})
function getstatus(value: string) {
    status.value = value
}
</script>

<style lang="scss" scoped></style>