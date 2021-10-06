<template>
  <div class="footer">
    <div class="content max-width-site">

    <div class="logo">
      <p class="big">ЭРА</p>
      <p>Интернет-магазин<br>ювелирных украшений</p>
    </div>

    <div class="documetations">
      <div class="item">Гарантия подлинности</div>  
      <div class="item">Политика конфиденциальности</div>
      <div class="item">Контакты</div>
    </div>

    <div class="menu">
      <div class="item">О бренде</div>
      <div class="item">Акции</div>
      <div class="item">Мастер-классы</div>
      <div class="item">Новости</div>
      <div class="item">Как купить</div>
    </div>

    <div class="info">
      <div class="social">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div class="tel">
        <p>8 800 000 00 00</p>
        <button>Обратный звонок</button>
      </div>
      <div class="pay">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>

    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      
    }),
  }
</script>

<style lang="scss" scoped>
  .footer{
    background: #E0E0E0;
    font-family: Montserrat;
    padding: 50px 0;

    .content{
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo{
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        color: #0A0A0A;
        p{
          margin: 0;
        }
        .big{
          font-weight: 300;
          font-size: 75px;
          line-height: 91px;
        }
      }

      .documetations{
        .item{
          font-size: 14px;
          line-height: 28px;
          color: #131313;
        }
      }

      .menu{
        .item{
          font-size: 14px;
          line-height: 28px;
          color: #131313;
        }
      }

      .info{
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-end;

        .social{
          display: flex;
        }
        .tel{
          p{
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #0A0A0A;
            margin: 0;
          }
          button{
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 18px;
            color: #AAAAAA;
            padding: 5px 0 0 0;

            border: none;
            background: transparent;
            cursor: pointer;

            &:hover{
              text-decoration: underline;
            }
          }
        }
        .pay{
          display: flex;
        }
      }
      

    }
  }
</style>