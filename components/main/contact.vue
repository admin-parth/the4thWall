<template>
   <section class="py-0 get-in-touch">
    <div class="title-2 mb-4">
        <h2>Contact us</h2>
        <!-- <svg class="title-svg">
        <use xlink:href="/svg/icons.svg#title-line"></use>
        </svg> -->
    </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 contact-img">
                    <img src="/image/main/contact-image.png" class="img-fluid" alt="">
                </div>
                <div class="col-lg-6">
                    <div class="log-in">
                        <div class="mb-4 text-start">
                            <h2>Let's Get In Touch</h2>
                        </div>
                        <form class="row gx-3">
                            <div class="form-group col-md-12">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <Icon name="material-symbols:person-2-outline" />
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Enter your name" required>
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <Icon name="ph:phone" />
                                        </div>
                                    </div>
                                    <input placeholder="phone number" class="form-control" name="mobnumber" id="tbNumbers" type="tel" maxlength="10" required>
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <Icon name="material-symbols:mail-outline" />
                                        </div>
                                    </div>
                                    <input type="email" class="form-control" placeholder="email address" required>
                                </div>
                            </div>
                            <div class="form-group col-md-12">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="6">Write here something
                                </textarea>
                            </div>
                            <div class="col-md-12 submit-btn">
                                <button class="btn btn-gradient color-2 btn-pill" type="submit">Send Your Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
   </section>
   <section class="small-section contact_section pt-0 contact_bottom">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-sm-6" v-for="(item , index) in contactData" :key="index">
                <div class="contact_wrap">
                    <Icon :name="item.icon" />
                    <h4>{{ item.title }}</h4>
                    <p class="font-roboto" v-if="item.type == 'location'">
                        {{ item.add }} 
                    </p>
                    <ul v-if="item.type == 'social-media'">
                        <div class="footer-social sub-footer-link social-card">
                            <nuxt-link to="https://www.facebook.com/"><i class="fab fa-facebook-f fa-lg"></i></nuxt-link>
                            <nuxt-link to="https://www.instagram.com/"><i class="fab fa-instagram fa-lg"></i></nuxt-link>
                            <nuxt-link to="https://twitter.com/"><i class="fab fa-twitter fa-lg"></i></nuxt-link>
                            <nuxt-link to="https://accounts.google.com/"><i class="fab fa-google fa-lg"></i></nuxt-link>
                        </div>
                    </ul>
                    <ul v-if="item.type == 'contact'">
                        <li>Email: <a class="color-red" :href="`maito:${item.email}`">{{ item.email }}</a></li>
                        <li>Phone: <a class="color-red" :href="`tel:${item.phone}`">{{ item.phone }}</a> / <a class="color-red" :href="`tel:${item.phone2}`">{{ item.phone2 }}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script setup lang="ts">
import {useurl} from '~/composable/apiurl'
interface contact{
    icon:string,
    title:string,
    add?:string,
    add2?:string
    phone?:string,
    inq?:string,
    supp?:string,
    phone2?:string,
}
interface FetchResponse {
    data:{
        value: {
            address: contact[];
        };
    }
}
declare function useFetch(url: string): Promise<FetchResponse>;
let {data} = await useFetch(useurl+'/data/contact.json')
let alldata:contact[] = data.value.address

let contactData = [
    {
        icon:"octicon:location",
        title:"Where ?",
        add:"Ahmedabad, Gujarat, India",
        type: "location"

    }, {
        icon:"octicon:file-media",
        title:"Connect on social media",
        type: "social-media"
    }, {
        icon: "octicon:comment-discussion",
        title: "Online services",
        type: "contact",
        email: "contact@the4thwall.in",
        phone: "+91 99 09 003044",
        phone2: "+91 99 09 003045"
    }

]
</script>