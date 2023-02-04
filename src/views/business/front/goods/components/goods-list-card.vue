<template>
  <div class="pricing pricing-highlight">
    <div class="pricing-title">ID01-V3-Standard</div>
    <div class="pricing-padding">
      <div class="pricing-price">
        <div>¥17.90</div>
        <div>套餐时长: 30 天 VIP3</div>
      </div>
      <div class="pricing-details">
        <div class="pricing-item" v-for="index in 3" :key="index">
          <div class="pricing-item-icon"><i class="fas fa-gas-pump"></i></div>
          <div class="pricing-item-label">一次性 125GB 流量(1倍率)</div>
        </div>
      </div>
    </div>
    <div class="pricing-cta">
      <a> 续费 <i class="fas fa-plus"></i> </a>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .pricing {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
    background-color: #fff;
    border-radius: 3px;
    border: none;
    position: relative;
    margin-bottom: 30px;
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
</style>
