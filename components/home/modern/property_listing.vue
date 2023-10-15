<template>
    <section class="property-section">
        <div class="container">
            <div class="row ratio_55">
                <div class="col">
                    <div class="title-2">
                        <h2>{{ title }}</h2>
                        <p>{{ details }}</p>
                    </div>
                    <ElementListingListing3 />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
let title: string = 'Latest Property Listing';
let details: string = 'Discover New York’s best things to do, restaurants, theatre, nightlife and more'
</script>

<style lang="scss" scoped></style>