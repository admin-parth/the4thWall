<template>
    <section class="property-section slick-between slick-shadow pt-0 search-tab-items">
        <div class="container">
            <div class="row ratio_landscape">
                <div class="col">
                    <div class="title-3 text-start">
                        <h2>{{ title }}</h2>
                        <p>{{ details }}</p>
                    </div>
                    <div class="listing-hover-property row">
                        <ElementForsaleSale1 :data="Letest_For_Sell" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useurl } from '~/composable/apiurl'
import Property_Data from '~/static/data/types/letestforsaledata'
interface FetchResponse {
    data: {
        value: {
            LatestForSalePropertyData: Property_Data[]
        }
    }
}
declare function useFetch(url: string): Promise<FetchResponse>
let title: string = 'Latest Property'
let details: string = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening.'
let { data } = await useFetch(useurl + '/data/property.json')
let Letest_For_Sell = <Property_Data[]>data.value.LatestForSalePropertyData
</script>

<style lang="scss" scoped></style>