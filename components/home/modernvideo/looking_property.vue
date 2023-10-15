<template>
    <section class="property-section bg-comman-2">
        <div class="container">
            <div class="row ratio_55">
                <div class="col">
                    <div class="title-2 text-white">
                        <h2>{{ title }}</h2>
                        <p>{{ details }}</p>
                    </div>
                    <ElementLookingPropertyPropertytabs />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
let title: string = 'What Are You Looking For'
let details: string = 'Discover New York’s best things to do, restaurants, theatre, nightlife and more'

</script>

<style lang="scss" scoped></style>