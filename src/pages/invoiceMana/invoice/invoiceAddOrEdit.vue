<template>
  <view class="wrap">
    <u-form class="form-wrap" ref="form" :model="formData">
      <u-form-item labelWidth="120" label="抬头类型" prop="headerType">
        <u-radio-group v-model="formData.headerType">
          <u-radio label="个人/非企业单位" :name="formData.headerType"></u-radio>
          <u-radio label="企业" :name="formData.headerType"></u-radio>
        </u-radio-group>
      </u-form-item>
      <u-form-item labelWidth="120" label="发票抬头" prop="invoiceHeader" :rules="[{ required: true, message: '请填写抬头名称' }]">
        <u-input v-model="formData.invoiceHeader" placeholder="请填写抬头名称(必填)"></u-input>
      </u-form-item>
      <u-form-item labelWidth="120" label="纳税人识别号" prop="taxpayerId" placeholder="请填写纳税人识别号(必填)"
        :rules="[{ required: true, message: '请填写纳税人识别号' }]">
        <u-input v-model="formData.taxpayerId"></u-input>
      </u-form-item>
      <u-form-item labelWidth="120" label="邮箱地址" prop="email" placeholder="用于接收电子发票(必填)" :rules=" [{ required: true,
        message: '用户接收电子发票' }]">
        <u-input v-model="formData.email"></u-input>
      </u-form-item>
      <u-form-item labelWidth="120" label="注册地址" prop="registerAddress">
        <u-input placeholder="(选填) v-model=" formData.registerAddress"></u-input>
      </u-form-item>
      <u-form-item labelWidth="120" label="注册电话" prop="registerPhone">
        <u-input v-model="formData.registerPhone" placeholder="(选填)"></u-input>
      </u-form-item>
      <u-form-item labelWidth="120" label="开户银行" prop="bank" placeholder="(选填)">
        <u-input v-model="formData.bank"></u-input>
      </u-form-item>
      <u-form-item labelWidth="120" label="银行账户" prop="bankAccount" placeholder="(选填)">
        <u-input v-model="formData.bankAccount"></u-input>
      </u-form-item>
      <u-form-item labelWidth="120" label="默认发票抬头" prop="isDefault">
        <u-switch v-model="formData.isDefault"></u-switch>
      </u-form-item>
    </u-form>
  </view>
  <view class="save-button-wrap">
    <up-button @click="goInvoiceAddOrEdit(false)" style="color: #F7F7F7" class="save-button" color="#2583B7"
      shape="circle" text="添加发票抬头" />
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import {
    onLoad
  } from '@dcloudio/uni-app';

  let isEdit = ref('');
  onLoad((options) => {
    console.log(options.isEdit, "options");
    isEdit.value = options.isEdit;
  })
  const form = ref(null)
  const formData = ref({
    headerType: '企业',
    invoiceHeader: '',
    taxpayerId: '',
    email: '',
    registerAddress: '',
    registerPhone: '',
    bank: '',
    bankAccount: '',
    isDefault: false
  })

  const submitForm = () => {
    form.value.validate((valid) => {
      if (valid) {
        console.log('表单数据', formData.value)
        // 这里可以添加实际的保存逻辑，例如发送数据到后端
      } else {
        console.log('表单验证失败')
      }
    })
  }
</script>

<style scoped lang="scss">
  .wrap {
    margin-top: 20rpx;
    padding: 0 20rpx;

    .form-wrap {
      background-color: #FFF;
      box-shadow: 0rpx 3rpx 6rpx 1rpx rgba(0, 0, 0, 0.16);
      border-radius: 12rpx 12rpx 12rpx 12rpx;
    }
  }

  .save-button-wrap {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 20rpx;
    right: 20rpx;
    bottom: 40rpx;

    .save-button {
      height: 62rpx;
      background: $u-primary;
      border-radius: 31rpx;
    }

    .exit-button {
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
</style>



<style lang="scss">
  page {
    background-color: #efeff4;
  }
</style>
