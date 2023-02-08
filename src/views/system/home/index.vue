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

  <div class="text-xl text-gray-500 font-bold my-4">基本信息</div>
  <div class="grid grid-cols-4 gap-4 mt-3">
    <CommonInfoCard title="钱包余额" :remain="`¥${userInfo.balance}`" icon="PayCircleFilled" icon-color="#ff9f43" @click="handleNavigate">
      <div class="text-gray-500 font-bold">
        <div>
          <a-button type="link" size="small"> > 充值中心</a-button>
        </div>
      </div>
    </CommonInfoCard>

    <CommonInfoCard title="唯一token" remain="jjjjjaaa123jkkk__123-13" icon="BarcodeOutlined" @click="copyToken">
      <div class="text-gray-500 font-bold">
        <div>
          <a-button type="link" size="small"> >点击复制</a-button>
        </div>
      </div>
    </CommonInfoCard>
  </div>

  <template v-if="goodsRemainList.length">
    <div class="text-xl text-gray-500 font-bold my-4">套餐余量</div>
    <div class="grid grid-cols-4 gap-4 mt-3">
      <GoodsTimeRemainCard
        v-for="(item, index) in goodsRemainList"
        :key="index"
        :title="item.goodsName"
        icon="InteractionFilled"
        :remain="item.duration"
        @click="() => handleBuyGoods(item)"
      >
        <div class="text-gray-500 font-bold">
          <div>
            <span>过期时间：{{ item.expiredTime }}</span> <a-button type="link" size="small"> > 续费</a-button>
          </div>
        </div>
      </GoodsTimeRemainCard>
    </div>
  </template>
  <div class="grid grid-cols-3 gap-4 mt-5">
    <HomeNotice title="公告" :noticeTypeId="1" />
    <OfficialAccountCard />
    <ChangelogCard />
  </div>
</template>
<script setup>
  import { h, onMounted, ref } from 'vue';
  import HomeHeader from './home-header.vue';
  import HomeNotice from './home-notice.vue';
  import OfficialAccountCard from './components/official-account-card.vue';
  import ChangelogCard from './components/changelog-card.vue';
  import GoodsTimeRemainCard from '/@/views/system/home/components/goods-time-remain-card.vue';
  import CommonInfoCard from '/@/views/system/home/components/user-info-card.vue';
  import { message, Modal } from 'ant-design-vue';
  import { goodsApi } from '/@/api/business/goods/goods-api';
  import { loginApi } from '/@/api/system/login/login-api';
  import { useRouter } from 'vue-router';

  let goodsRemainList = ref([]);
  let userInfo = ref({});

  const router = useRouter();

  onMounted(() => {
    goodsApi.queryComboList().then((res) => {
      goodsRemainList.value = res.data;
    });

    loginApi.getLoginInfo().then((res) => {
      userInfo.value = res.data;
    });
  });

  function handleNavigate() {
    router.push('/front/recharge');
  }

  function handleBuyGoods(item) {
    Modal.confirm({
      title: '提示',
      content: h('div', {}, [h('p', `确认购买${item.goodsName}？将消费¥${item.price}`)]),
      okText: '确定',
      cancelText: '取消',
      onOk() {
        // goodsApi.buy(item.id)
        return goodsApi.buy(item.id).then(() => {
          message.success('购买成功');
        });
      },
      onCancel() {
        Modal.destroyAll();
      },
    });
  }
  function copyToken() {
    const copyToClipboard = (str) => {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(str);
      return Promise.reject('The Clipboard API is not available.');
    };
    copyToClipboard('asdjalsdj123123kjsd').then(() => {
      message.success('复制成功');
    });
  }
</script>
<style lang="less" scoped>
  @import './index.less';
</style>
