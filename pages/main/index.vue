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
              <h2>{{ $t("whyChooseTheFourthWall.title") }}</h2>
              <svg class="title-svg">
                <use xlink:href="/svg/icons.svg#title-line"></use>
              </svg>
            </div>
            <p>Some logos should be here.</p>
          </div>
        </div>
      </div>
    </section>
    <Main3dDesign />
    <MainServices />
    <MainRecentWork />
    <MainTrustedPartners />
    <ElementTaptopTapTop3 />
  </LayoutLayoutsLayout2>
</template>

<script setup></script>

<style lang="scss" scoped></style>
