<template>
  <div class="container">
    <div class="row">
      <div class="col-12 pt45 pb20">
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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUhV2CDxDfe-0PpGCPJjA678hwoC56alxLw&usqp=CAU",
          description: "Meet a designer",
        },
        {
          completed: true,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUhV2CDxDfe-0PpGCPJjA678hwoC56alxLw&usqp=CAU",
          description:
            "(5% payment<sup>4</sup>)Book a<br><span>renovation</span>",
        },
        {
          completed: true,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUhV2CDxDfe-0PpGCPJjA678hwoC56alxLw&usqp=CAU",
          description: "(50% payment)<br><span>Execution begins</span>",
        },
        {
          completed: true,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUhV2CDxDfe-0PpGCPJjA678hwoC56alxLw&usqp=CAU",
          description: "(100% payment) Final<br><span>installations</span>",
        },
        {
          completed: true,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUhV2CDxDfe-0PpGCPJjA678hwoC56alxLw&usqp=CAU",
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
    left: calc(10% + 40px);
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
@media screen and (max-width: 350px) {
  .order-tracking::after {
    left: calc(10% + 45px);
  }
}
.pt45 {
  padding-top: 45px;
}
.order-tracking {
  text-align: center;
  width: 20%;
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
