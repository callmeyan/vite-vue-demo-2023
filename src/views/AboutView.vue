<script setup lang="ts">
import { ref } from 'vue';
import BasicTable from './../components/BasicTable.vue';
import { useCounterStore } from './../store/counter';
const counter = useCounterStore(),
  keyIndex = ref(3);

// 数据列表
const dataList = ref([
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]);
// 列
const cols = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
function addRow() {
  dataList.value.push({
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    key: String(keyIndex.value++),
  });
}
const xxx = ref();
function setFirstTableTitle() {
  xxx.value.setTitle(new Date().toString());
}
</script>

<template>
  <div class="about">
    <div>
      <h1>This is an about page</h1>
      <h1>
        {{ counter.count }} <button @click="counter.increment">count ++</button>
        <button @click="addRow">add</button>
        <button @click="setFirstTableTitle">setFirstTableTitle</button>
      </h1>
      <BasicTable ref="xxx" :dataList="dataList" :cols="cols" />
      <BasicTable :dataList="dataList" :cols="cols" />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
