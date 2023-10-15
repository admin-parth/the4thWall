<template>
  <section class="home-section layout-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-8 col-md-11">
          <div class="home-main">
            <div class="home-content">
              <div>
                  <img src="/image/signature/2.png" alt="">
                  <h6>{{ title }}</h6>
                  <h1 class="p-0 mx-0 mt-0">{{ 'How '}}  <span class="w-0">{{ typeValue  }}</span></h1>
                  <div class="row">
                    <div class="col-xl-8">
                      <p>{{ details }}</p>
                    </div>
                  </div>
                  <nuxt-link to="/agent/submit-property" type="button" class="btn btn-lg btn-gradient btn-pill color-2">{{'submit property'}}</nuxt-link>
                  <div class="looking-icons" v-for="(item,index) in cate" :key="index">
                    <ul>
                      <li v-for="(icon,index) in item.icons" :key="index"> 
                        <nuxt-link :to="icon.path" class="looking-icon">
                          <svg class="property-svg">
                              <use :xlink:href="icon.icon"></use>
                          </svg>
                          <h6>{{ icon.name }}</h6>
                      </nuxt-link>
                      </li> 
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="decor-image">
      <img src="/image/shape.png" alt="" class="img-fluid">
  </div>
  </section>
</template>

<script lang="ts" setup>
import {useurl} from '~/composable/apiurl'
let title:string = 'Want to buy or rent Home ?'
let details:string = 'Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening Elegant retreat in a quiet Coral Gables setting.'
interface Icon{
  heading:string;
  type:string;
  icons:{
    path:string;
  name:string;
  icon:string
  }[]
}
interface FetchResponse{
  data:{
    value:{
      data:Icon[]
    }
  }
}
 let {data}:FetchResponse = await useFetch(useurl+'/data/looking-icon.json')
 let cate = data.value.data
 const typeValue = ref<string>("")
const typeStatus = ref<boolean>(false)
const displayTextArray = ref<string[]>(["Much Is My House Worth ?"])
const typingSpeed = 100
const erasingSpeed = 100
const newTextDelay = 3000
const displayTextArrayIndex = ref<number>(0)
const charIndex = ref<number>(0)
function typeText() {
 if (charIndex.value < displayTextArray.value[displayTextArrayIndex.value].length) {
 if (!typeStatus.value) typeStatus.value = true;
 typeValue.value += displayTextArray.value[displayTextArrayIndex.value].charAt(
 charIndex.value
 );
 charIndex.value += 1;
 setTimeout(typeText, typingSpeed);
 } else {
 typeStatus.value = false;
 setTimeout(eraseText, newTextDelay);
 }
}
function eraseText() {
 if (charIndex.value > 0) {
 if (!typeStatus.value) typeStatus.value = true;
 typeValue.value = displayTextArray.value[displayTextArrayIndex.value].substring(
 0,
 charIndex.value - 1
 );
 charIndex.value -= 1;
 setTimeout(eraseText, erasingSpeed);
 } else {
 typeStatus.value = false;
 displayTextArrayIndex.value += 1;
 if (displayTextArrayIndex.value >= displayTextArray.value.length)
 displayTextArrayIndex.value = 0;
 setTimeout(typeText, typingSpeed + 1000);
 }
}
onMounted(() => {
 setTimeout(typeText, newTextDelay + 200);
})
</script>
