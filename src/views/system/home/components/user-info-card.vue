<template>
  <div class="flex flex-col bg-white rounded p-4 justify-between">
    <div class="flex flex-row">
      <div class="mr-5 flex items-center">
        <component :is="$antIcons[props.icon]" v-if="props.icon" :style="{ fontSize: '45px', color: iconColor }" />
      </div>
      <div class="flex flex-col">
        <span class="text-gray-500 font-bold">{{ title }}</span>
        <span class="text-2xl font-bold">{{ remain }}</span>
      </div>
    </div>
    <div class="bg-gray-100 p-2 mt-4" @click="handleClick">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
  let props = defineProps({
    icon: String,
    iconColor: {
      default: '#1890ff',
      type: String,
    },
    title: String,
    remain: String,
  });
  let emit = defineEmits(['click']);

  function handleClick() {
    emit('click');
  }
</script>
