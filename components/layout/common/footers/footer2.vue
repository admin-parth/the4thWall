<template>
  <footer id="contact" class="footer">
    <div class="footer footer-custom-col">
      <div class="container">
        <MainContact />
      </div>
    </div>
    <LayoutElementsFooterElementSubfooter1 classname="sub-footer-dark" />
  </footer>
</template>

<script setup lang="ts">
import { useurl } from "~/composable/apiurl";
interface Contact {
  icon: string;
  title: string;
  desc?: string;
  title2?: string;
}
interface About {
  title: string;
  children: {
    name: string;
    link: string;
  }[];
}
interface Tag {
  title: string;
  children: {
    name: string;
    link: string;
  }[];
}
interface FetchResponse {
  data: {
    value: {
      contact: Contact[];
      about: About[];
      tag: Tag[];
    };
  };
}
let { data }: FetchResponse = await useFetch(useurl + "/data/footer2.json");
const About_Data: About[] = data.value.about;
const Tag_Data: Tag[] = data.value.tag;
let toggle = ref<boolean>(true);
const Contact_Data: Contact[] = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Ahmedabad",
    desc: "location"
  },
  {
    icon: "fas fa-phone-alt",
    title: "+91 990 900 3044",
    desc: "phone",
    title2:"+91 990 900 3045"
  },
  {
    icon: "fas fa-envelope",
    title: "contact@gmail.com",
    desc: "email"
  },
];
</script>

<style lang="scss" scoped>
img.logo {
  width: 150px;
}
</style>
