<template>
  <div class="p-4">
    <div class="card-header rounded-md">
      <div class="text-5xl font-bold">¥{{ userStore.balance }}</div>
      <div>账号可用余额</div>
      <p class="py-4">描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息</p>
      <div class="grid grid-cols-1 gap-6 w-1/6">
        <RechargeGiftCardModalBtn />
        <a-button disabled ghost shape="round">支付宝</a-button>
        <a-button disabled ghost shape="round">微信</a-button>
      </div>
    </div>
    <div class="mt-10 grid grid-cols-2 gap-2">
      <RechargeHistory />
      <RechargeGoodsBuy />
    </div>
  </div>
</template>
<script setup>
  import RechargeHistory from '/@/views/business/front/recharge/components/recharge-history.vue';
  import RechargeGoodsBuy from '/@/views/business/front/recharge/components/recharge-goods-buy.vue';
  import RechargeGiftCardModalBtn from '/@/views/business/front/recharge/components/recharge-gift-card-modal-btn.vue';
  import { useUserStore } from '/@/store/modules/system/user';
  const userStore = useUserStore();
</script>

<style scoped>
  .card-header {
    padding: 40px;
    background-image: linear-gradient(to bottom, #fb966e, #95a0f4);
    color: #fff;
    overflow: hidden;
    height: auto;
    min-height: auto;
    display: block;
  }
</style>
