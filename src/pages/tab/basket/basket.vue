<template>
  <z-paging ref="pagingRef" v-model="dataList" @query="queryList">
    <view v-for="(item, index) in dataList" :key="index">
      <u-cell :title="`列表长度-${index + 1}`">
        <template #icon>
          <u-avatar shape="square" size="35" :src="item" custom-style="margin: -3px 5px -3px 0" />
        </template>
      </u-cell>
    </view>
  </z-paging>

  <view class="basket-bottom">
    <view class="flex-3 pl-30rpx">
      <up-radio-group v-model="radiovalue1" placement="column" @change="groupChange">
        <up-radio
          v-for="(item, index) in radiolist1" :key="index" label-color="#999999"
          :custom-style="{ marginBottom: '8px' }" :label="item.name" :name="item.name" @change="radioChange"
        />
      </up-radio-group>
    </view>
    <view class="flex-1">
      1
    </view>
    <view class="right-wrap flex-10">
      <view class="price">
        合计: <text class="text-lg text-red-500">
          ￥{{ totalPrice }}
        </text>
      </view>
      <up-button style="color:#333" class="settle-accounts" color="#d5d5d5" shape="circle" text="去结算" />
    </view>
  </view>
</template>

<script setup lang="js">
import {
  reactive,
  ref,
} from 'vue';

const pagingRef = ref(null);
const dataList = ref([]);

const urls = [
  'https://picsum.photos/100/100?random=1',
  'https://picsum.photos/100/100?random=2',
  'https://picsum.photos/100/100?random=3',
  'https://picsum.photos/100/100?random=4',
  'https://picsum.photos/100/100?random=5',
  'https://picsum.photos/100/100?random=6',
  'https://picsum.photos/100/100?random=7',
  'https://picsum.photos/100/100?random=8',
  'https://picsum.photos/100/100?random=9',
  'https://picsum.photos/100/100?random=10',
];

function queryList(pageNo, pageSize) {
  console.log('[ pageNo ] >', pageNo);
  console.log('[ pageSize ] >', pageSize);
  // // 这里的pageNo和pageSize会自动计算好，直接传给服务器即可
  // // 这里的请求只是演示，请替换成自己的项目的网络请求，并在网络请求回调中通过pagingRef.value.complete(请求回来的数组)将请求结果传给z-paging
  setTimeout(() => {
    // 1秒之后停止刷新动画
    const list = [];
    for (let i = 0; i < 30; i++)
      list.push(urls[uni.$u.random(0, urls.length - 1)]);

    pagingRef.value?.complete(list);
  }, 1000);
  // this.$request
  //   .queryList({ pageNo, pageSize })
  //   .then(res => {
  //     // 请勿在网络请求回调中给dataList赋值！！只需要调用complete就可以了
  //     pagingRef.value.complete(res.data.list);
  //   })
  //   .catch(res => {
  //     // 如果请求失败写pagingRef.value.complete(false)，会自动展示错误页面
  //     // 注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
  //     // 在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
  //     pagingRef.value.complete(false);
  //   });
}

// 基本案列数据
const radiolist1 = reactive([{
  name: '全选',
  disabled: false,
}]);

// up-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
const radiovalue1 = ref('');

const groupChange = (n) => {
  console.log('groupChange', n);
};

const radioChange = (n) => {
  console.log('radioChange', n);
};

const totalPrice = ref(600);
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
  page {
    background-color: #efeff4;
  }

  .basket-bottom {
    position: fixed;
    bottom: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 102rpx;
    padding-right: 20px;
    white-space: nowrap;
    background: #FFF;
    border-radius: 12rpx 12rpx 0rpx 0rpx;

    .right-wrap {
      display: flex;
      align-content: center;
      align-items: center;
      width: 60%;
      padding-right: 10px;
      line-height: 102rpx;

      .price {
        padding-right: 20px;
      }

    }
  }
</style>
