<template>
  <div class="footer-contact">
    <ul>
      <li v-for="(item, index) in props.data" :key="index">
        <i :class="item.icon" class="icon"
          ><div class="title">{{ item.title }}</div></i
        >
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
