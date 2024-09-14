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
                  class="feature-content video-details text-start p-0 vertical-search mt-0 width-350"
                >
                  <span class="label-cross">{{ "New !" }}</span>
                  <div class="left-sidebar">
                    <!-- <nuxt-link to="/">
                      <h2>{{ heading }}</h2>
                    </nuxt-link> -->
                    <div class="row mb-2 text-center">
                      <div class="col-12">
                        <img src="/image/logo/temp-logo.png" alt="The 4th wall. " height="50" />
                      </div>
                      <div class="col">
                        <p class="mb-0 ">Inspiring Interiors, Unveiling Possibilities</p>
                      </div>
                    </div>
                    <div class="row gx-2 justify-content-center">
                      <!-- <form> -->
                        <div class="form-group">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <div class="input-group-text height-38">
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
                              <div class="input-group-text height-38">
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
                              <div class="input-group-text height-38">
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
                              <div class="input-group-text height-38">
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
                              <div class="input-group-text height-38">
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
                        <button
                          class="btn btn-gradient color-4 col-8 mt-3"
                          id="create-account"
                          @click.prevent="createAccount"
                        >
                        <i class="fas fa-user-alt p-0" style="margin-right: 10px"></i>Book your session
                        </button>
                        <div v-if="error" class="alert alert-danger">
                          {{ error }}
                        </div>
                        <!-- <span class="d-block mt-3 font-rubik"
                          >{{ "Already have an acoount ?"
                          }}<nuxt-link
                            to="/page/otherpages/login"
                            class="float-end text-color-4"
                            >{{ " Login here" }}</nuxt-link
                          ></span
                        > -->
                      <!-- </form> -->
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
const error = ref("");
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
const validateEmail = (email: string) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: any) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
};

const createAccount = () => {
  if (!user.name || !user.email || !user.password) {
    error.value = "Please fill in all required fields.";
  } else if (user.name.length < 2) {
    error.value = "Name should be more then 1 character";
  } else if (!validateEmail(user.email)) {
    error.value = "Please enter a valid email address.";
  } else if (!validatePhone(user.phone)) {
    error.value = "Please enter a valid 10 digit number";
  } else if (user.password.length < 8) {
    error.value = "Password length should be 8 or more than that";
  } else {
    user.setBuildingDetails(true);
    navigateTo("/main/signup");
  }
  setTimeout(() => {
    error.value = "";
  }, 3000);
};
</script>
<style scoped>
.height-38 {
  height: 38px;
}
.width-350 {
  width: 350px;
}
#create-account {
  padding: 7px 15px 8px;
}
</style>