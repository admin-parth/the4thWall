<template>
    <section class="home-section layout-1 layout-9">
        <div class="container">
            <div class="row">
                <div class="col-xxl-5 col-xl-6 col-lg-7">
                    <div class="home-main arrow-light">
                        <div class="home-content">
                            <div>
                                <img src="/image/signature/3.png" class="img-fluid" />
                                <h6>{{ 'Want to buy or rent Home ?' }}</h6>
                                <h1 class="p-0 m-0">Find Better Places to <span class="typed">{{ Type_Value }}</span></h1>
                                <nuxt-link to="/agent/submit-property" type="button"
                                    class="btn btn-gradient btn-pill color-1">{{ 'submit property' }}</nuxt-link>
                                <div class="looking-icons">
                                    <h5>{{ ALL_Icon.heading }}</h5>
                                    <ul>
                                        <li v-for="(item, index) in ALL_Icon.icons" :key="index">
                                            <nuxt-link :to="item.path" class="looking-icon">
                                                <svg class="property-svg">
                                                    <use :xlink:href="item.icon"></use>
                                                </svg>
                                                <h6>{{ item.name }}</h6>
                                            </nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="layout-right-img">
                        <img src="/image/layout-9.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="snow-effect"></div>
    </section>
</template>

<script lang="ts" setup>
import { useurl } from '~/composable/apiurl'
interface Icon {
    heading?: string;
    icons?: {
        icon?: string;
        name?: string;
        path?: string
    }[]
}
interface FetchResponse {
    data: {
        value: {
            data: Icon[]
        }
    }
}
declare function useFetch(url: string): Promise<FetchResponse>
let { data } = await useFetch(useurl + '/data/looking-icon.json')
let ALL_Icon: Icon = data.value.data[0]
const Type_Value = ref<string>("")
const typeStatus = ref<boolean>(false)
const displayTextArray = ref<string[]>(["Work.", "Wonder.", "Live."])
const typingSpeed = 100
const erasingSpeed = 100
const newTextDelay = 1000
const displayTextArrayIndex = ref<number>(0)
const charIndex = ref<number>(0)
function typeText() {
    if (charIndex.value < displayTextArray.value[displayTextArrayIndex.value].length) {
        if (!typeStatus.value) typeStatus.value = true;
        Type_Value.value += displayTextArray.value[displayTextArrayIndex.value].charAt(
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
        Type_Value.value = displayTextArray.value[displayTextArrayIndex.value].substring(
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
