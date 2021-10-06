<template>
  <div class="catalog max-width-site">
    <div class="margin-box">

      <div class="filtres-box">
        <div class="filtres">

        </div>
      </div>

      <div class="list">

        <div class="items">

          <div class="item">
            <div class="card">
              <div class="image"></div>
              <div class="prise">от 46 300 ₽</div>
              <div class="discript">Кольцо из метеорита "Simple"</div>
            </div>
          </div>

          <div class="item">
            <div class="card">
              <div class="image"></div>
              <div class="prise">от 46 300 ₽</div>
              <div class="discript">Кольцо из метеорита "Simple"</div>
            </div>
          </div>

          <div class="item">
            <div class="card">
              <div class="image"></div>
              <div class="prise">от 46 300 ₽</div>
              <div class="discript">Кольцо из метеорита "Simple"</div>
            </div>
          </div>

          <div class="item">
            <div class="card">
              <div class="image"></div>
              <div class="prise">от 46 300 ₽</div>
              <div class="discript">Кольцо из метеорита "Simple"</div>
            </div>
          </div>

          <div class="item">
            <div class="card">
              <div class="image"></div>
              <div class="prise">от 46 300 ₽</div>
              <div class="discript">Кольцо из метеорита "Simple"</div>
            </div>
          </div>
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
  .catalog{
    margin: 0 auto;
    padding: 60px 0;

    .margin-box{
      display: flex;
      margin-left: -15px;
      margin-right: -15px;

      .filtres-box{
        padding-left: 15px;
        padding-right: 15px;

        .filtres{
          width: 270px;
          background: #F4F4F4;
          padding: 40px 25px;
        }
      }

      .list{
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;

        .items{
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          margin-left: -15px;
          margin-right: -15px;

          .item{
            box-sizing: border-box;
            width: calc( 100% / 3);
            padding: 0 15px 30px 15px;

            .card{
              padding: 40px;
              font-family: Montserrat;

              .image{
                height: 200px;
                width: 100%;
                background-image: url(~/assets/images/item-tovar.jpg);
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
              }
              .prise{
                font-weight: 500;
                font-size: 23px;
                line-height: 47px;
                text-transform: uppercase;
                text-align: center;
                color: #131313;
              }
              .discript{
                font-weight: 500;
                font-size: 16px;
                line-height: 27px;
                text-align: center;
                color: #838383;
              }
            }
          }
        }
      }
    }
  }
</style>