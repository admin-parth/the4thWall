<template>
  <section id="about-us" class="values">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="title-2 mb-4">
            <h2>{{ $t("whyChooseTheFourthWall.titleAboutus") }}</h2>
          </div>

          <ol>
            <div
              v-for="(item, index) in Services_data"
              :key="index"
              class="fadeInUp d-flex flex-column p-2"
            >
              <li class="title">
                <b>{{ item.title }}</b>
              </li>
              <p class="text">{{ item.desc }}</p>
            </div>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const Services_data = [
  {
    title: "Punctuality Assured",
    desc: "We respect the significance of your time. At The Fourth Wall, we pledge that your project will be executed with precision and delivered right on schedule.",
    img: "/image/main/t1.svg",
  },
  {
    title: "Satisfaction Unquestioned",
    desc: "Our unwavering confidence in the excellence of our work is reflected in our satisfaction guarantee. You can be certain that you'll adore the outcome of our efforts.",
    img: "/image/main/t1.svg",
  },
  {
    title: "Comprehensive Service Spectrum",
    desc: "Our expertise extends across a broad spectrum of interior design services, encompassing meticulous space planning, exquisite furniture selection, and the meticulous addition of finishing touches.",
    img: "/image/main/t2.svg",
  },
  {
    title: "Seasoned and Artistic Design Team",
    desc: "Your design journey at The Fourth Wall is guided by our seasoned and highly creative designers. They collaborate closely with you to transform your space into a reflection of your unique style and personality.",
    img: "/image/main/t4.svg",
  },
  {
    title: "Competitive and Transparent Pricing",
    desc: "We understand the importance of cost considerations. That's why we offer competitive and transparent pricing on all our services and products.",
    img: "/image/main/t3.svg",
  },
];
</script>

<style lang="scss" scoped>
.svg-image {
  width: 80px;
  height: 80px;
}

.title {
  font-size: 18px;
  height: 2rem;
}

.text {
  font-size: 14px;
  color: black;
}
</style>
