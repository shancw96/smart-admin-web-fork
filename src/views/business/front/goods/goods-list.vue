<!--
  * 商品列表 - 前端用户展示
  *
  * @Author:    1024创新实验室-主任：卓大
  * @Date:      2022-07-21 21:55:12
  * @Wechat:    zhuda1024
  * @Email:     lab1024@163.com
  * @Copyright  1024创新实验室 （ https://1024lab.net ），Since 2012
-->
<template>
  <h1>商品列表 - 前端用户展示</h1>
  <div class="grid grid-cols-3 gap-12">
    <GoodsListCard v-for="index in 6" :key="index" />
  </div>
</template>
<script setup>
  import GoodsListCard from '/@/views/business/front/goods/components/goods-list-card.vue';
</script>
