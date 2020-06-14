<template>
  <div>
    <Nav title="我的"></Nav>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="username"
        name="验证码"
        label="验证码"
        placeholder="请输入验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      />
      <van-button class="verify" type="primary" size="mini">发送验证码</van-button>
      <div style="margin: 16px;">
        <van-button round block type="danger" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    }
  },
  components: {
    Nav
  }
};
</script>
<style scoped>
h1 {
  margin: 0;
}
.verify {
  float: right;
  position: absolute;
  top: 0px;
  left: 300px;
  z-index: 99;
}
</style>