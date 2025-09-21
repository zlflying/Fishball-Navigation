<script setup lang="ts">
import type {MenuNode} from "~/constants/menuNodes";

const props = defineProps({
  node: {
    type: Object as PropType<MenuNode>,
    required: true
  },
})
</script>

<template>
  <div>
    <div class="title tw-mb-2 tw-text-base tw-font-medium">{{ props.node.displayName }}</div>
    <div class="tw-flex tw-gap-4 tw-flex-wrap">
      <div
          class="item tw-cursor-pointer tw-transition-all
          tw-bg-white dark:tw-bg-gray-500 dark:hover:tw-bg-gray-700
          tw-w-80 tw-pl-3 tw-pr-3 tw-pt-5 tw-pb-5 tw-rounded-xl
          hover:tw-translate-y-[-5px] hover:tw-ease hover:tw-duration-500 hover:tw-shadow-2xl
          "
          v-for="item in props.node.items">
        <div class="tw-flex tw-items-center tw-gap-2 tw-h-full">
          <img src="/img/logo.svg" alt="" class="tw-rounded-full tw-w-12 tw-h-12">
          <div class="tw-flex tw-flex-col tw-gap-2 tw-w-[calc(100%-48px-0.5rem)]">
            <div class="tw-font-sans tw-text-sm">{{ item.displayName }}</div>
            <div class="tw-text-xs tw-text-slate-400 tw-truncate">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>