<template>
	<div class="main-container">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
useHead({
  link: [
    { rel: 'canonical', href: `https://the4thWall.in${route.path}` },
  ] 
})
</script>
<style scoped>
.main-container {
	overflow: hidden;
}
</style>
