<template>
  <section class="layout-home2 banner-section p-0">
    <div class="container-fluid p-0">
      <div class="row m-0">
        <div class="col-lg-12 p-0">
          <div
            class="video-bg position-relative h-auto"
            id="block"
            style="width: 100%"
          >
            <div class="video-size">
              <video width="100%" height="100%" loop muted autoplay>
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
                              type="email"
                              class="form-control"
                              placeholder="Enter Phone Number"
                              required
                            />
                          </div>
                        </div>
                        <button type="submit" class="btn btn-gradient color-4">
                          {{ "Create account" }}
                        </button>
                        <span class="d-block mt-3 font-rubik"
                          >{{ "Already have an acoount ?"
                          }}<nuxt-link
                            to="/page/otherpages/login"
                            class="float-end text-color-4"
                            >{{ " Login here" }}</nuxt-link
                          ></span
                        >
                      </form>
                      <div class="col-md-6">
                        <!-- <ElementFilteroptionStatus label="Property Status" :data="data" /> -->
                      </div>
                      <div class="col-md-6">
                        <!-- <ElementFilteroptionType label="Property-Type" :data="data" /> -->
                      </div>
                      <!-- <ElementFilteroptionRooms label="Max Rooms" :data="data" /> -->

                      <!-- <ElementFilteroptionBed label="Bed" :data="data" /> -->

                      <!-- <ElementFilteroptionBath label="Bath" :data="data" /> -->

                      <div class="col-md-6">
                        <!-- <ElementFilteroptionAgencies label="Agencies" :data="data" /> -->
                      </div>
                      <div class="col-lg-12">
                        <div class="price-range">
                          <!-- <ElementFilteroptionPrice label="price" /> -->
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="price-range">
                          <!-- <ElementFilteroptionArea label="Area" /> -->
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <!-- <button
                          type="button"
                          class="btn btn-gradient color-4 mt-2"
                        >
                          Search
                        </button> -->
                      </div>
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
</script>
