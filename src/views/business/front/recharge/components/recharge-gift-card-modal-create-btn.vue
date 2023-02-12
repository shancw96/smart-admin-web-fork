<template>
  <a-button type="primary" @click="() => toggleModal(true)" :loading="isFetching">生成礼品卡</a-button>
  <a-modal v-model:visible="visible" title="提示" @ok="handleOk">
    <p>请输入礼品卡 金额</p>

    <a-input placeholder="请输入" v-model:value="key"/>
    <template #footer>
      <a-button key="back" @click="() => toggleModal(false)">取消</a-button>
      <a-button key="submit" type="primary" :loading="isFetching" @click="handleOk">提交</a-button>
    </template>
  </a-modal>
</template>
<script setup>
import {ref} from 'vue';
import {message} from 'ant-design-vue';
import {rechargeApi} from '/@/api/business/recharge/recharge-api';
import zhuoda from '/@/assets/images/1024lab/zhuoda-wechat.jpg';

const visible = ref(false);

const isFetching = ref(false);

const key = ref('');
const toggleModal = (flag) => {
  visible.value = !!flag;
};
const handleOk = (e) => {
  // 使用正则表达式 过滤非法字符，防止sql注入
  const output = validateToken(key.value);
  if (output) {
    message.error(output);
    return;
  }

  isFetching.value = true;
  rechargeApi
      .generateGiftCard(key.value)
      .then((res) => {
        message.success('使用成功');
        visible.value = false;
      })
      .finally(() => {
        isFetching.value = false;
      });

  function validateToken(string) {
    if (!string.length) return '请输出礼品卡';
    const reg = /select|update|delete|exec|count|'|"|=|;|>|<|%/i;
    if (reg.test(key.value)) return '监测到SQL注入，再次尝试后账号将被锁定';
  }
};
</script>

<style scoped lang="less">
.app-qr {
  > img {
    width: 100%;
    max-width: 120px;
    height: 100%;
    max-height: 120px;
  }
}
</style>
