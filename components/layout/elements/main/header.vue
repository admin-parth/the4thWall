<template>
  <header class="header-3 fixed-header" :class="fixed ? 'fixed' : ''">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="header-layout-3">
            <nav>
              <div class="main-navbar">
                <div id="mainnav">
                    <LayoutElementsMainHamburgerMenu color="#ED1F26" />
                </div>
              </div>
            </nav>
            <RouterLink to="/" class="nav-link menu-title py-2">
                <img src="/image/logo/logo.svg" alt="The 4th wall. " height="40" />
            </RouterLink>
            <div class="webinfo-details">
              <RouterLink
                class="signup btn btn-gradient color-4 p-2"
                to="/main/signup"
              >
                <i class="fas fa-user-alt p-0" style="margin-right: 10px"></i>
                <span class="font-roboto">Book Your Session</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
let fixed = ref(false);
onMounted(() => {
  window.addEventListener("scroll", function headfix() {
    if (window.scrollY > 600) {
      fixed.value = true;
    } else {
      fixed.value = false;
    }
  });
});
</script>

<style lang="scss" scoped></style>