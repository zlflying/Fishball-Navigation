<script setup lang="ts">
import logo from "~/assets/img/logo.svg";
import {getEnvConfig} from "~~/env/env";

const envConfig = getEnvConfig();
</script>

<template>
  <div class="tw-flex tw-flex-row tw-items-center tw-gap-3">
    <!--  logo  -->
    <img :src="logo" class="tw-w-10 tw-h-10 tw-rounded-full" alt="鱼丸导航logo"/>
    <!--  网站名  -->
    <h1 class="tw-text-xl tw-font-extrabold tw-tracking-widest">{{ envConfig.appName }}</h1>
  </div>
</template>

<style scoped lang="scss">

</style>