<template>
    <ul class="header-right">
        <li v-if="router.fullPath == '/home/classic'">
            <div class="search-box" :class="toggle ? 'open' : ''">
                <i class="fas fa-search search-icon" @click="toggle = !toggle"></i>
                <span class="font-roboto">{{ 'Search' }}</span>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search here..">
                </div>
            </div>
        </li>
        <li>
            <nuxt-link to="/">
                <Icon name="material-symbols:home-outline"></Icon>
            </nuxt-link>
        </li>
        <li>
            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#login-modal">
                <Icon name="ic:twotone-person-outline"></Icon>
            </a>
        </li>
    </ul>
    <teleport to='body'>
        <Transition name="modals">
            <LayoutElementsModelsLoginModel />
        </Transition>
    </teleport>
</template>

<script lang="ts" setup>
let toggle = ref<boolean>(false)
let router = useRoute()
</script>

<style lang="scss" scoped></style>