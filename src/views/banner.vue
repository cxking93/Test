<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img" />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import ban1 from "../assets/images/f1.jpg";
import ban2 from "../assets/images/f2.jpg";
import ban3 from "../assets/images/f3.jpg";
export default {
  name: "HomeSwiper",
  data: function() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 5100,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        speed: 800
      },
      swiperList: [
        {
          id: "0001",
          imgUrl: ban1
        },
        {
          id: "0002",
          imgUrl: ban2
        },
        {
          id: "0003",
          imgUrl: ban3
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
  height: 0;
  padding-bottom: 552px;
  text-align: center;
  .swiper-img {
    width: 80%;
  }
}
</style>
