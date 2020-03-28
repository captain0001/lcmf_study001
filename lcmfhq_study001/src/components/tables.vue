<template>
  <div class="tables">
    {{ a }}
  </div>
</template>
<script>
import a from '../../public/master/member.js'
export default {
  name: 'tables',
  props: {
    a
  },
  watch: {
    a(){
      console.log('aa')
      console.log(a)
    }
  }
}
</script>