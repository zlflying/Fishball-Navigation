<script setup lang="ts">
import {getSafeId} from "~/utils";
import {getDefaultMenuType, getMenuNodesByType, type MenuNode} from "~/constants/menuNodes";

const menuEventBus = useEventBus<string>('menuSelectItem');

const menuSwitchEventBus = useEventBus<string>('menuSwitch');

/** 菜单激活事件 */
const onMenuClick = (key: string, keyPath: string[]) => {
  document.getElementById(`item-${getSafeId(keyPath[0] as string)}`)?.scrollIntoView({
    behavior: "smooth",
  });
  if (keyPath.length > 1) {
    menuEventBus.emit(keyPath[keyPath.length - 1]);
  }
}

/** 菜单 */
const menuNodes = ref<MenuNode[]>(getDefaultMenuType().menu);

menuSwitchEventBus.on((menuType: string) => {
  menuNodes.value = getMenuNodesByType(menuType);
});

</script>

<template>
  <div class="main-menu tw-select-none">
    <el-menu @select="onMenuClick">
      <template v-for="menuNode in menuNodes" :key="menuNode.nodeId">
        <el-sub-menu :index="menuNode.nodeId" v-if="menuNode.children && menuNode.children.length > 0">
          <template #title>
            <NuxtIcon :name="menuNode.iconPath as string" class="tw-text-lg tw-mr-1.5"/>
            <span>{{ menuNode.displayName }}</span>
          </template>
          <el-menu-item v-for="menu in menuNode.children" :key="menu.nodeId" :index="menu.nodeId">
            <template #title>
              <span>{{ menu.displayName }}</span>
            </template>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="menuNode.nodeId">
          <template #title>
            <NuxtIcon :name="menuNode.iconPath as string" class="tw-text-lg tw-mr-1.5"/>
            <span>{{ menuNode.displayName }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.main-menu {
  :deep(.el-menu) {
    border-right: none;
    font-weight: 500;

    .el-menu-item {
      &.is-active {
        background: var(--el-color-primary) !important;
        backdrop-filter: blur(5px);
        color: white;
      }
    }
  }
}
</style>