<script setup lang="ts">
const route = useRoute()

const name = (route.params as { id: string}).id

</script>

<template>
  <div>
    <h3>Hi, {{ name }}!</h3>


    <div>
      <NuxtLink to="/">Back</NuxtLink>
    </div>
  </div>
</template>
