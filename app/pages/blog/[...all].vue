<script lang="ts" setup>


import {getEnvConfig} from "~~/env/env";

definePageMeta({
  layout: 'blog',
})

let content = ref('');

let url = getEnvConfig().baseUrl + 'blog/test.md';

await fetch(url).then(res => res.text()).then(text => content.value = text);


</script>

<template>
  <div>
    <MDC :value="content" tag="article"/>
  </div>
</template>
