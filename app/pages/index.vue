<script setup lang="ts">
import {menuNodes} from "~/constants";
</script>

<template>
  <div class="content">
    <Search/>
    <div class="navigation">
      <ContentItem class="tw-mt-1" v-for="item in menuNodes" :node="item" :key="item.nodeId"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  .navigation {

  }
}
</style>
