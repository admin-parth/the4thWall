<template>
    <section class="video-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-5 col-lg-8">
                    <div class="video-details">
                        <span class="label label-light label-flat color-4">{{ '#Realestate' }}</span>
                        <h2>{{ 'Are you worried' }} <br /> {{ 'sick about moving out?' }} </h2>
                        <p class="font-roboto">{{ details }}</p>
                        <nuxt-link to="/listing/grid_view/2_grid-view/left-sidebar" type="button"
                            class="btn btn-gradient btn-lg color-4">{{ 'Search now' }}</nuxt-link>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-4">
                    <div class="play-icon">
                        <div class="icon-video">
                            <span class="heart-animation"></span>
                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#video"
                                @click="show = !show">
                                <i class="fas fa-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <teleport to='body'>
        <Transition name="modals">
            <div class="modal fade video-modal" id="video">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span
                                    aria-hidden="true" @click="show = false">×</span></button>
                            <iframe title="realestate" src="https://www.youtube.com/embed/Sz_1tkcU0Co"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </teleport>
</template>

<script lang="ts" setup>
let show = ref<boolean>(false)
let details: string = 'We know how it feels! Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening Elegant retreat in a quiet Coral Gables setting.'
</script>

<style lang="scss" scoped></style>