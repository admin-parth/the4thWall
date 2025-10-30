<template>
  <div class="title-3 text-start">
    <h2>Get started</h2>
  </div>
  <form
    class="row needs-validation"
    :class="classes"
    id="needs-validation"
    novalidate
  >
    <div class="form-group col-md-12">
      <div class="input-group">
        <div class="input-group-text">
          <Icon name="material-symbols:person-2-outline" />
        </div>
        <input
          type="text"
          class="form-control"
          v-model="store.name"
          name="firstname"
          placeholder="Enter your Name"
          minlength="2"
          required
        />
      </div>
    </div>
    <div class="form-group col-md-6">
      <div class="input-group">
        <div class="input-group-text">
          <Icon name="ph:phone" />
        </div>
        <input
          class="form-control"
          v-model="store.phone"
          name="mobnumber"
          type="tel"
          maxlength="10"
          pattern="[0-9]{10}"
          placeholder="Enter your phone number"
          required
        />
      </div>
    </div>
    <div class="form-group col-md-6">
      <div class="input-group">
        <div class="input-group-text">
          <Icon name="material-symbols:mail-outline" />
        </div>
        <input
          type="email"
          v-model="store.email"
          class="form-control"
          placeholder="e.g,demo@gmail.com"
          required
        />
      </div>
    </div>
      <!-- <div class="text-end">
        <p>
          Alerady have an account ?
          <nuxt-link
            to="/page/otherpages/login"
            class="btn btn-dashed btn-pill color-2"
            >Log in</nuxt-link
          >
        </p>
      </div> -->
  </form>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user";
defineProps({
  classes: String,
});
let store = useUserStore();
</script>

<style scoped></style>
