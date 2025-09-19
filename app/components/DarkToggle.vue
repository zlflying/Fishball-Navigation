<script setup lang="ts">
const colorMode = useColorMode();

/** 切换主题 */
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

</script>

<template>
  <div>
    <ClientOnly>
      <NuxtIcon v-if="colorMode.value == 'light'" name="line-md:moon-alt-to-sunny-outline-loop-transition"
                class="tw-text-primary tw-text-2xl"
                @click="toggleTheme"/>
      <NuxtIcon v-if="colorMode.value == 'dark'" name="line-md:moon-alt-loop"
                class="tw-text-primary tw-text-2xl" @click="toggleTheme"/>
    </ClientOnly>
  </div>
</template>
<style lang="scss" scoped>
.icon-light {
  color: var(--el-color-primary);
}

.icon-dark {
  color: var(--el-color-primary);
}
</style>
