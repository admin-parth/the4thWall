<template>
    <section class="service-section service-2">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title-2 mb-5">
                        <h2>{{ $t('ourDesignProcess.title') }}</h2>
                        <svg class="title-svg">
                            <use xlink:href="/svg/icons.svg#title-line"></use>
                        </svg>
                    </div>
                    <div class="row property-service column-space about-service">
                        <div class="col-xl-6 col-md-6 fadeInUp" v-for="(item, index) in Services_data" :key="index">
                            <div class="service-box ">
                                <div class="hover-line">
                                    <svg class="service-icon">
                                        <use :xlink:href="item.svg"></use>
                                    </svg>
                                    <div>
                                        <svg class="icon-line-color">
                                            <use :xlink:href="item.svg1"></use>
                                        </svg>
                                    </div>
                                </div>
                                <nuxt-link to="/">
                                    <h3>{{ item.title }}</h3>
                                </nuxt-link>
                                <p class="font-roboto three-lines-only">{{ item.details }}</p>
                                <nuxt-link to="/main/design-process" class="btn btn-light-bg"><span>{{ 'view more '}}</span></nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const Services_data = [
    {
        "svg":"/svg/icons.svg#home-heart",
        "svg1":"/svg/icons.svg#line-straight",
        "title":"Get your vision",
        "details": t('ourDesignProcess.para1')
    },
    {
        "svg":"/svg/icons.svg#customer-service",
        "svg1":"/svg/icons.svg#line-straight",
        "title":"Design your idea",
        "details":t('ourDesignProcess.para2')
    },
    {
        "svg":"/svg/icons.svg#key",
        "svg1":"/svg/icons.svg#line-straight",
        "title":"Worry-free installiation",
        "details":t('ourDesignProcess.para3')
    },
    {
        "svg":"/svg/icons.svg#shield",
        "svg1":"/svg/icons.svg#line-straight",
        "title":"Review process",
        "details":t('ourDesignProcess.para4')
    }
]
</script>
<style scoped></style>