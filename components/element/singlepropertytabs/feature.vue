<template>
    <div class="tab-pane fade page-section" id="feature">
        <h4 class="content-title">features</h4>
        <div class="single-feature row">
            <div class="col-xxl-3 col-xl-4 col-6">
                <ul>
                    <li v-for="(item, index) in Feature_1" :key="index">
                        <i :class="item.icon"></i>
                        {{ item.name }}
                    </li>
                </ul>
            </div>
            <div class="col-xxl-3 col-xl-4 col-6">
                <ul>
                    <li v-for="(item, index) in Feature_2" :key="index">
                        <i :class="item.icon"></i>
                        {{ item.name }}
                    </li>
                </ul>
            </div>
            <div class="col-xxl-3 col-xl-4 col-6">
                <ul>
                    <li v-for="(item, index) in Feature_3" :key="index">
                        <i :class="item.icon"></i>
                        {{ item.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useurl } from '~/composable/apiurl'
interface Feature {
    icon: string;
    name: string;
}
interface FetchResponse {
    data: {
        value: {
            feature1: Feature[];
            feature2: Feature[];
            feature3: Feature[];
        };
    }
}
declare function useFetch(url: string): Promise<FetchResponse>;
let { data } = await useFetch(useurl + '/data/propertysingleiamge.json')
const Feature_1 = data.value.feature1;
const Feature_2 = data.value.feature2;
const Feature_3 = data.value.feature3
</script>

<style scoped></style>