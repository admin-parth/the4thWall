<template>
    <div class="col-lg-6">
        <div class="form-group">
            <label>{{ props.label }}</label>
            <div class="dropdown">
                <span class="dropdown-toggle font-rubik d-flex justify-content-between align-items-center"
                    data-bs-toggle="dropdown" @click="open = !open"><span>{{ status }}</span>
                    <Icon name="material-symbols:keyboard-arrow-down" class="fs-5" />
                </span>
                <div class="dropdown-menu text-start" :class="open ? 'show' : ''">
                    <a class="dropdown-item" v-for="(room, index) in data" :key="index"
                        @click.prevent="getstatus(room.name)" href="javascript:void(0)">{{ room.name }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Rooms {
    filter: string;
    room: {
        name: string | number
    }
}
interface MyProps {
    label?: string;
    data: Rooms
}
const props = defineProps<MyProps>()
let status = ref<string>('Max Rooms')
let open = ref<boolean>(false);
let data = computed<Rooms>(() => {
    return props.data.filter((item: Rooms) => item.filter === 'room')[0].room
})
function getstatus(value: string) {
    status.value = value
}
</script>

<style lang="scss" scoped></style>