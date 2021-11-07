<template>
  <div class="hide">
    <h1 class="text" @click="goIndex">非管理员请重新回到index页面！</h1>
    <div class="hide-box">
      <transition name="el-zoom-in-top">
        <div id="Input-email-code">
          <input id="email-code-input" type="text" maxlength="6" placeholder="邮箱验证码" v-model="emailCode"/>
          <button id="send-email" @click="countDown" :disabled="emailCodeBtnDisable">{{codeCount}}</button>
        </div>
      </transition>
      <div id="Button-Box">
        <button id="button" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import {checkCode, sendEmailCheck} from "@/network/mail/mail";

export default {
  name: "Verification",
  data() {
    return {
      emailCode: null,
      codeCount: "发送",
      emailCodeBtnDisable: false,
      responseEmailCode: ""
    }
  },
  beforeCreate() {
    this.$parent.baseShow = false
  },
  methods: {
    goIndex() {
      this.$parent.$parent.navShow = true
      this.$router.push({path: "index"})
    },
    countDown() {
      //调用后台发送注册邮件
      sendEmailCheck().then(res => {
        this.$message({
          message: '发送成功！',
          type: 'success'
        });
      })
      this.codeCount = 60
      setInterval(() => {
        if (this.codeCount > 0) {
          this.codeCount--
          this.emailCodeBtnDisable = true
        } else {
          this.codeCount = "重新发送"
          this.emailCodeBtnDisable = false
        }
      }, 1000)
    },
    login() {
      checkCode(this.emailCode).then(res => {
        if (res.obj.code !== this.emailCode) {
          this.$message.error('验证码错误，非管理员请不要尝试进入博客后台！');
        }else {
          this.$message({
            message: '欢迎回来，管理员！',
            type: 'success'
          });
          this.$parent.baseShow = true
          sessionStorage.setItem("token", 'true');
          this.$router.push({path: "/base/home"})

        }
      })
    },
  }
}
</script>

<style scoped>

.text {
  position: absolute;
  top: 10rem;
  left: 35%;
  font-size: 4rem;
  color: white;
}

.hide {
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,.6);
  top: 0;
}

.hide-box {
  height: 30rem;
  width: 30%;
  background: rgba(255,255,255,.3);
  margin: 15% auto;
}

#Input-email-code {
  margin-left: 30px;
}

#email-code-input {
  margin-top: 5.5rem;
  width: 15rem;
  height: 4rem;
  margin-left: 8rem;
  border-radius: .5rem;
  padding-left: 1rem;
  background: rgba(255,255,255,.6);
  border: 1px solid rgba(255,255,255,.5);
  transition: .4s;
  outline: none;
}

#email-code-input:hover {
  border: 1px solid skyblue;
}

#send-email {
  width: 14rem;
  height: 4rem;
  margin-left: 5rem;
  border: 0;
  border-radius: .5rem;
  outline: none;
  background: rgba(255,255,255,.5);
  color: darkgrey;
  -webkit-transition: .5s all;
}

#send-email:hover {
  background: #A8CAF4;
}

#button {
   position: absolute;
   width: 34rem;
   height: 5rem;
   border-radius: 2.5rem;
   border: 0;
   background: #BDCEFC;
   color: #fefefe;
   font-size: 1.8rem;
   outline: none;
   -webkit-transition: .5s all;
   margin-top: 10rem;
   margin-left: 12rem;
 }

#button:hover {
  background: #3f89ec;
}
</style>