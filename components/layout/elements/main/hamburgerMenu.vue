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
        <span>{{ "Back" }}</span>
        <Icon
          name="ic:baseline-chevron-right"
          :class="color ? color : 'text-black'"
        />
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
      @click="toogleclass(item.title)"
    >
      <a @click="jumpTo(item.path)" class="nav-link menu-title">
        {{ $t(item.title) }}
      </a>
      <LayoutElementsHeaderElementNavpagelink
        :data="item"
        :toggle="toggle"
        :accordion="accordiontoggle"
        :subtoggle="subtoogle"
      />
    </li>
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
