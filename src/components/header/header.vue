<template>
  <div>
      <div class="header">
        <div class="headerWrap">
          <swiper :options="swiperOption" class="swiper-position">
            <swiper-slide><img class="recommand-swiper-img" src="./01.jpg"></swiper-slide>
            <swiper-slide><img class="recommand-swiper-img" src="./02.jpg"></swiper-slide>
            <swiper-slide><img class="recommand-swiper-img" src="./03.jpg"></swiper-slide>
            <div class="swiper-pagination-white swiper-pagination-position" slot="pagination"></div>
          </swiper>
        </div>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
import {swiper, swiperSlide} from 'vue-awesome-swiper';

export default {
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination-white',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";

  .header
    position: relative
    overflow: hidden
    color: #fff
    .headerWrap
        position: relative
        cursor: pointer
        height: 174px
        .swiper-position
            position: relative
            cursor: pointer;
            .recommand-swiper-img
                width: 100%
                display: block
        .swiper-pagination-position
            position: absolute
            z-index: 1
            display: flex
            flex-direction: row
            justify-content: center

</style>
