<template>
   <section class="ratio_40 breadcrumb-section p-0 single-property-images">
      <swiper navigation :modules="setting" :loop="true" class="main-property-slider arrow-image">
         <swiper-slide v-for="(item, index) in All_Data" :key="index">
            <div class="bg-size background" :style="'background-image:url(' + item.src + ')'">
               <img :src="item.src" class="bg-img d-none" alt="">
            </div>
         </swiper-slide>
      </swiper>
      <div class="single-property-section">
         <div class="container">
            <div class="single-title">
               <div class="left-single">
                  <div class="d-flex">
                     <h2 class="mb-0">Orchard House </h2>
                     <span><span class="label label-shadow ms-2">For Sale</span></span>
                  </div>
                  <p class="mt-2">Mina Road, Bur Dubai, Dubai, United Arab Emirates</p>
                  <ul>
                     <li v-for="(item, index) in Options" :key="index">
                        <div>
                           <img :src="item.src" class="img-fluid ruler-tool" alt="">
                           <span>{{ item.name }}</span>
                        </div>
                     </li>
                  </ul>
                  <div class="share-buttons">
                     <div class="d-inline-block">
                        <nuxt-link to="javascript:void(0)" class="btn btn-gradient btn-pill color-2"><i
                              class="far fa-share-square"></i>
                           share
                        </nuxt-link>
                        <div class="share-hover social-icons">
                           <ul>
                              <li>
                                 <a href="https://www.facebook.com/" class="icon-facebook">
                                    <Icon name="icon-park:facebook" />
                                 </a>
                              </li>
                              <li>
                                 <a href="https://twitter.com/" class="icon-twitter">
                                    <Icon name="icon-park:twitter" />
                                 </a>
                              </li>
                              <li>
                                 <a href="https://www.instagram.com/" class="icon-instagram">
                                    <Icon name="skill-icons:instagram" />
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <a href="javascript:void(0)" class="btn btn-dashed btn-pill color-2 ms-md-2 ms-1 save-btn"><i
                           class="far fa-heart"></i>
                        Save</a>
                     <a href="javascript:void(0)" class="btn btn-dashed btn-pill color-2 ms-md-2 ms-1" @click="getprint()">
                        <Icon name="mdi:printer" />
                        Print
                     </a>
                  </div>
               </div>
               <div class="right-single">
                  <div class="rating">
                     <i class="fas fa-star"></i>
                     <i class="fas fa-star"></i>
                     <i class="fas fa-star"></i>
                     <i class="fas fa-star"></i>
                     <i class="far fa-star"></i>
                  </div>
                  <h2 class="price">$20,45,472 <span>/ start From</span></h2>
                  <div class="feature-label">
                     <span class="btn btn-dashed color-2 btn-pill">Wi-fi</span>
                     <span class="btn btn-dashed color-2 ms-1 btn-pill">Swimming Pool</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <PropertySingle1SingleProperty />
</template>

<script lang="ts" setup>
import { useurl } from '~/composable/apiurl'
import { Navigation } from 'swiper';
import "swiper/css/navigation"
interface Data {
   src: string;
}
interface Options {
   src: string;
   name: string;
}
interface FetchResponse {
   data: {
      value: {
         data: Data[],
         options: Options[]
      }
   }
}
let { data: single }: FetchResponse = await useFetch(useurl + '/data/propertysingleiamge.json')
const All_Data: Data[] = single.value.data
const Options: Options[] = single.value.options
let setting = [Navigation];
function getprint() {
   window.print();
}
</script>