<script setup lang="ts">
import {getDefaultMenuType, getMenuNodesByType, type MenuNode} from "~/constants/menuNodes";

const menuSwitchEventBus = useEventBus<string>('menuSwitch');

/** 菜单 */
const menuNodes = ref<MenuNode[]>(getDefaultMenuType().menu);

menuSwitchEventBus.on((menuType: string) => {
  menuNodes.value = getMenuNodesByType(menuType);
});
</script>

<template>
  <div class="content">
    <Search/>
    <div class="navigation">
      <ContentItem class="tw-mt-8" v-for="item in menuNodes" :node="item" :key="item.nodeId"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  .navigation {

  }
}
</style>
