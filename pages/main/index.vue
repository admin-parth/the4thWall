<template>
  <Head>
    <Title>The 4th Wall</Title>
  </Head>
  <LayoutLayoutsLayout2>
    <MainBanner />
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
                        image1="main/clock.jpg"
                        image2="main/agenda.jpg"
                    />
                    <div class="hr p-5"><hr></div>
                    <MainContentWithImage 
                        :title="$t('whyChooseTheFourthWall.subTitle2')"
                        :description="$t('whyChooseTheFourthWall.para2')"
                        image1="main/satisfaction1.jpg"
                        image2="main/satisfaction2.jpg"
                        :imageOnRight="true"
                    />
                    <div class="hr p-5"><hr></div>
                    <MainContentWithImage 
                        :title="$t('whyChooseTheFourthWall.subTitle3')"
                        :description="$t('whyChooseTheFourthWall.para3')"
                        image1="main/service1.jpg"
                        image2="main/service2.jpg"
                    />
                </div>
            </div>
        </div>
    </section>
    <MainServices />
    <ElementTaptopTapTop3 />
  </LayoutLayoutsLayout2>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>