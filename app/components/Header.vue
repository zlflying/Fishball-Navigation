<script setup lang="ts">
const {menuVisible} = defineProps({
  menuVisible: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="header tw-h-full tw-w-full tw-flex tw-flex-row tw-items-center">
    <Logo class="tw-w-[180px] tw-overflow-hidden"/>
    <!--  menu  -->
    <HeaderMenu v-if="menuVisible"/>
    <div class="tool tw-flex tw-flex-1 tw-justify-end tw-items-center tw-h-16">
      <!--  dark toggle  -->
      <DarkToggle class="tw-justify-end"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>