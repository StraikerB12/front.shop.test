<template>
  <div class="in-form">
    <div class="in-form__contener">
      <div class="in-form__title">Аднистративная панель</div>
      <div class="in-form__input">
        <el-input v-model="auth.login" name="login"></el-input>
        <label class="in-form__label">Логин</label>
      </div>
      <div class="in-form__input">
        <el-input v-model="auth.password" show-password name="password"></el-input>
        <label class="in-form__label">Пароль</label>
      </div>
      <el-button type="primary" @click="userLogin">Войти</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'adminIn',
    layout: 'none',
    middleware: ['adminUse'],
    data: () => ({
      auth: {
        login: '',
        password: '',
      }
    }),
    methods: {
      async userLogin() {
        try {
          let response = await this.$auth.loginWith('local', { data: this.auth })
          console.log(response, this);

          console.log('auth token', this.$auth.strategy.token.get());

          console.log('auth user', this.$auth.user);
          console.log('store user', this.$store.state.auth.user);
          console.log('auth loggedIn', this.$auth.loggedIn);
          console.log('store loggedIn', this.$store.state.auth.loggedIn);
        } catch (err) {
          console.error(err)
        }
      }
    }
  }
</script>

<style lang="scss">
  .in-form{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ececec;
    height: 100vh;
    
    font-family: Montserrat;

    .in-form__contener{
      width: 300px;
      padding: 30px;
      border-radius: 5px;
      border: 1px solid #ddd;
      background: #fff;

      display: flex;
      flex-flow: column nowrap;

      & div{
        margin-bottom: 10px;
        &:last-child{
          margin-bottom: 0;
        }
      }

      .in-form__title{
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        padding-bottom: 20px;
      }
      
      .in-form__input{
        position: relative;
        .in-form__label{
          display: inline-block;
          position: absolute;
          background: #fff;
          padding: 0 3px;
          top: -8px;
          left: 12px;
          font-size: 13px;
          color: #aaa;
        }
      }
    }
  }
</style>