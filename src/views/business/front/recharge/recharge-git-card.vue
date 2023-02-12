<template>
  <div>

    <a-table :columns="columns" :data-source="data" :pagination="false" @change="onRequest" bordered>
      <template #title>
        <div class="flex flex-row justify-between">
          <div>礼品卡列表</div>
          <div>
            <a-button shape="circle" type="text" @click="() => onRequest('onRefresh')">
              <template #icon><redo-outlined /></template>
            </a-button>
            <RechargeGiftCardModalCreateBtn />
          </div>

        </div>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'validFlag'">{{ record.validFlag ? '是' : '否' }}</template>
      </template>
    </a-table>
    <a-pagination size="small" :total="pageTotal" v-model:page-size="pageSize" v-model:current="pageCurrent" @change="onRequest" />
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { rechargeApi } from '/@/api/business/recharge/recharge-api';
import RechargeGiftCardModalCreateBtn from "/@/views/business/front/recharge/components/recharge-gift-card-modal-create-btn.vue";
import {message} from "ant-design-vue";
const dict = {
  GIFT_CARD: '礼品卡',
};
let columns = [
  {
    title: "卡号",
    dataIndex: "cardNo"
  },
  {
    title: "是否有效",
    dataIndex: "validFlag"
  },
  {
    title: '金额',
    className: 'column-money',
    dataIndex: 'amount',
  },
  {
    title: '生成时间',
    dataIndex: 'createTime',
  },
];
const data = ref([]);

let pageTotal = ref(0);
let pageSize = ref(10);
let pageCurrent = ref(1);

const onRequest = (type) => {
  rechargeApi
      .queryGiftCard({
        pageNum: pageCurrent.value,
        pageSize: pageSize.value,
        sort: 'desc'
      })
      .then((res) => {
        data.value = res.data.list;
        pageTotal.value = res.data.total;

        type==='onRefresh' && message.info("已刷新")
      });
};

onMounted(() => {
  onRequest();
});
</script>
