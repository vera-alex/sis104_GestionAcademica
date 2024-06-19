<script setup lang="ts">
import { RouterView } from 'vue-router'
import '@/assets/js/jquery-1.11.0.min.js'
import '@/assets/js/plugins.js'
import '@/assets/js/script.js'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>
<template>
  <main>
    <MainHeader />
    <RouterView />
  </main>
  <MainFooter />
</template>

<style>
@import '@/assets/icomoon/icomoon.css';
@import '@/assets/css/vendor.css';
@import '@/assets/css/style.css';
</style>
