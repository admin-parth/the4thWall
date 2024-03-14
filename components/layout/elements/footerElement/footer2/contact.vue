<template>
  <div class="footer-contact">
    <ul>
      <li v-for="(item, index) in props.data" :key="index">
        <i :class="item.icon" class="icon">
          <div v-if="item.desc=='phone'">
            <a class="title" :href="'tel:'+item.title" >{{ item.title }}</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a class="title mx-0" :href="'tel:'+item.title2" >{{ item.title2 }}</a>
          </div>
          <a class="title" :href="'mailto:'+item.title" v-else-if="item.desc=='email'">{{ item.title }}</a>
          <div class="title" v-else>{{ item.title }}</div>
        </i>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
interface Contact {
  icon: string;
  title: string;
}
interface MyProps {
  data: Contact[];
}
let props = defineProps<MyProps>();
</script>

<style lang="scss" scoped>
.icon {
  display: flex;
  align-items: center;
}
.title {
  margin-left: 10px;
}
</style>
