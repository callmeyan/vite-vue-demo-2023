<template>
  <div class="basic-table">
    <h1>{{ title }}</h1>
    <table>
      <thead>
        <tr>
          <th v-for="c in cols" :key="c.key">{{ c.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in dataList" :key="row.key">
          <td v-for="c in cols" :key="c.key">{{ row[c.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// js的使用
// defineProps({
//   dataList: Array,
//   cols: {
//     type: Array,
//     required: true,
//   },
// });
// ts限制类型
type ColType = {
  title: string;
  key: string;
};
type BasicTableProps = {
  dataList: any[];
  cols: ColType[];
};
const p = defineProps<BasicTableProps>();
console.log(p.cols); // 获取属性值

const title = ref('');
function setTitle(str: string) {
  title.value = str;
}
defineExpose({ setTitle });
</script>

<style>
.basic-table {
}
.basic-table h1 {
  background: #f00;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
table {
  width: 100%;
}
table,
td {
  border: solid 1px #000;
}
</style>
