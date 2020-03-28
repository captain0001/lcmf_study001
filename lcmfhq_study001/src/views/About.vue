<template>
  <div class="about">
    <h1>This is an about page</h1>

    <!-- koudai -->
    <MyTable :dataset="dataset"/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import MyTable from '@/components/MyTable.vue'

  export default {
    name: 'About',
    data() {
      return {
        dataset: {
          "headers": ["No.", "名前", "ジャンル", "楽器"],
          "data": [
            ["1", "yasuhiro", "all", "guitar"],
            ["2", "ob_yuu", "electoro", "piano"],
            ["3", "gorio", "orchestra", "-"],
            ["4", "kuarisu", "electro", "-"],
            ["5", "koudai", "rock", "piano"]
          ]
        }
      };
    },
    components: {
      MyTable
    }
  }
</script>
