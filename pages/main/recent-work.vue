<template>
    <Head>
        <Title>Recent Work | The 4th Wall</Title>
    </Head>
    <LayoutLayoutsLayout2>
        <MainBannerBreadcrumb title="Recent work" first="Home" current="Recent work" />
        <MainRecentWorkKitchen :data="Grid_Img" classes="col-lg-3 col-sm-6" />
        <ElementTaptopTapTop3 />
    </LayoutLayoutsLayout2>
</template>

<script setup>
import recentWork from '~/static/data/recentWork'

const Grid_Img = recentWork.sort(() => Math.random() - 0.5)
</script>

<style scoped></style>