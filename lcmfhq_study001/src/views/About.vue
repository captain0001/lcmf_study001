<template>
  <div class="about">
    <h1>This is an about page</h1>
    <MyTable />
  </div>
</template>

<script>
// @ is an alias to /src
import MyTable from '@/components/MyTable.vue'

export default {
  name: 'About',
  components: {
    MyTable
  }
}
</script>