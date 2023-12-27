<template>
  <footer class="footer-dark">
    <div class="footer footer-custom-col">
      <div class="container">
        <div class="row">
          <div class="col-xl col-md order-xl">
            <div class="footer-links footer-details">
              <!-- <h5 class="footer-title d-md-none active" @click="toggle = !toggle">{{ 'Contact us' }} <span
                                    class="according-menu"><i
                                        :class="toggle ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i></span></h5> -->
              <div
                class="footer-content row"
                :class="toggle ? 'd-block' : 'd-none d-md-block'"
              >
                <div class="col-sm-12 col-md-4">
                  <img src="/image/logo/temp-logo.png" alt="" class="logo" />
                </div>
                <div class="col-sm-12 col-md-12">
                  <p>
                    {{
                      "This home provides entertaining spaces with a kitchen opening..."
                    }}
                  </p>
                  <LayoutElementsFooterElementFooter2Contact
                    :data="Contact_Data"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- <LayoutElementsFooterElementFooter2About :data="About_Data" />
                    <LayoutElementsFooterElementFooter2Location title="Our Location" />
                    <LayoutElementsFooterElementFooter2Tag :data="Tag_Data" /> -->
        </div>
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
  },
  {
    icon: "fas fa-phone-alt",
    title: "+91 990 900 3044/45",
  },
  {
    icon: "fas fa-envelope",
    title: "Contact@gmail.com",
  },
];
</script>

<style lang="scss" scoped>
img.logo {
  width: 150px;
}
</style>
