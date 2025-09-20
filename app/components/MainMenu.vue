<script setup lang="ts">
import {menuNodes} from "~/constants";

</script>

<template>
  <el-menu
      default-active="2"
  >
    <template v-for="menuNode in menuNodes" :key="menuNode.nodeId">
      <el-sub-menu :index="menuNode.nodeId" v-if="menuNode.children && menuNode.children.length > 0">
        <template #title>
          <NuxtIcon name="line-md:menu" />
          <span>{{ menuNode.displayName }}</span>
        </template>
        <el-menu-item v-for="menu in menuNode.children" :key="menu.nodeId" :index="menu.nodeId">
          <template #title>
            <NuxtIcon name="line-md:menu" />
            <span>{{ menu.displayName }}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="menuNode.nodeId">
        <template #title>
          <NuxtIcon name="line-md:menu" />
          <span>{{ menuNode.displayName }}</span>
        </template>
      </el-menu-item>
    </template>

  </el-menu>
</template>

<style scoped lang="scss">

</style>