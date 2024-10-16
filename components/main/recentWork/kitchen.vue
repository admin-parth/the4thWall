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
                      :class="active == 'livingroom' ? 'active' : ''"
                      @click="getvalue('livingroom')"
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
                v-for="(item, index) in filteredImages"
                :key="index"
              >
                <div class="grid-box">
                  <div class="overlay">
                    <div class="portfolio-image">
                      <nuxt-link
                        to="javascript:void(0)"
                        :style="{ backgroundImage: `url(${item.src})` }"
                        class="bg-size background"
                        @click="showsingle(index, 'simple', item.src)"
                      >
                        <img :src="item.src" class="bg-img d-none" alt="" />
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="title-2 mb-4" v-if="filtered360Images.length > 0">
                <h2>360 & VR photos</h2>
              </div>
              <div
                class="sale grid-item wow fadeInUp"
                :class="classes"
                v-for="(item, index) in filtered360Images"
                :key="index"
              >
                <div class="grid-box">
                  <div class="overlay">
                    <div class="portfolio-image">
                      <nuxt-link
                        to="javascript:void(0)"
                        :style="{ backgroundImage: `url(${item.src})` }"
                        class="bg-size background"
                        @click="showsingle(index, '360', item.src)"
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
    <template v-if="is360 && visible">
      <div class="vel-modal">
        <div class="vel-img-wrapper">
          <iframe
            class="vel-img panellum-img"
            width="100%"
            height="414px"
            allowfullscreen
            style="
              border-radius: 10px;
              box-shadow: 0px 10px 13px -7px #000000,
                5px 5px 15px 5px rgba(0, 0, 0, 0);
            "
            :src="selected360"
          ></iframe>
        </div>
        <div class="vel-btns-wrapper">
          <button class="close" @click="handleHide">&times;</button>
        </div>
      </div>
    </template>
    <template v-else>
      <vue-easy-lightbox
        scrollDisabled
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </template>
</template>

<script setup lang="ts">
import recentWork from '~/static/data/recentWork';

let active = ref<string>("bedroom");
let props = defineProps<MyProps>();
let visible = ref<boolean>(false);
let is360 = ref<boolean>(false);
let index = ref<number>(0);
let imgs = ref<string[]>([]);
let selected360 = ref<string>("");


interface MyProps {
  classes: string;
  data: img[];
}
interface img {
  src: string;
  type: string;
}
const emit = defineEmits(["changeActive"]);
// const imageCategories = useState('imageCategories', () => null);
const filteredImages = computed(() => {
  const category = recentWork.filter(cat => cat.type === active.value);
  return category ? category : [];
});
const filtered360Images = computed(() => {
  const category = recentWork.filter(cat => cat.type === `360-${active.value}`);
  return category ? category : [];
});

function showsingle(i: number, type: string, item: string) {
  index.value = i;
  imgs.value = [];
  if (type === "simple") {
    filteredImages.value.forEach((element: img) => {
      imgs.value.push(element.src);
    });
    is360.value = false;
  } else {
    const val = filtered360Images.value.find((obj: { src: string; }) => obj.src === item)
    selected360.value = `https://cdn.pannellum.org/2.5/pannellum.htm#panorama=${val.imgurUrl}&autoLoad=true&autoRotate=-2`
    is360.value = true;
  }
  visible.value = true;
}
function handleHide() {
  visible.value = false;
}

function getvalue(value: string) {
  emit("changeActive", value);
  active.value = value;
}

</script>

<style scoped>
.vel-img-wrapper {
  left: 52%;
  transform: translate(-50%, -50%) scale(1) rotate(0deg);
}

.panellum-img {
  width: 80vw;
  height: 80vh;
}
.vel-btns-wrapper {
  display: flex;
  justify-content: flex-end;
}
.close {
  background: transparent;
  border: none;
  font-size: 32px;
  color: #fff;
}
</style>
