<template>
  <div class="pricing pricing-highlight shadow-xl">
    <div class="pricing-title">{{ data.goodsName }}</div>
    <div class="pricing-padding">
      <div class="pricing-price">
        <div>¥{{ data.price }}</div>
        <div>套餐时长: {{ data.duration }} 天</div>
      </div>
      <div class="pricing-details">
        <div class="pricing-item-icon"><i class="fas fa-gas-pump"></i></div>
        <div class="pricing-item-label">{{ data.remark }}</div>
      </div>
    </div>
    <div class="py-3 transition-all" @click="handleClick" :class="[loading ? 'disabled' : 'active']">
      <span>{{ data.isCombo ? '续费' : '新购' }}</span>
    </div>
  </div>
</template>
<script setup>
  import { toRef } from 'vue';
  import { debounce } from 'lodash';
  import { Modal } from 'ant-design-vue';

  const props = defineProps(['data', 'loading']);
  const emit = defineEmits(['click']);

  const data = toRef(props, 'data');

  const handleClick = () => {
    if (props.loading) return;
    Modal.confirm({
      title: '确认购买',
      content: `确认购买套餐【${data.value.goodsName}】吗？`,
      onOk: debounce(() => {
        emit('click', data.value);
      }, 500),
    });
  };
</script>

<style lang="css" scoped>
  .pricing {
    background-color: #fff;
    border-radius: 3px;
    border: none;
    position: relative;
    text-align: center;
  }
  .pricing.pricing-highlight .pricing-title {
    background-color: #6777ef;
    color: #fff;
  }
  .pricing.pricing-highlight .pricing-cta a {
    background-color: #6777ef;
    color: #fff;
  }
  .pricing.pricing-highlight .pricing-cta a:hover {
    background-color: #394eea !important;
  }
  .pricing .pricing-padding {
    padding: 40px;
  }
  .pricing .pricing-title {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    background-color: #f3f6f8;
    color: #6777ef;
    border-radius: 0 0 3px 3px;
    display: inline-block;
    padding: 5px 15px;
  }
  .pricing .pricing-price {
    margin-bottom: 45px;
  }
  .pricing .pricing-price div:first-child {
    font-weight: 600;
    font-size: 50px;
  }
  .pricing .pricing-details {
    text-align: left;
    display: inline-block;
  }
  .pricing .pricing-details .pricing-item {
    display: flex;
    margin-bottom: 15px;
  }
  .pricing .pricing-details .pricing-item .pricing-item-icon {
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 50%;
    text-align: center;
    background-color: #63ed7a;
    color: #fff;
    margin-right: 10px;
  }
  .pricing .pricing-details .pricing-item .pricing-item-icon i {
    font-size: 11px;
  }
  .pricing .pricing-cta {
    margin-top: 20px;
  }
  .pricing .pricing-cta a {
    display: block;
    padding: 20px 40px;
    background-color: #f3f6f8;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    border-radius: 0 0 3px 3px;
  }
  .pricing .pricing-cta a .fas,
  .pricing .pricing-cta a .far,
  .pricing .pricing-cta a .fab,
  .pricing .pricing-cta a .fal,
  .pricing .pricing-cta a .ion {
    margin-left: 5px;
  }
  .pricing .pricing-cta a:hover {
    background-color: #e3eaef;
  }

  .active {
    background-color: #6777ef !important;
    color: #fff !important;
    cursor: pointer;
  }
  .disabled {
    background-color: #949393 !important;
    color: #fff !important;
    cursor: not-allowed;
  }
</style>
