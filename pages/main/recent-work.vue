<template>
    <Head>
        <Title>Design Gallery | The 4th Wall</Title>
    </Head>
    <LayoutLayoutsLayout2>
        <MainBannerBreadcrumb :title="title" first="Home" current="Design gallery" />
        <MainRecentWorkKitchen :data="Grid_Img" classes="col-lg-3 col-sm-6"  @change-active="change" />
        <ElementTaptopTapTop3 />
    </LayoutLayoutsLayout2>
</template>

<script setup>
import recentWork from '~/static/data/recentWork'

const Grid_Img = recentWork.sort(() => Math.random() - 0.5)
const title = ref('bedroom')

const change = (value) => {
    title.value = value
}
</script>

<style scoped></style>