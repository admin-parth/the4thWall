<template>
  <section id="design-process" class="service-section service-2">
    <!-- <div class="container">
      <div class="row design-process-row">
        <div class="col">
          <div class="title-2 mb-4 title-flex">
             <img src="/image/logo/plain-logo.png" alt="The 4th wall. " height="30" />
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
    </div> -->

    <main class="container">
      <div class="title-2 mb-4 title-flex">
             <img src="/image/logo/plain-logo.png" alt="The 4th wall. " height="30" />
            <h2>{{ $t("ourDesignProcess.titleAboutUs") }}</h2>
          </div>
        <section class="process-flow">
            <article class="step-card" 
              v-for="(step, index) in Services_data"
              :key="index"
              >
                <div class="step-badge">{{ step.id }}</div>
                <div class="step-divider"></div>
                <div class="step-description">
                    {{ step.details }}
                </div>
            </article>

            <!-- <article class="step-card">
                <div class="step-badge">02</div>
                <h2 class="step-heading">Design Brief</h2>
                <div class="step-divider"></div>
                <div class="step-description">
                    Completing our enrollment form to capture your preferences for creating stunning RealVision 3D designs.
                </div>
            </article>

            <article class="step-card">
                <div class="step-badge">03</div>
                <h2 class="step-heading">Project Quote</h2>
                <div class="step-divider"></div>
                <div class="step-description">
                    Receiving a detailed estimate tailored to your specific requirements and budget considerations.
                </div>
            </article>

            <article class="step-card">
                <div class="step-badge">04</div>
                <h2 class="step-heading">Virtual Tour</h2>
                <div class="step-divider"></div>
                <div class="step-description">
                    Experiencing your future space through immersive 3D visualization at our dedicated Experience Center.
                </div>
            </article> -->
        </section>
    </main>
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


.container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 20px;
        }

        .process-flow {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 30px;
            align-items: stretch;
        }

        .step-card {
            flex: 1;
            background: white;
            border-radius: 16px;
            padding: 35px 25px;
            text-align: left;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            position: relative;
            z-index: 2;
            display: flex;
            gap: 30px;
        }

        .step-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }

        .step-badge {
            padding: 20px;
            background: linear-gradient(135deg, #ED2026 0%, #f87171 100%);
            color: white;
            font-size: 1.4rem;
            font-weight: 700;
            border-radius: 16px;
            max-height: 70px;
            box-shadow: 0 4px 14px rgba(237, 32, 38, 0.25);
        }

        .step-heading {
            font-size: 1.3rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 16px;
            letter-spacing: -0.01em;
        }

        .step-description {
            color: #000000;
            font-size: 0.95rem;
            line-height: 1.6;
            font-weight: 400;
            max-width: 85%;
        }

        .step-divider {
            width: 3px !important;
            height: 100;
            background: #ED2026;
            border-radius: 2px;
            opacity: 1;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
            .container {
                padding: 50px 15px;
            }
            
            .process-flow {
                flex-direction: column;
                gap: 25px;
            }
            
            .process-flow::before {
                display: none;
            }
            
            .header h1 {
                font-size: 2rem;
            }
            
            .step-card {
                padding: 30px 20px;
                flex-direction: column;
            }

            .step-divider {
              display: none;
            }
            .step-description {
              max-width: 100%;
            }

            .step-badge {
              max-width: 70px;
            }
        }

        @media (max-width: 480px) {
            .header h1 {
                font-size: 1.8rem;
            }
            
            .header p {
                font-size: 1.1rem;
            }
            
            .step-card {
                padding: 25px 15px;
            }
        }
</style>
