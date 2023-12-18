<template>
  <section class="">
    <div class="">
      <div class="row">
        <div class="col">
          <div class="title-2 mb-5">
            <h2>Recent Work</h2>
            <svg class="title-svg">
              <use xlink:href="/svg/icons.svg#title-line"></use>
            </svg>
          </div>
          <div class="recent-work position-relative">
            <img src="/image/main/satisfaction1.jpg" alt="" width="100%" />
            <a
              class="position-absolute top-50 start-50 translate-middle btn btn-white btn-pill color-1"
              >View More</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-center mt-3">
      <a class="btn btn-gradient btn-pill color-2 me-1">Book Your Session</a>
    </div>
  </section>
</template>

<script></script>
<style scoped>
.book-session {
  margin-top: 30px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ff5c41;
  color: #000;
  cursor: pointer;
}
.recent-work img {
  opacity: 0.7;
}

.recent-work a {
  padding: 10px;
  cursor: pointer;
  background: #fff;
  color: #000;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
