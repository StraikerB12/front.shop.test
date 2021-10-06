<template>
  <div class="header">

    <div class="content">
      <div class="pages">
        <div class="max-width-site conteiner">
          <div class="location">Москва</div>
          <div class="item" v-for="page in listPage" :key="page.id">{{ page.name }}</div>
          <div class="lang">EN / RU</div>
        </div>
      </div>

      <div class="center-main">
        <div class="max-width-site main">
          <div class="tel">
            <p>8 800 000 00 00</p>
            <button>Обратный звонок</button>
          </div>
          <div class="logo">
            <p class="big">ЭРА</p>
            <p>Интернет-магазин<br>ювелирных украшений</p>
          </div>
          <div class="funct">
            <button>
              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.6627 12.6901C14.6634 11.6909 13.4739 10.9511 12.1762 10.5033C13.5661 9.54595 14.4793 7.9438 14.4793 6.13217C14.4793 3.20739 12.0998 0.827881 9.17499 0.827881C6.25021 0.827881 3.8707 3.20739 3.8707 6.13217C3.8707 7.9438 4.78386 9.54595 6.17383 10.5033C4.87608 10.9511 3.68662 11.6909 2.6873 12.6901C0.954378 14.4231 0 16.7271 0 19.1779H1.43359C1.43359 14.9092 4.90636 11.4365 9.17499 11.4365C13.4436 11.4365 16.9164 14.9092 16.9164 19.1779H18.35C18.35 16.7271 17.3956 14.4231 15.6627 12.6901ZM9.17499 10.0029C7.04069 10.0029 5.30429 8.2665 5.30429 6.13217C5.30429 3.99784 7.04069 2.26147 9.17499 2.26147C11.3093 2.26147 13.0457 3.99784 13.0457 6.13217C13.0457 8.2665 11.3093 10.0029 9.17499 10.0029Z" fill="black"/>
              </svg>
            </button>
            <button>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6281 1.73664C18.3811 1.72341 19.1289 1.86437 19.8268 2.15107C20.5246 2.43776 21.1581 2.86421 21.689 3.40493C22.22 3.94565 22.6376 4.58949 22.9167 5.29768C23.1958 6.00586 23.3307 6.76384 23.3132 7.52612C23.2793 8.3284 23.0874 9.11574 22.7488 9.84191C21.7344 11.9145 12.5079 20.263 12.5079 20.263C12.5079 20.263 3.29221 11.9087 2.26748 9.84191C1.90195 9.12537 1.70617 8.33252 1.69565 7.52612C1.68106 6.76388 1.81818 6.0064 2.09884 5.29895C2.3795 4.5915 2.79795 3.94857 3.32926 3.40833C3.86057 2.86808 4.49387 2.44165 5.19142 2.15446C5.88896 1.86726 6.63646 1.72516 7.38939 1.73664C8.91848 1.73664 11.4877 4.20875 12.5096 5.21033C13.532 4.20875 16.1013 1.73664 17.6298 1.73664H17.6281ZM17.6298 -0.000198458C16.282 -0.000198458 14.71 0.862382 12.5096 2.84238C10.3097 0.862382 8.73549 -0.000198458 7.38939 -0.000198458C6.12703 -0.0278841 4.87955 0.27986 3.77127 0.892393C2.663 1.50493 1.73264 2.40087 1.07292 3.49087C0.428668 4.55534 0.0607897 5.76753 0.00350167 7.01459C-0.0537864 8.26166 0.201378 9.50313 0.74526 10.6235C1.83174 12.8178 9.15579 19.5508 11.3745 21.5598C11.6863 21.8431 12.0904 21.9998 12.5093 21.9998C12.9282 21.9998 13.3324 21.8431 13.6441 21.5598C15.8663 19.5508 23.2006 12.8177 24.2802 10.6177C24.8195 9.49187 25.0697 8.24648 25.0078 6.99678C24.946 5.74708 24.574 4.53334 23.9263 3.46769C23.2668 2.38409 22.339 1.49395 21.2347 0.885608C20.1305 0.277269 18.8883 -0.0281043 17.6315 -0.000198458H17.6298Z" fill="black"/>
              </svg>
            </button>
            <button>
              <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="max-width-site navigation">
        <div class="search">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <div class="item" v-for="category in listCategories" :key="category.id">{{ category.name }}</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data: () => ({
      listPage: [
        {id: 1, name: 'О бренде'},
        {id: 2, name: 'Акции'},
        {id: 3, name: 'Мастер-классы'},
        {id: 4, name: 'Новости'},
        {id: 5, name: 'Как купить'},
        {id: 6, name: 'Для бизнеса'},
        {id: 7, name: 'Контакты'},
      ],
      listCategories: [
        {id: 1, name: 'Метеориты'},
        {id: 2, name: 'Минералы'},
        {id: 3, name: 'Древности'},
        {id: 4, name: 'Кольца'},
        {id: 5, name: 'Подвески'},
        {id: 6, name: 'Браслеты'},
        {id: 7, name: 'Изделия на заказ'},
      ]
    }),
  }
</script>

<style lang="scss" scoped>
  .header{
    margin: 0 auto;
    font-family: Montserrat;

    .pages{
      background: #030303;

      .conteiner{
        height: 60px;
        margin: 0 auto;
        color: #FFFFFF;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .item{
          font-weight: 300;
          font-style: normal;
          font-size: 14px;
          line-height: 17px;

          cursor: pointer;

          &:hover{
            text-decoration: underline;
          }
        }

        .location{
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          text-transform: uppercase;
        }

        .lang{
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
        }
      }
    }

    .center-main{
      border-bottom: 1px solid #E5E5E5;
      padding-bottom: 20px;

      .main{
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-between;

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
        .funct{
          display: flex;
          align-items: center;

          button{
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 18px;
            padding: 0;
            margin-left: 20px;

            height: 30px;
            width: 30px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: none;
            background: transparent;
            cursor: pointer;

            &:hover{
              
            }
          }
        }
      }
    }

    .navigation{
      margin: 0 auto;
      padding: 30px 0;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .item{
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        text-transform: uppercase;
        color: #0A0A0A;
        cursor: pointer;

        &:hover{
          text-decoration: underline;
        }
      }

      .search{
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>