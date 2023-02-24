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

<script setup></script>

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
