<script setup lang="ts">
const props = defineProps<{
  iconName: string;
}>()
</script>


<template>
  <div class="label-wrapper">
    <div class="label-icon">
      <svg class="iconpark-icon"><use :href="`#${props.iconName}`"></use></svg>
    </div>
    <div>
    </div>
  </div>
</template>


<style lang="scss">
.label-wrapper {
  .label-icon {
    width: 100px;
    height: 100px;
    margin-right: 8px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
