<template>
  <view class="wrap">
    <u-form class="form-wrap" ref="form" :model="formData">
      <u-form-item labelWidth="120" label="抬头类型" prop="headerType">
        <u-radio-group v-model="formData.headerType" @change="groupChange">
          <up-radio active-color="#07c160" :customStyle="{marginBottom: '8px'}" v-for="(item, index) in radiolist"
            :key="index" :label="item.name" :name="item.name" @change="radioChange">
          </up-radio>
        </u-radio-group>
      </u-form-item>

      <u-form-item labelWidth="120" label="发票类型" prop="invoiceHeader"
        :rules="[{ required: true, message: '请填写发票类型',trigger: ['blur'] }]">
        <u-input v-model="formData.invoiceType" placeholder="请填写发票类型"></u-input>
      </u-form-item>
      <u-form-item labelWidth="120" label="发票金额" prop="invoiceHeader"
        :rules="[{ required: true, message: '请填写发票金额',trigger: ['blur'] }]">
        <u-input v-model="formData.invoicePrice" placeholder="请填写发票金额(必填)"></u-input>
      </u-form-item>
      <u-form-item labelWidth="120" label="开票内容" prop="invoiceHeader"
        :rules="[{ required: true, message: '请填写开票内容',trigger: ['blur'] }]">
        <u-input v-model="formData.invoiceContent" placeholder="请填写开票内容(必填)"></u-input>
      </u-form-item>


      <u-form-item labelWidth="120" label="发票抬头" prop="invoiceHeader"
        :rules="[{ required: true, message: '请填写抬头名称',trigger: ['blur'] }]">
        <u-input v-model="formData.invoiceHeader" placeholder="请填写抬头名称(必填)"></u-input>
      </u-form-item>
      <u-form-item v-if="showTaxPayer" labelWidth="120" label="纳税人识别号" prop="taxpayerId"
        :rules="[{ required: true, message: '请填写纳税人识别号',trigger: ['blur'] }]">
        <u-input placeholder="请填写纳税人识别号(必填)" v-model="formData.taxpayerId"></u-input>
      </u-form-item>
      <u-form-item labelWidth="120" label="邮箱地址" prop="email" :rules=" [{ required: true,
        message: '请填写邮箱地址',trigger: ['blur'] }]">
        <u-input placeholder="用于接收电子发票(必填)" v-model="formData.email"></u-input>
      </u-form-item>
      <u-form-item labelWidth="120" label="注册地址" prop="registerAddress">
        <u-input placeholder="(选填)" v-model=" formData.registerAddress"></u-input>
      </u-form-item>
      <u-form-item labelWidth="120" label="注册电话" prop="registerPhone">
        <u-input placeholder="(选填)" v-model="formData.registerPhone"></u-input>
      </u-form-item>
      <u-form-item labelWidth="120" label="开户银行" prop="bank">
        <u-input placeholder="(选填)" v-model="formData.bank"></u-input>
      </u-form-item>
      <u-form-item labelWidth="120" label="银行账户" prop="bankAccount">
        <u-input placeholder="(选填)" v-model="formData.bankAccount"></u-input>
      </u-form-item>
    </u-form>
  </view>
  <view class="save-button-wrap">
    <up-button @click="submitForm" style="color: #F7F7F7" class="save-button" color="#07C160" shape="circle"
      text="提交申请" />
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import {
    onLoad
  } from '@dcloudio/uni-app';
  let showTaxPayer = ref(true);
  let isEdit = ref('');
  onLoad((options) => {
    console.log(options.isEdit, "options");
    isEdit.value = options.isEdit;


  })

  // 基本案列数据
  const radiolist = reactive([{
      name: '个人/非企业单位',
    },
    {
      name: '企业',
    }
  ]);
  const form = ref(null)
  const formData = ref({
    invoiceType: '电子发票',
    invoicePrice: "600.00",
    invoiceContent: "商品明细",
    headerType: null,
    invoiceHeader: '',
    taxpayerId: '',
    email: '',
    registerAddress: '',
    registerPhone: '',
    bank: '',
    bankAccount: '',
    isDefault: false
  });

  formData.value.headerType = "企业";
  showTaxPayer.value = true;
  const submitForm = () => {
    form.value.validate((valid) => {
      if (valid) {
        console.log('表单数据', formData.value)
        // 这里可以添加实际的保存逻辑，例如发送数据到后端
      } else {
        console.log('表单验证失败')
      }
    })
  };


  const groupChange = (n) => {
    console.log('groupChange', n);
    console.log(formData.headerType, "formData.headerType");
  };

  const radioChange = (n) => {
    formData.headerType = n;
    if (n === '企业') {
      showTaxPayer.value = true;
    } else {
      showTaxPayer.value = false;
    }
  };

  const deleteForm = () => {
    console.log("delete");
  };
</script>

<style scoped lang="scss">
  .wrap {
    margin-top: 20rpx;
    padding: 0 20rpx;

    .form-wrap {
      background-color: #FFF;
      box-shadow: 0rpx 3rpx 6rpx 1rpx rgba(0, 0, 0, 0.16);
      border-radius: 12rpx 12rpx 12rpx 12rpx;
      max-height: calc(100vh - 180rpx);
      overflow: auto;
    }
  }

  .save-button-wrap {
    display: flex;
    position: fixed;
    left: 20rpx;
    right: 20rpx;
    bottom: 40rpx;

    .delete-button {
      height: 62rpx;
      background: #ffffff;
      border-radius: 31rpx;
      border: 1rpx solid #F80404;
    }

    .save-button {
      margin-left: 20rpx;
      height: 62rpx;
      border-radius: 31rpx 31rpx 31rpx 31rpx;
      border: 1rpx solid $u-primary;
    }
  }


  ::v-deep .u-form-item__body__left__content {
    padding-left: 20rpx;
    height: 33rpx;
    font-size: 24rpx;
    color: #666666;
    line-height: 33rpx;
    text-align: left;
  }

  ::v-deep .u-form-item__body__right {
    flex: 1;
    padding-right: 20rpx;
  }


  ::v-deep .u-form-item__body__right__content__slot:last-child {
    display: flex;
    justify-content: flex-end;
  }
</style>



<style lang="scss">
  page {
    background-color: #efeff4;
  }
</style>
