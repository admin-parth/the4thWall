<template>
    <section class="parallax-home video-layout">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-9">
                    <div class="parallax-content">
                        <div class="box">
                            <div class="title">
                                <span class="block"></span>
                                <h1>{{ 'Luxury' }}
                                    <br /> {{ "Apartment" }}
                                </h1>
                            </div>
                            <div class="role">
                                <div class="block"></div>
                                <p class="font-roboto">{{ 'Limited time offer.Hurry up !!' }}</p>
                            </div>
                        </div>
                        <form class="video-search">
                            <div class="input-group">
                                <span class="input-group-text" id="basic-addon1">
                                    <Icon name="ph:map-pin" />
                                </span>
                                <input type="text" class="form-control" placeholder="Search location"
                                    aria-describedby="basic-addon1">
                            </div>
                            <div class="dropdown">
                                <h6 class="dropdown-toggle font-roboto" data-bs-toggle="dropdown">
                                    <span>{{ status }}</span><i class="fas fa-angle-down"></i>
                                </h6>
                                <div class="dropdown-menu text-start">
                                    <a class="dropdown-item" href="javascript:void(0)" v-for="(item, index) in data"
                                        :key="index" @click="getstatus(item)">{{ item }}</a>
                                </div>
                            </div>
                            <div>
                                <button type="button" class="btn btn-solid btn-flat color-7">{{ 'Search' }}</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="parallax-right">
                        <img src="/image/layout/playing.svg" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>

let data: string[] = ['Any property type', 'office', 'Appartment', 'House', 'Villa']
let status = ref<string>('Any property type')
function getstatus(value: string) {
    status.value = value
}
</script>

<style lang="scss" scoped></style>