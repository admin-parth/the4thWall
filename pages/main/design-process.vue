<template>
  <Head>
    <Title>Our Design Process | The 4th Wall</Title>
  </Head>
  <LayoutLayoutsLayout2>
    <MainBannerBreadcrumb
      title="Our Design Process"
      first="Home"
      current="Our Design Process"
    />

    <section class="property-wizard">
      <div class="container">
        <div class="row wizard-box">
          <div class="col-md-10 offset-md-1">
            <form-wizard>
              <div class="wizard-form-details">
                <tab-content title="Get your vision">
                  <h2 class="mb-3">Get your vision</h2>
                  <p>{{ $t("ourDesignProcess.para1") }}</p>
                </tab-content>
                <tab-content title="Design your idea">
                  <h2 class="mb-3">Design your idea</h2>
                  <p>{{ $t("ourDesignProcess.para2") }}</p>
                </tab-content>
                <tab-content title="Worry-free installiation">
                  <h2 class="mb-3">Worry-free installiation</h2>
                  <p>{{ $t("ourDesignProcess.para3") }}</p>
                </tab-content>
                <tab-content title="Review process">
                  <h2 class="mb-3">Review process</h2>
                  <p>{{ $t("ourDesignProcess.para4") }}</p>
                </tab-content>
              </div>
            </form-wizard>
          </div>
        </div>
      </div>
    </section>
    <ElementTaptopTapTop3 />
  </LayoutLayoutsLayout2>
</template>

<script setup>
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
</script>

<style lang="scss" scoped></style>
