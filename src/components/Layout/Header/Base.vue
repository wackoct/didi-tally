<script setup lang="ts">
</script>

<template>
  <div>
    <div>
      <span>
        <svg class="iconpark-icon"><use :href="`#${props.iconName}`"></use></svg>
      </span>
      <span>
        <slot></slot>
      </span>
    </div>
  </div>
</template>
