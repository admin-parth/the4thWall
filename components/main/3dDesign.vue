<template>
  <section class="about-main">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="title-2 mb-5">
            <h2>What is fully rendered 3D-Design?</h2>
            <svg class="title-svg">
              <use xlink:href="/svg/icons.svg#title-line"></use>
            </svg>
          </div>
          <div class="row gx-5">
            <div class="col-6">
              <img src="/image/main/service1.jpg" alt="" width="600" />
              <h3>Normal 3D</h3>
            </div>
            <div class="col-6">
              <img src="/image/main/service2.jpg" alt="" width="600" />
              <h3>Fully Rendered 3D</h3>
            </div>
          </div>

          <video
            src="/video/video.mp4"
            controls
            autoplay
            loop
            width="700"
          ></video>
          <br />
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-center">
      <a class="btn btn-gradient btn-pill color-2 me-1">Book Your Session</a>
    </div>
  </section>
</template>
<script></script>
<style scoped>
.book-session {
  padding: 10px;
  border-radius: 10px;
  background-color: #ff5c41;
  color: #000;
  cursor: pointer;
}
</style>
