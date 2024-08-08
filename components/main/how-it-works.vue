<template>
  <div class="container">
    <div class="row">
      <div class="col-12 pt45 pb20">
        <div class="title-2 mb-4">
          <h2>How it works</h2>
          <!-- <svg class="title-svg">
            <use xlink:href="/svg/icons.svg#title-line"></use>
          </svg> -->
        </div>
        <div class="row inner-row">
          <div
            v-for="(step, index) in steps"
            :key="index"
            :class="{ 'order-tracking': true, completed: step.completed }"
          >
            <span class="is-complete">
              <img :src="step.image" alt="" />
            </span>
            <p v-html="step.description"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          completed: true,
          image:
            "/svg/1.svg",
          description: "Get your first 3Ds & quote",
        },
        {
          completed: true,
          image:
            "/svg/2.svg",
          description:
            "5% payment & book your service",
        },
        {
          completed: true,
          image:
            "/svg/3.svg",
          description: "45% payment before execeting work",
        },
        {
          completed: true,
          image:
            "/svg/4.svg",
          description: "100% payment before installion",
        },
        {
          completed: true,
          image:
            "/svg/5.svg",
          description: "Move in and enjoy!",
        },
      ],
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 510px) {
  .inner-row {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .inner-row div {
    margin-bottom: 50px;
  }
  .order-tracking::after {
    content: "";
    border: 2px dotted;
    position: absolute;
    height: 40px;
    top: -40px;
    left: 49%;
    display: block;
  }
  .order-tracking:first-child:after {
    display: none;
  }
  .order-tracking p {
    text-align: center;
  }
  .order-tracking::before {
    visibility: hidden;
  }
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
  height: 80px;
  width: 80px;
  border: 0.5px solid #afafaf;
  margin: 0 auto;
  transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear;
  z-index: 2;
}
.order-tracking .is-complete img {
  border-radius: 50%;
  height: 80px;
  width: 80px;
}
.order-tracking p {
  color: #a4a4a4;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 0;
  line-height: 20px;
}
.order-tracking.completed p {
  color: #000;
}
.order-tracking::before {
  content: "";
  display: block;
  height: 2px;
  width: calc(100% - 80px);
  border: 2px dotted gray;
  top: 38px;
  position: absolute;
  left: calc(-50% + 40px);
  z-index: 0;
}
.order-tracking:first-child:before {
  display: none;
}
</style>
