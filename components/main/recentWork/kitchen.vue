<template>
  <section class="portfolio-section portfolio-grid mb-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="filter-panel">
            <div class="top-panel tab-icon">
              <div class="filters respon-filter-content filter-button-group">
                <ul>
                  <!-- <li :class="active == 'all' ? 'active' : ''" @click="getvalue('all')"> -->
                  <!-- <Icon name="ic:round-house" class="fs-1" /> -->
                  <!-- <span>All</span>
                                    </li> -->
                  <li
                    :class="active == 'bedroom' ? 'active' : ''"
                    @click="getvalue('bedroom')"
                  >
                    <!-- <Icon name="solar:sale-linear" class="fs-1" /> -->
                    <span>Bedroom</span>
                  </li>
                  <li
                    :class="active == 'livingRoom' ? 'active' : ''"
                    @click="getvalue('livingRoom')"
                  >
                    <!-- <Icon name="material-symbols:location-on-outline" class="fs-1" /> -->
                    <span>Living Room</span>
                  </li>
                  <li
                    :class="active == 'kitchen' ? 'active' : ''"
                    @click="getvalue('kitchen')"
                  >
                    <!-- <Icon name="fluent:document-one-page-24-regular" class="fs-1" /> -->
                    <span>Kitchen</span>
                  </li>
                  <li
                    :class="active == 'office' ? 'active' : ''"
                    @click="getvalue('office')"
                  >
                    <!-- <Icon name="fluent:document-one-page-24-regular" class="fs-1" /> -->
                    <span>Office</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="column-sm row grid ratio2_3 zoom-gallery-multiple">
            <div
              class="sale grid-item wow fadeInUp"
              :class="classes"
              v-for="(item, index) in getdata"
              :key="index"
            >
              <div class="grid-box">
                <div class="overlay">
                  <div class="portfolio-image">
                    <nuxt-link
                      to="javascript:void(0)"
                      :style="'background-image:url(' + item.src + ')'"
                      class="bg-size background"
                      @click="showsingle(index, 'item')"
                    >
                      <img :src="item.src" class="bg-img d-none" alt="" />
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <h2>360 view</h2>
            <div
              class="sale grid-item wow fadeInUp"
              :class="classes"
              v-for="(item, index) in getdata"
              :key="index"
            >
              <div class="grid-box">
                <div class="overlay">
                  <div class="portfolio-image">
                    <nuxt-link
                      to="javascript:void(0)"
                      :style="'background-image:url(' + item.src + ')'"
                      class="bg-size background"
                      @click="showsingle(index, '360')"
                    >
                      <img :src="item.src" class="bg-img d-none" alt="" />
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div
    class="modal fade edit-profile-modal"
    id="customModal"
    tabindex="-1"
    aria-labelledby="customModalLabel"
    aria-hidden="true"
    @keydown.esc="closeModal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">
          <iframe
            v-if="is360Image"
            :src="itemSrc"
            width="100%"
            height="414px"
            allowfullscreen
          ></iframe>
          <img v-else :src="itemSrc" class="img-fluid gallary-img" alt="" />
        </div>
        <div class="modal-footer">
          <div @click="prevImage">&lt;</div>
          <div @click="nextImage">&gt;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface MyProps {
  classes: string;
  data: img[];
}
interface img {
  src: string;
  type: string;
}
let props = defineProps<MyProps>();
let visible = ref<boolean>(false);
let index = ref<number>(0);
let is360Image = ref(false);
let itemSrc = ref("");
let active = ref<string>("bedroom");
let currentIndex = ref(0);
let getdata = computed(() => {
  // if (active.value == 'all') {
  //     return props.data
  // }
  return props.data.filter((item: img) => item.type == active.value);
});
function showsingle(i: any, type: string) {
  currentIndex.value = i;
  if (type === "360") {
    is360Image.value = true;
    itemSrc.value =
      "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://t3.ftcdn.net/jpg/03/85/07/52/360_F_385075210_PehsaPu4a2NaxfX5nvxnJvBPRzhNTfMi.jpg&autoLoad=true&autoRotate=-2";

    console.log(itemSrc, "itemSrc");
  } else {
    is360Image.value = false;
    index.value = i;
    console.log(props.data[i].src);
    itemSrc.value = props.data[i].src;
  }
  const modal = document.getElementById("customModal");
  modal?.classList.add("show");
  modal?.setAttribute("aria-modal", "true");
  modal?.setAttribute(
    "style",
    "display: flex;justify-content: center;align-items:center;height: 700px"
  );
  document.body.classList.add("modal-open");
}

function closeModal() {
  const modal = document.getElementById("customModal");
  modal?.classList.remove("show");
  modal?.setAttribute("aria-modal", "false");
  modal?.setAttribute("style", "display: none");
  document.body.classList.remove("modal-open");
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % props.data.length;
  showsingle(currentIndex.value, props.data[currentIndex.value].type);
}

function prevImage() {
  currentIndex.value =
    (currentIndex.value - 1 + props.data.length) % props.data.length;
  showsingle(currentIndex.value, props.data[currentIndex.value].type);
}
function getvalue(value: string) {
  active.value = value;
}
</script>

<style scoped>
.gallary-img {
  height: 400px;
  width: 100%;
}
.modal-dialog {
  max-width: 90vw;
}
.modal-body {
  max-height: calc(100vh - 200px);
}
.modal-content {
  max-height: calc(100vh - 400px);
}
.modal-footer {
  justify-content: space-between;
  position: relative;
  top: -300px;
  border: none;
  font-size: 40px;
  cursor: pointer;
}
</style>
