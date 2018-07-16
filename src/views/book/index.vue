<template>
  <div class="book">
    <div class="book-display" id="shopping-cart" >
      <ul>
        <li><a href="javascript:void(0);" @click="book">选购图书</a></li>
        <li><a href="javascript:void;">选购电影1</a></li>
        <li><a href="javascript:void;">选购音乐</a></li>
        <li><a href="javascript:void;">选购舞台</a></li>
      </ul>
      <router-view></router-view>
    </div>
    <div class="book-show-x">
      <div class="book-bg">
        <div class="book-line book-line-one"></div>
      </div>
      <div class="book-bg">
        <div class="book-line book-line-two"></div>
      </div>
      <div class="book-bg">
        <div class="book-line book-line-three"></div>
      </div>

    </div>
    <i class="book-bg-back"></i>
    <i class="book-bg-back book-bg-back-two"></i>
    <div class="book-show">
      <img src="~assets/img/book-cover/bubujingxin.jpg" alt="" class="book-show-pic">
      <img src="~assets/img/book-cover/doupocangqiong.jpg" alt="" class="book-show-pic">
      <img src="~assets/img/book-cover/laojiumen.jpg" alt="" class="book-show-pic">
      <img src="~assets/img/book-cover/langyabang.jpg" alt="" class="book-show-pic">
      <img src="~assets/img/book-cover/daomubiji.jpg" alt="" class="book-show-pic">
      <img src="~assets/img/book-cover/daomubiji.jpg" alt="" class="book-show-pic">
      <img src="~assets/img/book-cover/bubujingxin.jpg" alt="" class="book-show-pic">
      <img src="~assets/img/book-cover/bubujingxin.jpg" alt="" class="book-show-pic">
      <img src="~assets/img/book-cover/doupocangqiong.jpg" alt="" class="book-show-pic">
      <img src="~assets/img/book-cover/laojiumen.jpg" alt="" class="book-show-pic">
      <img src="~assets/img/book-cover/langyabang.jpg" alt="" class="book-show-pic">
      <img src="~assets/img/book-cover/daomubiji.jpg" alt="" class="book-show-pic">
      <img src="~assets/img/book-cover/daomubiji.jpg" alt="" class="book-show-pic">
      <img src="~assets/img/book-cover/bubujingxin.jpg" alt="" class="book-show-pic">
      <img src="~assets/img/book-cover/bubujingxin.jpg" alt="" class="book-show-pic">
      <img src="~assets/img/book-cover/doupocangqiong.jpg" alt="" class="book-show-pic">
      <img src="~assets/img/book-cover/laojiumen.jpg" alt="" class="book-show-pic">
    </div>
  </div>
</template>

<script>
  export default {
    name: "BookShow",
    data(){
      return {
        imgEle: null,
        maxLen: 2
      }
    },
    mounted() {
      // 初始化
      this.imgEle = document.querySelectorAll('.book-show .book-show-pic')
      this.animationRun(this.maxLen)
      // this.transformBg(-40)
      let _this = this
      document.getElementById('shopping-cart').addEventListener('click', (event) => {
        event.preventDefault()
        if(event.target.tagName.toLowerCase() == "a") {
          // this.$router.addRoutes([{
          //   path: event.target.pathname,
          //   name: "书籍",
          //   component: ()=> import('@/views/book/book')
          // }])
          _this.$router.push('/book')
          // this.$router.push('/')
          return
        }
       
      })
    },
    methods: {
      animationRun(e){
        let animImgs = this.imgEle
        let len = animImgs.length // 长度
        let halfImgs = Math.floor(len / 2); // 对半

        for(let i = 0; i < halfImgs; i++) {
          let reverseId = e - 1 - i;
            reverseId = reverseId < 0 ? reverseId += len : reverseId
          let mapId = e + 1 + i;
            mapId = mapId > (len-1) ? mapId -= len : mapId
          let curPos = -160 * (i+1),
              curZpos = -110 * (i+1)
         
          animImgs[reverseId].style.transform = "translateX("+curPos+"px) translateZ("+curZpos+"px)"
          animImgs[mapId].style.transform = "translateX("+-curPos+"px) translateZ("+curZpos+"px)"
        }
        
        animImgs[e].style.transform = "translateX(0)"
        this.maxLen = ++this.maxLen > (len-1) ? 0 : this.maxLen

        setTimeout(() => {
          this.animationRun(this.maxLen)
        }, 2000)
      },
      transformBg(offsetx){
        offsetx -= Math.random() * 5
        document.querySelector('.book-line-one').style.transform = "translateX("+offsetx+"px)"
        if(offsetx < -20) {
          let offset2 = offsetx - 20 -Math.random() * 2
          document.querySelector('.book-line-two').style.transform = "translateX("+offset2+"px)"
        }
        
       if(offsetx < -40) {
        let offset3 = offsetx - 40-Math.random() * 2
        document.querySelector('.book-line-three').style.transform = "translateX("+offset3+"px)"
       }

        setTimeout(() => {
          this.transformBg(--offsetx)
        }, 50)
      }

    }
  }
</script>
<style lang="less">
.book {
  overflow: hidden;
  margin-top: 100px;
  height: 600px;
  overflow: hidden;
  position: relative;
  .book-show-x {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(31,33,35,.8);
      z-index: 1;
    }
    .book-bg {
      height: 140px;
      width: 7200px;
      .book-line {
        height: inherit;
      }
      .book-line-one {
        background: url('~assets/img/book-cover/book-line1.jpg') repeat-x;
      }
      .book-line-two {
        background: url('~assets/img/book-cover/book-line3.jpg') repeat-x;
      }
      .book-line-three {
        background: url('~assets/img/book-cover/book-line4.jpg') repeat-x;
      }
    }
    
  }
  .book-bg-back {
      height: 140px;
      width: 100%;
      position: absolute;
      background: url('~assets/img/book-cover/book-line4.jpg') repeat-x;
      z-index: -1;
    }
    .book-bg-back-two {
      margin-top: 140px;
    }
    .book-show {
      width: 100%;
      height: 530px;
      position: absolute;
      z-index: 2;
      margin-top: -100px;
      -webkit-transform-style: preserve-3d;
      -webkit-perspective: 1800px;
      transform-style: preserve-3d;
      perspective: 1800px;
      .book-show-pic {
        width: 230px;
        height: 300px;
        position: absolute;
        left: calc(50% - 100px);
        transition: 2s ease-in;
      }
    }

}
</style>