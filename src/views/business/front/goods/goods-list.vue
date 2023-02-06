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
  <div class="grid grid-cols-3 gap-12">
    <GoodsListCard v-for="item in goodsList" :key="item.id" :data="item" :loading="buyingFlag" @click="onBuy" />
  </div>
</template>
<script setup>
  import GoodsListCard from '/@/views/business/front/goods/components/goods-list-card.vue';
  import { goodsApi } from '/@/api/business/goods/goods-api';
  import { onBeforeMount, ref } from 'vue';
  import { message } from 'ant-design-vue';

  const goodsList = ref([]);
  const buyingFlag = ref(false);
  onBeforeMount(() => {
    goodsApi
      .queryGoodsList({
        searchWord: '',
        pageSize: 20,
        pageNum: 1,
      })
      .then((res) => {
        goodsList.value = res.data.list.filter((item) => item.shelvesFlag);
      });
  });

  const onBuy = (goods) => {
    buyingFlag.value = true;
    goodsApi
      .buy(goods.goodsId)
      .then((res) => {
        message.success('购买成功!');
      })
      .finally(() => {
        buyingFlag.value = false;
      });
  };
</script>
