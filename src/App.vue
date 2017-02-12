<template>
  <div>
    <v-header></v-header>
    <goods :seller="seller"></goods>
  </div>
</template>

<script  type="text/ecmascript-6">
  import header from 'components/header/header.vue';
  import goods from 'components/goods/goods.vue';

  const ERR_OK = 0;

  export default {
    data() {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.seller = response.data
        }
      })
    },
    components: {
      'v-header': header,
      goods
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
