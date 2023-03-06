<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { provide } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
const route = useRoute();
</script>

<template>
  <div id="app">
    <the-header></the-header>
    <router-view :key="route.fullPath"></router-view>
    <the-footer></the-footer>
  </div>
</template>
