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
  <div class="grid grid-cols-4 gap-8 p-5">
    <RotateCardContainer v-for="item in goodsList" :key="item.id">
      <GoodsListCard :data="item" :loading="buyingFlag" @click="onBuy" />
    </RotateCardContainer>
  </div>
</template>
<script setup>
  import GoodsListCard from '/@/views/business/front/goods/components/goods-list-card.vue';
  import RotateCardContainer from '/@/views/business/front/goods/components/rotate-card-container.vue';
  import { goodsApi } from '/@/api/business/goods/goods-api';
  import { onBeforeMount, ref } from 'vue';
  import { message } from 'ant-design-vue';

  const goodsList = ref([]);
  const buyingFlag = ref(false);
  onBeforeMount(() => {
    Promise.all([
      goodsApi.queryGoodsList({
        searchWord: '',
        pageSize: 20,
        pageNum: 1,
      }),
      goodsApi.queryComboList(),
    ]).then((resList) => {
      const [goodsRes, comboRes] = resList;
      const comboList = (comboRes.data ?? []).reduce((acc, cur) => {
        cur.isValid && acc.add(cur.goodsId);
        return acc;
      }, new Set());
      goodsList.value = goodsRes.data.list
        .reduce((acc, cur) => {
          if (cur.shelvesFlag) {
            cur.isCombo = comboList.has(cur.goodsId);
            acc.push(cur);
          }
          return acc;
        }, [])
        .sort((a, b) => {
          if (a.isCombo && !b.isCombo) return -1;
          if (!a.isCombo && b.isCombo) return 1;
          return 0;
        });
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
