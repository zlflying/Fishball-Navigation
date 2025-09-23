<script setup lang="ts">
import type {MenuItem, MenuNode} from "~/constants/menuNodes";
import {getSafeId} from "~/utils";

const props = defineProps({
  node: {
    type: Object as PropType<MenuNode>,
    required: true
  },
});

const menuEventBus = useEventBus<string>('menuSelectItem');

menuEventBus.on((nodeId: string) => {
  if (props.node.children && props.node.children.length > 0) {
    if (props.node.children.find(node => node.nodeId === nodeId)) {
      childrenSelected.value = nodeId;
    }
  }
})

/** 子节点选中项 */
const childrenSelected = ref<string>(props.node.children[0]?.nodeId as string);

/** 内容条目 */
const items = computed(() => {
  // 存在子节点
  if (props.node.children && props.node.children.length > 0 && childrenSelected.value) {
    return props.node.children.find(node => node.nodeId === childrenSelected.value)?.items;
  }
  // 不存在子节点
  return props.node.items;
});

/** 点击条目  */
function handleItemClick(item: MenuItem) {
  if (item.websiteUrl && item.websiteUrl === '') {
    ElMessage.warning('暂无数据');
  }
  window.open(item.websiteUrl, '_blank');
}
</script>

<template>
  <div class="content-item">
    <div class="title tw-mb-2 tw-text-base tw-font-medium tw-flex tw-items-center tw-gap-1"
         :id="`item-${getSafeId(props.node.nodeId)}`">
      <NuxtIcon :name="props.node.iconPath as string"/>
      {{ props.node.displayName }}
    </div>
    <div class="custom-children tw-mb-2 tw-select-none" v-if="props.node.children && props.node.children.length > 0">
      <el-segmented v-model="childrenSelected" :options="props.node.children"
                    :props="{label: 'displayName', value: 'nodeId'}">
        <template #default="scope">
          <div class="tw-flex tw-items-center tw-gap-1">
            <div :id="`item-${getSafeId(props.node.nodeId)}`">{{ scope.item.displayName }}</div>
          </div>
        </template>
      </el-segmented>
    </div>
    <div class="tw-flex tw-gap-4 tw-flex-wrap" v-auto-animate>
      <div
          class="item tw-cursor-pointer tw-transition-all
          tw-bg-white dark:tw-bg-gray-500 dark:hover:tw-bg-gray-700
          tw-w-[344px] tw-pl-3 tw-pr-3 tw-pt-5 tw-pb-5 tw-rounded-xl
          hover:tw-translate-y-[-5px] hover:tw-ease hover:tw-duration-500 hover:tw-shadow-2xl
          "
          v-for="item in items" :key="item.itemId" @click="handleItemClick(item)">
        <div class="tw-flex tw-items-center tw-gap-2 tw-h-full">
          <img :src="item.logoPath" alt="" class="tw-rounded-full tw-border-[1px] tw-w-12 tw-h-12">
          <div class="tw-flex tw-flex-col tw-gap-2 tw-w-[calc(100%-48px-0.5rem)]">
            <div class="tw-font-sans tw-text-sm">{{ item.displayName }}</div>
            <div class="tw-text-xs tw-text-slate-400 tw-truncate" :title="item.description">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-item {

  .custom-children {
    --el-border-radius-base: 8px;

    :deep(.el-segmented) {
      --el-segmented-padding: 5px;
      min-height: 38px;

      .el-segmented__item {
        font-size: 14px;
        font-weight: 500;
        border-radius: 12px;
      }

      .el-segmented__item-selected {
        border-radius: 12px;
      }

    }

  }
}
</style>