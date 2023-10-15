<template>
    <section class="testimonial-client">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title-3 text-start">
                        <h2>{{ title }}</h2>
                        <p class="font-roboto">{{ details }}</p>
                    </div>
                    <ElementHappyClinetTestimonial4 />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
let title: string = 'Our happy Client';
let details: string = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening'
</script>

<style lang="scss" scoped></style>