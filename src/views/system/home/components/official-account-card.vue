<!--
  * 官方 二维码
  *
  * @Author:    1024创新实验室-主任：卓大
  * @Date:      2022-09-12 22:34:00
  * @Wechat:    zhuda1024
  * @Email:     lab1024@163.com
  * @Copyright  1024创新实验室 （ https://1024lab.net ），Since 2012
  *
-->
<template>
  <default-home-card icon="SmileTwoTone" title="添加微信/QQ，获取礼品卡！">
    <div class="app-qr-box">
      <div class="app-qr">
        <img :src="zhuoda" />
        <span class="qr-desc strong"> xxx的微信号！ </span>
        <span class="qr-desc"> :) </span>
      </div>
    </div>
  </default-home-card>
</template>
<script setup>
  import DefaultHomeCard from '/@/views/system/home/components/default-home-card.vue';
  import zhuoda from '/@/assets/images/1024lab/zhuoda-wechat.jpg';
</script>
<style lang="less" scoped>
  .app-qr-box {
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: space-around;
    .app-qr {
      display: flex;
      align-items: center;
      width: 33%;
      justify-content: center;
      flex-direction: column;
      > img {
        width: 100%;
        max-width: 120px;
        height: 100%;
        max-height: 120px;
      }
      .strong {
        font-weight: 600;
      }
      .qr-desc {
        display: flex;
        align-items: center;
        font-size: 12px;
        text-align: center;
        overflow-x: hidden;
        > img {
          width: 15px;
          height: 18px;
          margin-right: 9px;
        }
      }
    }
  }

  .ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 120px;
    line-height: 120px;
    width: 120px;
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel :deep(.slick-slide h3) {
    color: #fff;
  }
</style>
