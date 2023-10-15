<template>
    <section class="feature-section bg-comman-2">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="title-2 text-white">
                        <h2>{{ title }}</h2>
                        <p>{{ details }}</p>
                    </div>
                    <ElementCities />
                </div>
            </div>
        </div>
    </section>
</template>
  
<script lang="ts" setup>
let title: string = 'Featured Cities'
let details: string = "See why ProCity is one of the best friends for exploring the city"
</script>
  
<style lang="scss" scoped></style>