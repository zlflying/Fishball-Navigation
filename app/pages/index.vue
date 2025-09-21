<script setup lang="ts">
import {menuNodes} from "~/constants";
</script>

<template>
  <div class="content">
    <Search/>
    <div class="navigation">
      <ContentItem v-for="item in menuNodes" :node="item"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  .navigation {

  }
}
</style>
