<template>
  <div class="toggle-nav">
    <Icon
      name="octicon:three-bars"
      :class="color ? color : 'text-black'"
      class="fs-3"
      @click="toggle = true"
    />
  </div>
  <ul class="nav-menu" :class="toggle ? 'open' : ''">
    <li class="back-btn">
      <div class="mobile-back text-end" @click="toggle = false">
        <Icon
          name="ic:baseline-chevron-left"
          :class="color ? color : 'text-black'"
        />
        <span>{{ "Back" }}</span>
      </div>
    </li>
    <li
      :class="
        item.magamenu
          ? 'mega-menu'
          : props.header
          ? item.right
            ? 'dropdown dropdown-right'
            : 'dropdown'
          : 'dropdown'
      "
      v-for="(item, index) in Nav_Data"
      :key="index"
      @click="toggle = false"
    >
      <a @click="navigate(item)" class="nav-link menu-title">
        {{ $t(item.title) }}
      </a>
      <LayoutElementsHeaderElementNavpagelink
        :data="item"
        :toggle="toggle"
        :accordion="accordiontoggle"
        :subtoggle="subtoogle"
      />
    </li>
    <div class="social-card mt-auto mb-5">
      <nuxt-link to="https://www.facebook.com/"><i class="fab fa-facebook-f fa-lg"></i></nuxt-link>
      <nuxt-link to="https://www.instagram.com/"><i class="fab fa-instagram fa-lg"></i></nuxt-link>
      <nuxt-link to="https://x.com/"><img src="/image/svg/twitter-x.svg" alt="Twitter link. " height="19"></nuxt-link>
      <nuxt-link to="https://linkedin.com/"><i class="fab fa-linkedin fa-lg"></i></nuxt-link>
    </div>
  </ul>
</template>

<script lang="ts" setup>
import Header_Type from "~/static/data/types/header";
import menulink from "~/static/data/headers/headers1/menu";
import jump from "jump.js";

let props = defineProps({
  header: String,
  color: String,
});

const Nav_Data: Header_Type[] = menulink;
let accordiontoggle = ref<boolean>(false);
let subaccordiontoggle = ref<boolean>(false);
let childaccordiontoggle = ref<boolean>(false);
let toggle = ref<boolean>(false);
let subtoogle = ref<string>("");
let subname = ref<string>("");
let childname = ref<string>("");
let route = useRoute();
let router = useRouter();

const navigate = (item: object) => {
  if(item.path == route.path) {
    if(Object.prototype.hasOwnProperty.call(item, 'section')) {
      jumpTo(item.section)
    }
  } else {
    router.push({ path: item.path})
  }
}

function jumpTo(element: string) {
  if (route.path !== "/") {
    router.push({ path: "/" });
  }
  jump(element);
}

function toogleclass(title: string) {
  subtoogle.value = title;
}
function togglesubclass(name: string) {
  subname.value = name;
}
function togglechildclass(name: string) {
  childname.value = name;
}
</script>

<style scoped></style>
