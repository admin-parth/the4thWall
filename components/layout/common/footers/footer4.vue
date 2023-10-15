<template>
    <footer class="footer-light">
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-md-6">
                        <div class="footer-links footer-details">
                            <h5 class="footer-title d-md-none" @click="toggle = !toggle">
                                {{ title }}
                                <span class="according-menu">
                                    <i :class="toggle ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
                                </span>
                            </h5>
                            <div class="footer-content" :class="toggle ? 'd-block' : 'd-none d-md-block'">
                                <nuxt-link to="/">
                                    <img src="/image/logo/4.png" class="for-light" alt="">
                                    <img src="/image/logo/9.png" class="for-dark" alt="">
                                </nuxt-link>
                                <p class="mt-2">{{ content }}</p>
                                <div class="footer-contact">
                                    <ul>
                                        <li>
                                            <i class="fas fa-map-marker-alt"></i> {{ address }}
                                        </li>
                                        <li>
                                            <i class="fas fa-phone-alt"></i> {{ number }}
                                        </li>
                                        <li>
                                            <i class="fas fa-envelope"></i> {{ email }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <LayoutElementsFooterElementFooter4 />
                </div>
            </div>
        </div>
        <LayoutElementsFooterElementSubfooter1 classname="sub-footer-dark" />
    </footer>
</template>

<script lang="ts" setup>
let title: string = 'Contact us'
let content: string = 'This home provides entertaining spaces with a kitchen opening...'
let address: string = 'A-32, Albany, Newyork.'
let number: string = '(+066) 518 - 457 - 5181'
let email: string = 'Contact@gmail.com'
let toggle = ref<boolean>(false)
</script>

<style lang="scss" scoped></style>