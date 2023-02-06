<template>
  <div>
    <a-table :columns="columns" :data-source="data" :pagination="false" @change="onRequest" bordered>
      <template #title>购买记录</template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'kind'">{{ dict[record.kind] ?? '未知' }}</template>
      </template>
    </a-table>
    <a-pagination size="small" :total="pageTotal" v-model:page-size="pageSize" v-model:current="pageCurrent" @change="onRequest" />
  </div>
</template>
<script setup>
  import { onMounted, reactive, ref } from 'vue';
  import { goodsApi } from '/@/api/business/goods/goods-api';
  const dict = {
    GIFT_CARD: '礼品卡',
  };
  let columns = [
    {
      title: '套餐名称',
      dataIndex: 'goodsName',
    },
    {
      title: '金额',
      dataIndex: 'cost',
    },
    {
      title: '消费时间',
      dataIndex: 'createTime',
    },
  ];
  const data = ref([]);

  let pageTotal = ref(0);
  let pageSize = ref(5);
  let pageCurrent = ref(1);

  const onRequest = (...args) => {
    goodsApi
      .history({
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
