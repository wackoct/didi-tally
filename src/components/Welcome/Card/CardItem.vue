<script setup lang="ts">
const props = defineProps<{
  iconName: string;
  title: string;
  subTitle: string;
}>()
</script>

<template>
  <div class="welcome-card">
    <svg>
      <use :xlink:href="`#${props.iconName}`"></use>
    </svg>
    <p>
      {{ props.title }}
    </p>
    <p>
      {{ props.subTitle }}
    </p>
  </div>
</template>

<style lang="scss">
.welcome-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  color: #333;
  background-color: #fff;
}
</style>
