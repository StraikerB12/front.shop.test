<template>
  <div class="item-product max-width-site">

    <div class="main">

      <div class="carusel">
        <el-carousel height="420px" ref="carousel" :autoplay="false" @change="carouselChange">
          <el-carousel-item v-for="item in imagesList" :key="item.id">
            <div class="image" :style="`background-image:url(${item.url});`"></div>
          </el-carousel-item>
        </el-carousel>

        <div class="prevue">
          <div class="item" v-for="(item, index) in imagesList" :key="item.id">
            <div class="image" 
              @click="$refs.carousel.setActiveItem(index)" 
              :class="{ active : item.active }" 
              :style="`background-image:url(${item.url});`">
            </div>
          </div>
        </div>
      </div>

      <div class="info">
        <div class="title">Кольцо из метеорита</div>
        <div class="prise">
          <div class="prise-text">от  46 300 ₽</div>
          <div class="prise-store">В наличии</div>
        </div>
        <div class="basket">
          <button class="button">В корзину</button>
          <button class="button plain">Купить в один клик</button>
        </div>
        <div class="funct"></div>
      </div>

    </div>

    <div class="discript">

    </div>

  </div>
</template>

<script>
  export default {
    data: () => ({

      imagesList: [
        { id: 1, active: true, url: require(`~/assets/images/item-tovar.jpg`) },
        { id: 2, active: false, url: require(`~/assets/images/item-tovar.jpg`) },
        { id: 3, active: false, url: require(`~/assets/images/item-tovar.jpg`) },
      ]

    }),

    methods: {
      carouselChange(index){
        for (let i = 0; i < this.imagesList.length; i++) {
          this.imagesList[i].active = false;
        }
        this.imagesList[index].active = true;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .item-product{
    margin: 0 auto;
    font-family: Montserrat;
    padding: 30px 0;

    .main{
      margin: 0 -15px;
      display: flex;

      .carusel{
        width: 100%;
        padding: 0 15px;

        .image{
          height: 420px;
          width: 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }

        .prevue{
          display: flex;
          margin: 0 -5px;
          padding: 20px 0;
          .item{
            padding: 0 5px;

            .image{
              height: 100px;
              width: 100px;
              background-position: center;
              background-repeat: no-repeat;
              background-size: contain;
              border: 1px solid #E4E4E4;
              cursor: pointer;

              &.active{
                border: 1px solid #25282B;
              }
            }
          }
        }
      }
      .info{
        width: 100%;
        padding: 0 15px;

        .title{
          font-weight: bold;
          font-size: 34px;
          line-height: 41px;
          text-transform: uppercase;
          color: #333333;
        }

        .prise{
          display: flex;
          align-content: center;
          align-items: center;

          .prise-text{
            font-weight: 500;
            font-size: 30px;
            line-height: 47px;
            text-transform: uppercase;
            color: #333333;
          }
          .prise-store{
            font-weight: 600;
            font-size: 12px;
            line-height: 15px;
            color: #131313;
            padding: 0 30px;
          }
        }

        .basket{
          display: flex;

          .button:first-child{
            margin-right: 15px;
          }
        }
      }
    }
    .discript{}
  }
</style>