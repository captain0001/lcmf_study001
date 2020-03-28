<template>
  <div class="about">
    <h1>メンバー</h1>
    <mytables/>
  </div>
</template>

<script>
import mytables from '@/components/tables.vue'
export default {
  components: {
    mytables
  },
  computed: {
    test(){
      console.log('aa')
    }
  }
}
</script>