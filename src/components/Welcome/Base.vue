<script setup lang="ts">
import { defineEmits } from 'vue'

const props = defineProps<{
  mainBtnText: string;
  isBtnShow: boolean;
}>()

const emit = defineEmits(['updateCurComp'])

</script>

<template>
  <div class="welcome-container">
    <header class="welcome-header">
      <svg>
        <use xlink:href="#logo"></use>
      </svg>
      <p>山竹记账</p>
    </header>
    <main class="welcome-wrapper">
      <slot></slot>
    </main>
    <footer class="welcome-footer">
      <button :style="{ visibility: 'hidden' }" disabled>占位</button>
      <button @click="emit('updateCurComp')">
        {{ props.mainBtnText }}
      </button>
      <button :style="{ visibility: isBtnShow ? undefined : 'hidden' }">跳过</button>
    </footer>
  </div>
</template>


<style lang="scss">
.welcome-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  height: 100vh;
  font-size: 16px;
  color: #fff;
  background: linear-gradient(180deg, #5C33BE 0%, #8F4CD7 100%);

  .welcome-header {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;

    svg {
      width: 60px;
      height: 60px;
    }

    p {
      margin-top: 0.5rem;
      font-size: 22px;
      font-weight: 500;
    }
  }

  .welcome-wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    position: relative;

    svg {
      width: 32%;
      height: auto;
      margin: 0 auto;
      margin-bottom: 1rem;
    }

    p {
      font-size: 22px;
      line-height: 1.4;
      font-weight: 500;
    }
  }

  .welcome-footer {
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      font-size: 20px;
      color: #fff;
      background: none;

      a {
        color: #fff;
      }
    }
  }
}


.slide-fade-enter-active,
.slide-fade-leave-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-out;
}

.slide-fade-enter-from {
  transform: translateX(100vw);
}

.slide-fade-leave-to {
  transform: translateX(-100vw);
}
</style>
