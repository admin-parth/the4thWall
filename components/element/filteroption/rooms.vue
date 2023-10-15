<template>
    <div :class="props.label ? 'col-lg-6' : 'col-lg-12'">
        <div class="form-group m-0">
            <label v-if="props.label">{{ props.label }}</label>
            <label v-if="props.labels">{{ props.labels }}</label>
            <div class="dropdown">
                <span class="dropdown-toggle font-rubik d-flex justify-content-between align-items-center"
                    data-bs-toggle="dropdown" @click="open = !open"><span>{{ route.query.rooms ? route.query.rooms : rooms
                    }}</span>
                    <Icon name="material-symbols:keyboard-arrow-down" class="fs-5" />
                </span>
                <div class="dropdown-menu text-start" :class="open ? 'show' : ''">
                    <nuxt-link class="dropdown-item" v-for="(room, index) in data" :key="index"
                        @click.prevent="getstatus(room.name)" to="javascript:void(0)">{{ room.name }}</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useSidebarfilterStore } from '~/store/sidebarfilter'
let props = defineProps({
    label: String,
    data: Object,
    labels: String
})
let route = useRoute();
let router = useRouter();
let store = useSidebarfilterStore();
let rooms = ref<string>('Max Rooms')
let open = ref<boolean>(false);
let data = computed<void>(() => {
    return props.data.filter((item: string) => item.filter === 'room')[0].room
})
function getstatus(value: string) {
    rooms.value = value
    store.getrooms(value)
    store.filterdata();
    store.mapfilterdata();
}
</script>

<style lang="scss" scoped></style>