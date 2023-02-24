<template>
  <div class="basic-table">
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
</script>

<style>
.basic-table {
}
table {
  width: 100%;
}
table,
td {
  border: solid 1px #000;
}
</style>
