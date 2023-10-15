<template>
    <section class="compare-section">
        <div class="container">
            <div class="compare-page">
                <div class="table-wrapper table-responsive text-center">
                    <table class="table" v-if="compare.length > 0">
                        <thead>
                            <tr class="th-compare">
                                <td>Action</td>
                                <th class="item-row" v-for="(i, index) in compare" :key="index">
                                    <button type="button" class="remove" @click="remove(index)">Remove</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="table-compare">
                            <tr>
                                <th class="property-name">Property Image</th>
                                <td class="item-row" v-for="(item, index) in compare" :key="index">
                                    <img :src="item.img[0]" alt="" class="featured-image">
                                    <div class="property_price">
                                        <h6 class="color-2">
                                            <nuxt-link to="/agent/submit-property">{{ item.title }}</nuxt-link>
                                        </h6>
                                        <span class="color-2">${{ item.price }}</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th class="property-name">Property Description</th>
                                <td class="item-row" v-for="(item, index) in compare" :key="index">
                                    <p class="description-compare">{{ item.details }}</p>
                                </td>
                            </tr>
                            <tr>
                                <th class="property-name">Bedroom</th>
                                <td v-for="(item, index) in compare" :key="index"><span>{{ item.bed }}</span></td>
                            </tr>
                            <tr>
                                <th class="property-name">Bathroom</th>
                                <td v-for="(item, index) in compare" :key="index"><span>{{ item.bath }}</span></td>
                            </tr>
                            <tr>
                                <th class="property-name">Sq Ft.</th>
                                <td v-for="(item, index) in compare" :key="index"><span>{{ item.sqft }}</span></td>
                            </tr>
                            <tr>
                                <th class="property-name">Location</th>
                                <td v-for="(item, index) in compare" :key="index"><span>{{ item.country }}</span></td>
                            </tr>
                            <tr>
                                <th class="property-name">Available</th>
                                <td v-for="(item, index) in compare" :key="index"><span>{{ item.type }}</span></td>
                            </tr>
                            <tr>
                                <th class="property-name">Wishlist</th>
                                <td class="available-stock" v-for="(i, index) in compare.length" :key="index">
                                    <nuxt-link to="/" class="add-to-wish btn btn-gradient color-2 btn-block btn-pill">Add to
                                        wishlist</nuxt-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <ElementEmptydataEmptycomper v-else />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Data_type from '~/static/data/types/letestforrent'
let compare = ref<Data_type[]>([])

function remove(index: number) {
    compare.value.splice(index, 1)
    localStorage.setItem('campare', JSON.stringify(compare.value))
}
onMounted(() => {
    if (!process.client) return;
    const storedCompare = localStorage.getItem('campare');
    if (storedCompare) {
        try {
            compare.value = JSON.parse(storedCompare);
        } catch {
        }
    }
})
</script>

<style scoped></style>