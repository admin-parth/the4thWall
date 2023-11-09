<template>
    <Head>
        <Title>Our Specialities | The 4th Wall</Title>
    </Head>
    <LayoutLayoutsLayout2>
        <MainBannerBreadcrumb title="Our Specialities" first="Home" current="Our Specialities" />
    
        <section class="about-main">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="title-2 mb-5">
                            <h2>{{ $t('whyChooseTheFourthWall.title') }}</h2>
                            <svg class="title-svg">
                                <use xlink:href="/svg/icons.svg#title-line"></use>
                            </svg>
                        </div>
                        <MainContentWithImage 
                            :title="$t('whyChooseTheFourthWall.subTitle1')"
                            :description="$t('whyChooseTheFourthWall.para1')"
                            :showImage="false"
                         />
                        <div class="hr p-3"><hr></div>
                        <MainContentWithImage 
                            :title="$t('whyChooseTheFourthWall.subTitle2')"
                            :description="$t('whyChooseTheFourthWall.para2')"
                            :showImage="false"
                         />
                        <div class="hr p-3"><hr></div>
                        <MainContentWithImage 
                            :title="$t('whyChooseTheFourthWall.subTitle3')"
                            :description="$t('whyChooseTheFourthWall.para3')"
                            :showImage="false"
                         />
                        <div class="hr p-3"><hr></div>
                        <MainContentWithImage 
                            :title="$t('whyChooseTheFourthWall.subTitle4')"
                            :description="$t('whyChooseTheFourthWall.para4')"
                            :showImage="false"
                         />
                        <div class="hr p-3"><hr></div>
                        <MainContentWithImage 
                            :title="$t('whyChooseTheFourthWall.subTitle5')"
                            :description="$t('whyChooseTheFourthWall.para5')"
                            :showImage="false"
                         />
                    </div>
                </div>
            </div>
        </section>


        <ElementTaptopTapTop3 />
    </LayoutLayoutsLayout2>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>