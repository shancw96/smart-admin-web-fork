<template>
  <a-badge-ribbon :text="status.text" :color="status.color">
    <div class="flex flex-col bg-white rounded p-4">
      <div class="flex flex-row">
        <div class="mr-5 flex items-center">
          <component :is="$antIcons[props.icon]" v-if="props.icon" :style="{ fontSize: '45px', color: iconColor }" />
        </div>
        <div class="flex flex-col">
          <span class="text-gray-500 font-bold">{{ title }}</span>
          <span class="text-2xl font-bold">剩余：{{ remain }}天</span>
        </div>
      </div>
      <div class="bg-gray-100 p-2 mt-4" @click="handleClick">
        <slot></slot>
      </div>
    </div>
  </a-badge-ribbon>
</template>

<script setup>
  import { computed } from 'vue';

  let props = defineProps({
    icon: String,
    iconColor: {
      default: '#1890ff',
      type: String,
    },
    title: String,
    remain: String,
  });
  let emits = defineEmits(['click']);

  const status = computed(() => {
    if (props.remain <= 0) {
      return {
        color: 'red',
        text: '已过期',
      };
    } else if (props.remain <= 7) {
      return {
        color: 'orange',
        text: '即将过期',
      };
    } else {
      return {
        color: 'green',
        text: '正常',
      };
    }
  });

  function handleClick() {
    emits('click');
  }
</script>
