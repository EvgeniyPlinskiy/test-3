<!-- Корневой элемент обычно используется как входная точка,layot не стал подключать глобально, из-за 2 страниц -->
<template>
  <MainLayout />
  <router-view />
  
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  components: { MainLayout },
};
</script>

<style lang="scss">
</style>
