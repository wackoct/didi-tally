import { defineStore } from 'pinia'

export const useStore = defineStore('main' ,{
  state: () => {
    return {
      isFirst: false 
    }
  },
  actions: {
    setIsFirst() {
      this.isFirst = !this.isFirst
    }
  }
})
