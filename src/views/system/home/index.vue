<!--
  * 首页
  *
  * @Author:    1024创新实验室-主任：卓大
  * @Date:      2022-09-12 22:34:00
  * @Wechat:    zhuda1024
  * @Email:     lab1024@163.com
  * @Copyright  1024创新实验室 （ https://1024lab.net ），Since 2012
  *
-->
<template>
  <!--  顶部用户信息-->
  <a-row>
    <HomeHeader />
  </a-row>

  <div class="grid grid-cols-4 gap-4 mt-3">
    <div class="h-40 bg-amber-200" v-for="index in 8" :key="index">钱包余额</div>
  </div>
  <div class="grid grid-cols-3 gap-4 mt-5">
    <HomeNotice title="公告" :noticeTypeId="1" />
    <OfficialAccountCard />
    <ChangelogCard />
  </div>
</template>
<script setup>
  import { computed } from 'vue';
  import HomeHeader from './home-header.vue';
  import HomeNotice from './home-notice.vue';
  import HomeQuickEntry from './components/quick-entry/home-quick-entry.vue';
  import OfficialAccountCard from './components/official-account-card.vue';
  import ToBeDoneCard from './components/to-be-done-card.vue';
  import ChangelogCard from './components/changelog-card.vue';
  import Gauge from './components/echarts/gauge.vue';
  import Category from './components/echarts/category.vue';
  import Pie from './components/echarts/pie.vue';
  import Gradient from './components/echarts/gradient.vue';
  import { Modal } from 'ant-design-vue';

  // 业绩完成百分比
  const saleTargetPercent = computed(() => {
    return 75;
  });
</script>
<style lang="less" scoped>
  @import './index.less';
</style>
