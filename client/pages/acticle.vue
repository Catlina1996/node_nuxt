<template>
  <div class="container-fluid">
    <div class="acticle row">
      <div class="contribution col-lg-3 col-md-3 col-sm-12">
        <personCon />
      </div>
      <section class="acticle-middle col-lg-9 col-md-9 col-sm-12">
        <div class="list" v-for="(item, index) in acticleList">
          <div class="list-left">
            <img src="../assets/1.jpg" alt="">
          </div>
          <div class="list-right">
            <div class="list-right-top">
              <span class="list-name">{{item.username}}</span>
              <span class="list-time">{{item.create_time}}</span>
            </div>
            <div class="list-detail">
              <a :href="`/acticleDetail/${item.id}`">
                {{item.content}}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import personCon from '~/components/person/contribution'
    export default {
        name: "acticle",
        data() {
          return {
            acticleList: []
          }
        },

        components: {
          personCon
        },

        async asyncData({ $axios }) {
          return $axios.get('/acticle/list').then(res => {
            // console.log(res);
            return {
              acticleList: res.data.data
            }
          }).catch(err => {
            // console.log(err)
          })
        },

      mounted() {
        // console.log(this.acticleList)
      }
    }
</script>

<style scoped lang="scss">

  .acticle {
    padding: 20px;
    display: flex;
    flex-direction: row;
    .acticle-middle {
      .list {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 10px;
        margin-bottom: 10px;
        box-shadow: 0px 0px 5px #bdd6f2;
        .list-left {
          margin-right: 14px;
          img {
            width: 60px;
            height: 60px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
          }
        }
        .list-right {
          display: flex;
          flex-direction: column;
          .list-right-top {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            .list-name {
              margin-bottom: 6px;
              color: #000000;
            }
            .list-time {
              color: #9b9b9b;
              font-size: 14px;
            }
          }
          .list-detail {
            a {
              width: 100%;
              height: 100%;
              display: inline-block;
              color: #828187;
              text-decoration: none;
            }
            a:link {
              color: #828187;
            }
            a:visited {
              color: #cccccc;
            }
            a:hover {
              color: #17a2b8;
            }
            a:active {
              color: #17a2b8;
            }
          }
        }
      }
      .list:hover {
        background-color: #f5f2f0;
        box-shadow: 0px 0px 20px #bdd6f2;
      }
    }
  }

</style>
