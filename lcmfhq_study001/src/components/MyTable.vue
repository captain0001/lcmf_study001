<template>
  <div class="hello">
    <table class="table bg-white">
      <thead class="thead-dark">
      <tr>
        <th v-for="x of dataset.headers" :key="x">{{ x }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="xs of dataset.data" :key="xs">
        <td v-for="x of xs" :key="x">{{ x }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'MyTable',
    data() {
      return {};
    },
    props: {
      dataset: Object
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
