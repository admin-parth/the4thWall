<template>
  <section id="about-us" class="values">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="title-2 mb-4">
            <h2>{{ $t("whyChooseTheFourthWall.title") }}</h2>
            <svg class="title-svg">
              <use xlink:href="/svg/icons.svg#title-line"></use>
            </svg>
          </div>
          <div class="row property-service column-space about-service">
            <div
              class="col-xl-3 fadeInUp d-flex flex-column align-items-center gap-3 p-3"
              v-for="(item, index) in Services_data"
              :key="index"
            >
              <img :src="item.img" alt="" class="svg-image" />
              <h2 class="title">{{ item.title }}</h2>
              <p class="text">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const Services_data = [
  {
    title: "Flat 10 year warranty",
    desc: "Choose interiors designed with superior quality material, leaving no room for defects.",
    img: "/image/main/t1.svg",
  },
  {
    title: "45-day delivery",
    desc: "Get beautiful interiors for your new home in just 45 days. That’s our delivery guarantee.",
    img: "/image/main/t2.svg",
  },
  {
    title: "600+ design experts",
    desc: "Explore design ideas and co-create your dream home with our experienced designers.",
    img: "/image/main/t3.svg",
  },
  {
    title: "Post-installation service",
    desc: "Complete your design journey and get unwavering support from our dedicated care team.",
    img: "/image/main/t4.svg",
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
}

.text {
  font-size: 14px;
  text-align: center;
  color: black;
}

// .values{
//    background-color: #eee;
//   box-shadow: inset 0px 4px 10px rgba(50, 50, 50, 0.1), inset 0px -4px 10px rgba(50, 50, 50, 0.1);
// }
</style>
