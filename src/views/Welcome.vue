<script setup lang="ts">
import Welcome from '../components/Welcome/Base.vue'
import { FirstCard, SecondCard, ThirdCard, FourthCard } from '../components/Welcome/Card/Index'
import { ref } from 'vue'

type ArrType = {
  component: any;
  mainBtnText: string;
  isBtnShow: boolean;
}

const mapCompArr: ArrType[] = [
  {
    component: FirstCard,
    mainBtnText: '下一页',
    isBtnShow: true
  },
  {
    component: SecondCard,
    mainBtnText: '下一页',
    isBtnShow: true
  },
  {
    component: ThirdCard,
    mainBtnText: '下一页',
    isBtnShow: true
  },
  {
    component: FourthCard,
    mainBtnText: '开始使用',
    isBtnShow: false
  }
]

const curComp = ref(0)

const handleCurComp = () => {
  curComp.value++

  if (curComp.value > mapCompArr.length - 1) {
    curComp.value = 0
  }
}

</script>

<template>
  <div>
    <welcome
      @updateCurComp="handleCurComp"
      :main-btn-text="mapCompArr[curComp].mainBtnText"
      :is-btn-show="mapCompArr[curComp].isBtnShow"
    >
      <transition name="slide-fade">
        <component :is="mapCompArr[curComp].component" />
      </transition> 
    </welcome>
  </div>
</template>


<style lang="scss">
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease-out;
}

.slide-fade-enter-from {
  transform: translateX(100vw);
}

.slide-fade-leave-to {
  transform: translateX(-100vw);
}
</style>
