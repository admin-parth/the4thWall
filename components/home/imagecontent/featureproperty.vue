<template>
    <section class="feature-section feature-bg">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title-1 text-white">
                        <span class="label label-gradient color-1">{{ 'Our' }}</span>
                        <h2>{{ 'Featured Property' }}</h2>
                        <hr>
                    </div>
                    <ElementFeaturepropertyProperty5 :data="Feature_Property" />
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
let Feature_Property = <Product[]>data.value.FeaturedProperty

</script>

<style lang="scss" scoped></style>