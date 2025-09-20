<script setup lang="ts">
import {menuNodes} from "~/constants";


</script>

<template>
  <el-menu
      default-active="2"
  >
    <el-sub-menu v-for="menuNode in menuNodes" :key="menuNode.nodeId" :index="menuNode.nodeId">
      <template #title>
        <span>{{menuNode.displayName}}</span>
      </template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped lang="scss">

</style>