import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
// 选项的写法
export const useStore = defineStore('main', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount(_s) {
      return _s.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
// 定义一个状态 其中counter属于状态的标识名称，全局唯一
export const useCounterStore = defineStore('counter', () => {
  // 要管理的状态
  const count = ref(0);
  const operateCount = ref(0);
  // 获取状态值
  const doubleCount = computed(() => count.value * 2);
  // 普通动作 - 方法
  function increment() {
    count.value++;
    operateCount.value++;
  }

  return { count, operateCount, doubleCount, increment };
});
