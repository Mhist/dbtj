<template>
  <view class="content">
    <up-gap bg-color="transparent" height="8" />
    <up-search bgColor="#FFF" v-model="keyword" placeholder="输入要搜索的商品名称" :action-style="actionStyle" />
    <up-gap bg-color="transparent" height="15" />
    <up-swiper class="swiper-wrap" :list="list2" key-name="image" :show-title="false" :autoplay="false" circular
      @change="e => current = e.current">
      <template #indicator>
        <view class="indicator">
          <view v-for="(item, index) in list2" :key="index" class="indicator__dot"
            :class="[index === current && 'indicator__dot--active']" />
        </view>
      </template>
    </up-swiper>
    <up-gap bg-color="transparent" height="15" />
    <view class="category-wrap">
      <up-grid :border="false" @click="click">
        <up-grid-item v-for="(baseListItem, baseListIndex) in baseList" :key="baseListIndex">
          <up-icon :custom-style="{ paddingTop: `${20}rpx` }" :name="baseListItem.name" :size="48" />
          <text class="grid-text">
            {{ baseListItem.title }}
          </text>
        </up-grid-item>
      </up-grid>
    </view>

    <view class="blobk-name">
      推荐区
    </view>

    <!-- 商品区域 -->
    <up-button @click="clear">
      清空列表
    </up-button>
    <up-waterfall ref="uWaterfallRef" v-model="flowList">
      <template #left="{ leftList }">
        <view v-for="(item, index) in leftList" :key="index" class="demo-warter">
          <!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
          <up-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index" />
          <view class="demo-title">
            {{ item.title }}
          </view>
          <view class="demo-sku">
            规格：{{ item.sku }}
          </view>
          <view class="demo-price">
            ¥{{ item.price }}
          </view>
          <view class="flex content-center justify-between">
            <view class="demo-sold-quantity">
              已售卖 {{ item.soldQuantity }} 件
            </view>
            <view>
              <up-icon name="shopping-cart" color="#2583B7" size="24" class="u-close" />
            </view>
          </view>
        </view>
      </template>
      <template #right="{ rightList }">
        <view v-for="(item, index1) in rightList" :key="index1" class="demo-warter">
          <up-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index1" />
          <view class="demo-title">
            {{ item.title }}
          </view>
          <view class="demo-sku">
            规格：{{ item.sku }}
          </view>
          <view class="demo-price">
            ¥{{ item.price }}
          </view>
          <view class="flex content-center justify-between">
            <view class="demo-sold-quantity">
              已售卖 {{ item.soldQuantity }} 件
            </view>
            <view>
              <up-icon name="shopping-cart" color="#2583B7" size="24" class="u-close" />
            </view>
          </view>
        </view>
      </template>
    </up-waterfall>
    <up-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData" />
  </view>
</template>

<script setup>
  // 引入
  import {
    onReachBottom,
  } from '@dcloudio/uni-app';
  import {
    onMounted,
    reactive,
    ref,
  } from 'vue';

  // 响应式数据
  const keyword = ref('');
  const current = ref(0);
  const actionStyle = {
    width: '112rpx',
    height: ' 60rpx',
    background: ' #2583B7',
    borderRadius: '44rpx', // 圆角
    textAlign: 'center', // 文本对齐方式
    color: '#FFF',
    lineHeight: '60rpx',
  };
  // 使用 reactive 创建响应式对象数组
  const list2 = reactive([{
    image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
    title: '昨夜星辰昨夜风，画楼西畔桂堂东',
  }, {
    image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    title: '身无彩凤双飞翼，心有灵犀一点通',
  }, {
    image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
    title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',
  }]);

  // 创建响应式数据
  const baseList = ref([{
    name: 'photo',
    title: '酒水',
  }, {
    name: 'lock',
    title: '文创',
  }, {
    name: 'https://cdn.uviewui.com/uview/example/button.png',
    title: '拓展',
  }]);

  // 创建对子组件的引用
  const uToastRef = ref(null);
  const loadStatus = ref('loadmore');
  let flowList = reactive([]);
  let goodList = reactive([]);
  const uWaterfallRef = ref();

  // 定义方法
  const click = (name) => {
    if (uToastRef.value) {
      uToastRef.value.success(`点击了第${name}个`);
    }
  };

  const setGoodList = () => {
    goodList = [{
      price: 35,
      title: '北国风光，千里冰封，万里雪飘',
      shop: '李白杜甫白居易旗舰店',
      image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
      soldQuantity: 10,
      sku: '500ml',
    }, {
      price: 75,
      title: '望长城内外，惟余莽莽',
      shop: '李白杜甫白居易旗舰店',
      image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
      soldQuantity: 100,
      sku: '100*50厘米',
    }, {
      price: 385,
      title: '大河上下，顿失滔滔',
      shop: '李白杜甫白居易旗舰店',
      image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
      soldQuantity: 100,
      sku: '1000ml',
    }, {
      price: 784,
      title: '欲与天公试比高',
      shop: '李白杜甫白居易旗舰店',
      image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
      soldQuantity: 100,
      sku: '200*50厘米',
    }, {
      price: 7891,
      title: '须晴日，看红装素裹，分外妖娆',
      shop: '李白杜甫白居易旗舰店',
      image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg',
      soldQuantity: 100,
      sku: '150*50厘米',
    }, {
      price: 2341,
      shop: '李白杜甫白居易旗舰店',
      title: '江山如此多娇，引无数英雄竞折腰',
      image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg',
      soldQuantity: 100,
      sku: '250*50厘米',
    }, {
      price: 661,
      shop: '李白杜甫白居易旗舰店',
      title: '惜秦皇汉武，略输文采',
      image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg',
      soldQuantity: 100,
      sku: '100*150厘米',
    }, {
      price: 1654,
      title: '唐宗宋祖，稍逊风骚',
      shop: '李白杜甫白居易旗舰店',
      image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
      soldQuantity: 80,
      sku: '1500ml',
    }, {
      price: 1678,
      title: '一代天骄，成吉思汗',
      shop: '李白杜甫白居易旗舰店',
      image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
      soldQuantity: 50,
      sku: '2500ml',
    }, {
      price: 924,
      title: '只识弯弓射大雕',
      shop: '李白杜甫白居易旗舰店',
      image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
      soldQuantity: 100,
      sku: '1500ml',
    }, {
      price: 8243,
      title: '俱往矣，数风流人物，还看今朝',
      shop: '李白杜甫白居易旗舰店',
      image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
      soldQuantity: 60,
      sku: '500ml',
    }];

    console.log(goodList, 'goodList');
  };
  // const remove = (id) => {
  //   uWaterfallRef.value.remove(id);
  // };
  const clear = () => {
    uWaterfallRef.value.clear();
  };

  const addRandomData = () => {
    console.log(uni.$u.config.v, '********');
    console.log(uni.$u.guid(), '********');
    console.log(uni.$u.random(0, 9), '********');

    for (let i = 0; i < goodList.length; i++) {
      const index = uni.$u.random(0, goodList.length - 1);
      // 先转成字符串再转成对象，避免数组对象引用导致数据混乱
      const item = JSON.parse(JSON.stringify(goodList[index]));
      item.id = uni.$u.guid();
      flowList.push(item);
    }
  };

  onReachBottom(() => {
    loadStatus.value = 'loading';
    // 模拟数据加载
    setTimeout(() => {
      addRandomData();
      loadStatus.value = 'loadmore';
    }, 1000);
  });

  onMounted(() => {
    setGoodList();
    addRandomData();
  });
</script>

<style lang="scss">
  page {
    background-color: #efeff4;
  }

  .indicator {
    @include flex(row);

    justify-content: center;

    &__dot {
      width: 12rpx;
      height: 12rpx;
      margin: 0 10rpx;
      background-color: rgb(255 255 255 / 35%);
      border-radius: 200rpx;
      transition: background-color 0.3s;

      &--active {
        background-color: #fff;
      }
    }
  }

  .indicator-num {
    justify-content: center;
    width: 70rpx;
    padding: 4rpx 0;
    background-color: rgb(0 0 0 / 35%);
    border-radius: 200rpx;

    @include flex;

    &__text {
      font-size: 24rpx;
      color: #FFF;
    }
  }

  .content {
    padding: 0 10rpx;

    .category-wrap {
      width: 100%;
      height: 170rpx;
      background: #FFF;
      border-radius: 24rpx;
    }

    .gird-text {
      width: 56rpx;
      height: 40rpx;
      font-size: 28rpx;
      font-style: normal;
      font-weight: 400;
      line-height: 0rpx;
      color: #333;
      text-align: left;
      text-transform: none;
    }

    .u-waterfall {
      // min-height: 300px;
      // max-height: 500px;
    }
  }
</style>

<style lang="scss" scoped>
  .demo-warter {
    position: relative;
    padding: 16rpx;
    margin: 10rpx;
    background-color: #fff;
    border-radius: 16rpx;
  }

  .u-close {
    position: absolute;
    top: 32rpx;
    right: 32rpx;
  }

  .blobk-name {
    margin-top: 17rpx;
    margin-bottom: 13rpx;
    width: 96rpx;
    height: 45rpx;
    font-weight: 400;
    font-size: 32rpx;
    color: #333333;
    line-height: 45rpx;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }

  .demo-image {
    width: 100%;
    border-radius: 8rpx;
  }

  .demo-title {
    margin-top: 10rpx;
    font-size: 30rpx;
    color: $u-main-color;
  }

  .demo-tag {
    display: flex;
    margin-top: 10rpx;
  }

  .demo-tag-owner {
    display: flex;
    align-items: center;
    padding: 4rpx 14rpx;
    font-size: 20rpx;
    line-height: 1;
    color: #FFF;
    background-color: red;
    border-radius: 50rpx;
  }

  .demo-tag-text {
    display: flex;
    align-items: center;
    padding: 4rpx 14rpx;
    margin-left: 20rpx;
    font-size: 20rpx;
    line-height: 1;
    color: red;
    border: 2rpx solid red;
    border-radius: 50rpx;
  }

  .demo-price {
    margin-top: 10rpx;
    font-size: 30rpx;
    color: red;
  }

  .demo-shop {
    margin-top: 10rpx;
    font-size: 22rpx;
    color: red;
  }

  .demo-sold-quantity {
    font-size: 22rpx;
    font-style: normal;
    font-weight: 400;
    line-height: 42rpx;
    color: #999;
    text-align: left;
    text-transform: none;
  }

  .demo-sku {
    font-size: 22rpx;
    font-style: normal;
    font-weight: 400;
    line-height: 42rpx;
    color: #333;
    text-align: left;
    text-transform: none;
  }
</style>
