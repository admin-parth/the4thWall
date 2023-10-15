<template>
    <div class="loader-wrapper" v-if="loader">
        <div class="row loader-img">
            <div class="col-12">
                <img src="/image/loader/loader-2.gif" class="img-fluid" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
let loader = ref<boolean>(true);
onMounted(() => {
    setTimeout(() => {
        loader.value = false;
    }, 3000);
})
</script>

<style scoped></style>