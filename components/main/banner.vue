<template>
  <section id="home" class="layout-home2 banner-section p-0">
    <div class="container-fluid p-0">
      <div class="row m-0">
        <div class="col-lg-12 p-0">
          <div
            class="video-bg position-relative h-auto"
            id="block"
            style="width: 100%"
          >
            <div class="video-size">
              <video width="100%" height="564px" loop muted autoplay>
                <source src="/video/video2.mp4" type="video/mp4" />
                <source src="/video/video2.mp4" type="video/mp4" />
                <source src="/video/video2.mp4" type="video/mp4" />
              </video>
            </div>
            <div class="home-main feature-section new-property video-bg">
              <div class="container">
                <div
                  class="feature-content video-details text-start p-0 vertical-search mt-0"
                >
                  <span class="label-cross">{{ "New !" }}</span>
                  <div class="left-sidebar">
                    <nuxt-link to="/">
                      <h2>{{ heading }}</h2>
                    </nuxt-link>
                    <div class="row gx-2">
                      <form>
                        <div class="form-group">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <div class="input-group-text">
                                <Icon name="material-symbols:person" />
                              </div>
                            </div>
                            <input
                              type="text"
                              class="form-control"
                              v-model="user.name"
                              placeholder="Enter your name"
                              required
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <div class="input-group-text">
                                <Icon
                                  name="material-symbols:mail-outline-rounded"
                                />
                              </div>
                            </div>
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Enter email address"
                              v-model="user.email"
                              required
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <div class="input-group-text">
                                <Icon name="ic:outline-lock" />
                              </div>
                            </div>
                            <input
                              :type="type"
                              id="pwd-input1"
                              class="form-control"
                              placeholder="Password"
                              v-model="user.password"
                              required
                            />
                            <div class="input-group-apend">
                              <div class="input-group-text">
                                <Icon
                                  :name="
                                    showpassword
                                      ? 'ic:outline-remove-red-eye'
                                      : 'ph:eye-slash'
                                  "
                                  @click="show()"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <div class="input-group-text">
                                <Icon
                                  name="material-symbols:call-outline-rounded"
                                />
                              </div>
                            </div>
                            <input
                              type="tel"
                              class="form-control"
                              v-model="user.phone"
                              placeholder="eg.1234567890"
                              maxlength="10"
                              pattern="[0-9]{10}"
                              required
                            />
                          </div>
                        </div>
                        <button class="btn btn-gradient color-4" @click.prevent="createAccount">
                          {{ "Create account" }}
                        </button>
                        <!-- <span class="d-block mt-3 font-rubik"
                          >{{ "Already have an acoount ?"
                          }}<nuxt-link
                            to="/page/otherpages/login"
                            class="float-end text-color-4"
                            >{{ " Login here" }}</nuxt-link
                          ></span
                        > -->
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useUserStore } from "~/store/user";
let user = useUserStore();

const heading = "The 4th Wall";
const data = ref([]);
let showpassword = ref<boolean>(false);
let type = ref<string>("password");
function show() {
  showpassword.value = !showpassword.value;
  if (showpassword.value == true) {
    type.value = "text";
  } else {
    type.value = "password";
  }
}

const createAccount = () => {
  console.log("Create account")
  user.setBuildingDetails(true);
  navigateTo('/main/signup')
}
</script>
