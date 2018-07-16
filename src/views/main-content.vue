<template>
  <div>
    <div class="counter">
      <div class="counter-dot active"></div>
      <div class="counter-dot"></div>
      <div class="counter-dot"></div>
      <div class="counter-dot"></div>
    </div>
    <div class="container">
      <side-bar class="interactive" 
        v-bind:post-names="postNames" ></side-bar>
      <div class="page-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mainContent',
    props: ['postNames'],
    components: {
      'nav-bar': () => import('@/components/NavBar'),
      'side-bar': () => import('@/components/SideBar')
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
 @import '~assets/less/common.less';
* {
  box-sizing: border-box;
}
  .counter {
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    height: 50px;

    counter-reset: section 3;
    .counter-dot {
      display: inline-block;
      text-align: center;
      width: 100px;
      height: 30px;
      line-height: 30px;
      position: relative;

      &:hover:before {
        cursor: pointer;
        background-color: #45b8fb;
        transform: rotate(360deg);
      }
      &:hover:after {
        border-color: #d2135c;
      }
      &:before {
        counter-increment: section;
        content: counter(section, upper-roman);
        position: absolute;
        left: 0;
        vertical-align: middle;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #1a89d9;
        color: #fff;
        transition: all .4s ease-out;
      }
      
      &:after {
        content: "";
        position: absolute;
        left: 30px;
        width: 100%;
        top: 50%;
        border: 1px solid #000;
        
      }
      
      &:last-child:after {
       display: none;
      }
    }
  }

  .container {
      .display-flex();
      max-width: 1024px;
      margin: 0 auto;
      
      
      .interactive {
        .flexbox(1);
      }
      @media(max-width: 768px) {
        .interactive {
          display: none;
        }
      }
      .page-content {
        .flexbox(4);
      }
   
  }
</style>