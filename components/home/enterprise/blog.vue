<template>
    <section class="blog-section bg-comman-2">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title-2 text-white">
                        <h2>{{ title }}</h2>
                        <p>{{ details }}</p>
                    </div>
                    <ElementBlogBlog3 />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
let title: string = 'Latest Blog'
let details: string = 'See why ProCity is one of the best friends for exploring the city.'
</script>

<style lang="scss" scoped></style>