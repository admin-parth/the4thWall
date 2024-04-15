<template>
  <section id="design-process" class="service-section service-2">
    <div class="container">
      <div class="row design-process-row">
        <div class="col">
          <div class="title-2 mb-4 title-flex">
             <img src="/image/logo/plain-logo.png" alt="The 4th wall. " height="50" />
            <h2>{{ $t("ourDesignProcess.titleAboutUs") }}</h2>
          </div>
          <div class="row inner-row">
            <div class="data-align"
              v-for="(step, index) in Services_data"
              :key="index"
              :class="{ 'order-tracking': true, completed: true }"
            >
              <div
                class="is-complete"
                :class="{ last: index === Services_data.length - 1 }"
              >
                <p v-html="step.id"></p>
              </div>
              <p v-html="step.details"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const Services_data = [
  {
    id: "01",
    svg: "/svg/icons.svg#home-heart",
    svg1: "/svg/icons.svg#line-straight",
    title: "Get your vision",
    details: t("ourDesignProcess.para1"),
  },
  {
    id: "02",
    svg: "/svg/icons.svg#customer-service",
    svg1: "/svg/icons.svg#line-straight",
    title: "Design your idea",
    details: t("ourDesignProcess.para2"),
  },
  {
    id: "03",
    svg: "/svg/icons.svg#key",
    svg1: "/svg/icons.svg#line-straight",
    title: "Worry-free installation",
    details: t("ourDesignProcess.para3"),
  },
  {
    id: "04",
    svg: "/svg/icons.svg#shield",
    svg1: "/svg/icons.svg#line-straight",
    title: "Review process",
    details: t("ourDesignProcess.para4"),
  },
];
</script>
<style scoped>
.inner-row {
  display: flex;
  justify-content: center;
}
@media screen and (min-width: 550px) {
  .order-tracking {
    width: 20%;
  }
}
.pt45 {
  padding-top: 45px;
}
.order-tracking {
  text-align: center;
  /* width: 20%; */
  position: relative;
  display: block;
}
.order-tracking .is-complete {
  display: block;
  position: relative;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: 0.5px solid #afafaf;
  margin: auto;
  transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear;
  z-index: 2;
}
.order-tracking .is-complete p {
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
.order-tracking > p {
  color: #a4a4a4;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 0;
  line-height: 20px;
}
.order-tracking.completed p {
  color: #000;
}
.is-complete::before {
  content: "";
  display: block;
  height: 2px;
  width: 325%;
  border: 2px solid;
  top: 19px;
  position: absolute;
  left: 40px;
  z-index: 0;
}
.is-complete.last::before {
  width: 300%;
}
.is-complete::after {
  content: "";
  display: block;
  height: 2px;
  width: 300%;
  border: 2px solid;
  top: 19px;
  position: absolute;
  left: -115px;
  z-index: 0;
}
.is-complete > p {
  background: var(--theme-gradient5);
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 510px) {
  .order-tracking {
    display: flex;
  }
  .inner-row {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .inner-row div {
    margin-bottom: 50px;
  }
  .is-complete::before {
    content: "";
    border: 2px solid;
    position: absolute;
    height: 300%;
    width: auto;
    top: 40px;
    left: 49%;
    display: block;
  }
  .is-complete::after {
    content: "";
    border: 2px solid;
    position: absolute;
    height: 300%;
    width: auto;
    top: -116px;
    left: 49%;
    display: block;
  }
  .is-complete.last::before {
    width: auto;
  }
  .order-tracking p {
    text-align: center;
  }
  .title-flex{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
}
.title-flex{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.data-align{
  text-align: justify;
}
</style>
