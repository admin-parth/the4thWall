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
                    <a class="dropdown-item" v-for="(type, index) in data" :key="index"
                        @click.prevent="getstatus(type.name)" href="javascript:void(0)">{{ type.name }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Type {
    filter: string;
    type: {
        name: string
    }
}
interface MyProps {
    label?: string;
    data: Type
}
const props = defineProps<MyProps>()
let status = ref<string>('Property Type')
let open = ref<boolean>(false);
let data = computed<Type>(() => {
    return props.data.filter((item: Type) => item.filter === 'type')[0].type
})

function getstatus(value: string) {
    status.value = value
}
</script>

<style lang="scss" scoped></style>