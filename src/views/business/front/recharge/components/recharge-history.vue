<template>
  <div>
    <a-table :columns="columns" :data-source="data" :pagination="false" @change="onRequest" bordered>
      <template #title>充值记录</template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'kind'">{{ dict[record.kind] ?? '未知' }}</template>
      </template>
    </a-table>
    <a-pagination size="small" :total="pageTotal" v-model:page-size="pageSize" v-model:current="pageCurrent" @change="onRequest" />
  </div>
</template>
<script setup>
  import { onMounted, reactive, ref } from 'vue';
  import { rechargeApi } from '/@/api/business/recharge/recharge-api';
  const dict = {
    GIFT_CARD: '礼品卡',
  };
  let columns = [
    {
      title: '金额',
      className: 'column-money',
      dataIndex: 'amount',
    },
    {
      title: '充值方式',
      dataIndex: 'kind',
    },
    {
      title: '充值时间',
      dataIndex: 'createTime',
    },
  ];
  const data = ref([]);

  let pageTotal = ref(0);
  let pageSize = ref(10);
  let pageCurrent = ref(1);

  const onRequest = () => {
    rechargeApi
      .queryRechargeHistory({
        pageNum: pageCurrent.value,
        pageSize: pageSize.value,
      })
      .then((res) => {
        data.value = res.data.list;
        pageTotal.value = res.data.total;
      });
  };

  onMounted(() => {
    onRequest();
  });
</script>
