<template>
  <view>
    <img :src="props.image" :alt="name">
    <h2>{{ props.name }}</h2>
    <p>规格: {{ props.specs }}</p>
    <p>价格: ¥{{ props.price }}</p>
    <p @click="handleLangChange">
      销量: {{ props.salesVolume }}
    </p>
  </view>
</template>

<script setup lang="ts">
const props = defineProps({
  // 图片路径
  image: {
    type: String,
    required: true, // 必填项
    default: '', // 默认值（如果适用）
  },
  // 商品名称
  name: {
    type: String,
    required: true,
    default: '',
  },
  // 规格描述
  specs: {
    type: String,
    required: false, // 非必填项
    default: '无规格信息',
  },
  // 价格
  price: {
    type: [Number, String], // 可以是数字或者字符串
    required: true,
    default: 0,
  },
  // 销量
  salesVolume: {
    type: [Number, String],
    required: false,
    default: 0,
  },
});
const emit = defineEmits(['change']);

function handleLangChange() {
  emit('change', 1);
}
</script>

<style lang="scss" scoped></style>
