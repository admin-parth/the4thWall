<template>
    <section class="feature-section banner-4">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title-1 text-white">
                        <span class="label label-gradient color-6">{{ 'Our' }}</span>
                        <h2>{{ 'Feature Property' }}</h2>
                        <hr />
                    </div>
                    <ElementFeaturepropertyProperty1 :data="featureproduct" />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useurl } from '~/composable/apiurl'
import Product from '~/static/data/types/featureproperty'
interface FetchResponse {
    data: {
        value: {
            FeaturedProperty: Product[]
        }
    }
}
declare function useFetch(url: string): Promise<FetchResponse>
let { data } = await useFetch(useurl + '/data/property.json')
let featureproduct = <Product[]>data.value.FeaturedProperty
</script>

<style lang="scss" scoped></style>