<template>
    <section class="property-section ">
        <div class="container">
            <div class="row ratio_55">
                <div class="col">
                    <div class="title-1">
                        <span class="label label-gradient color-1">{{ 'Sale' }}</span>
                        <h2>{{ 'latest For Sale' }}</h2>
                        <hr>
                    </div>
                    <ElementForsaleSale5 :data="Letest_For_Sell" />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useurl } from '~/composable/apiurl'
import Property_Data from '~/static/data/types/letestforrent'
interface FetchResponse {
    data: {
        value: {
            LatestPropertyData: Property_Data[]
        }
    }
}
declare function useFetch(url: string): Promise<FetchResponse>
let { data } = await useFetch(useurl + '/data/property.json')
let Letest_For_Sell = <Property_Data[]>data.value.LatestPropertyData
</script>

<style lang="scss" scoped></style>