<script setup lang="ts">
import {getEnvConfig} from "~~/env/env";

const envConfig = getEnvConfig();

useSeoMeta({
  ogTitle: envConfig.appName,
  ogImage: '/img/logo.svg',
  twitterTitle: envConfig.appName,
  twitterDescription: envConfig.appDesc,
  twitterImage: '/img/logo.svg',
  twitterCard: 'summary_large_image',
})

defineOgImageComponent('NuxtSeo', {
  title: `${envConfig.appName} 👋`,
  description: envConfig.appDesc,
  theme: '#ff0000',
  colorMode: 'dark',
})

</script>
<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<style lang="scss">
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
