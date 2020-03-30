<template>
  <div class="tables">
    {{ a }}
  </div>
</template>
<script>
import accounts from '../../public/master/account'
export default {
  name: 'tables',
  data: {
    accounts
  },
  watch: {
    getAccount(){
      console.log('getAccount()')
      console.log(this.accounts)
    }
  }
}
</script>