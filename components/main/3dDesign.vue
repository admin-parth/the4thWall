<template>
  <section class="about-main">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="title-2 mb-4">
            <h2>What is fully rendered 3D-Design?</h2>
            <svg class="title-svg">
              <use xlink:href="/svg/icons.svg#title-line"></use>
            </svg>
          </div>
          <div
            class="row gx-5 d-inline-flex flex-md-row flex-sm-column justify-content-center mb-5"
          >
            <div
              class="col-md-5 col-sm-12 d-flex flex-column gap-3 justify-content-center"
            >
              <img src="/image/main/service1.jpg" alt="" />
              <h3>Normal 3D</h3>
            </div>
            <div
              class="col-md-5 col-sm-12 d-flex flex-column gap-3 justify-content-center"
            >
              <img src="/image/main/service2.jpg" alt="" />
              <h3>Fully Rendered 3D</h3>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-sm-12 col-md-10">
              <video controls autoplay loop>
                <source src="/video/video.mp4" />
              </video>
            </div>
          </div>

          <br />
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-center mt-5">
      <a
        class="btn btn-gradient btn-pill color-2 me-1"
        @click="handleBookSession"
      >
        Book Your Session
      </a>
    </div>
  </section>
</template>
<script lang="ts" setup>
let route = useRoute();
let router = useRouter();

function handleBookSession(e: any) {
  e.preventDefault();
  console.log("clicked");
  router.push({ path: "/main/signup" });
}
</script>
<style scoped>
img {
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  width: 100%;
}
h3 {
  text-align: center;
}

video {
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  width: 100%;
}
</style>
