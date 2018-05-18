<template>
  <keep-alive>
    <div class="nav-bar" id="side-bar">
      <ul>
        <li><a :class="{active:show==1}" :id="1" href="javascript:void" @click.prevent="showDisplay('', $event)">可视化</a></li>
        <li><a :class="{active:show==2}" :id="2" href="javascript:void" @click.prevent="showDisplay('css-design', $event)">css揭秘</a></li>
        <li><a :class="{active:show==3}" :id="3" href="javascript:void" @click.prevent="showDisplay('', $event)">其他</a></li>
        <li><a :class="{active:show==4}" :id="4" href="javascript:void" @click.prevent="showDisplay('', $event)">其他</a></li>
      </ul>
      <div :class="navObject" @click="sidebarShow">
        <i class="icon-menu"></i>
      </div>
      <nav class="sidebar-mobile">
        <div class="sidebar-content">
          <i class="icon-cross" @click="isVisible"></i>
          <a href="HOME"></a>
        </div>
      </nav>
    </div>
  </keep-alive>
</template>

<script>
  export default {
    name: 'nav-bar',
    data(){
      return {
        show: 1,
        isActive: false
      }
    },
    computed: {
      navObject: function(){
        return {
          'nav-mobile': true,
          active: this.isActive
        }
      }
    },
    methods: {
      showDisplay: function(msg,event) {
        if(event) {
          this.show = event.target.id
        }
        arguments.length > 0 ? this.$router.push('/'+arguments[0]) : this.$router.push('/')
      },
      sidebarShow: function(){
        this.isActive = true
        document.getElementsByClassName('sidebar-mobile')[0].style.display = "block";
      },
      isVisible: function(){
        document.getElementsByClassName('sidebar-mobile')[0].style.display = "none";
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @import '~assets/less/common.less';
  
  .nav-bar {
    margin: 0 auto;
    padding: 10px 0 15px;
    background-color: #2b3a42;
    text-align: center;

    li {
      display: inline;
      padding: 5px 10px;
      
      a{
        text-decoration: none;
        display: inline-block;
        color: #fff;
        padding: 4px 0;
        &:hover {
          color: #39e5f7;
        }
        &.active {
          background: linear-gradient(#39e5f7, #b6eef7) no-repeat;
          background-size: 100% 3px;
          background-position: 0 1.7rem;

        }
      }
    }
    @media(max-width: 768px) {
        li {
          display: none;
        }
        
      }

    .nav-mobile {
      @width: 16px;
      @height: 2px;
      @bgColor: #fff;

      width: @width+8px;
      height: 28px;
      line-height: 28px;
      margin-left: 20px;

      &:hover {
        background-color:red;
        cursor: pointer;
      }
      .icon-menu {
        display: inline-block;
        position: relative;
        width: @width;
        height: @height;
        background-color: @bgColor;

        &:before, &:after {
          content: '';
          position: absolute;
          left: 0;
          width: @width;
          height: @height;
          background-color:@bgColor;
        }
        &:before {
          top: -5px;
        }
        &:after {
          top: -10px;
        }
      }
    }
    .sidebar-mobile {
      display: none;
    z-index: 1;
    width: 300px;
    height: 100vh;
    background-color:#fff;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 0 15px rgba(0,0,0,.5);
    &:hover {
      cursor: pointer;
    }
    .sidebar-content {
       width: 280px;
      height: 100vh;
      position: relative;

      .icon-cross{
        display: inline-block;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        position: absolute;
        top: 50px;
        right: 50px;
        background-color: blue;

       &:before, &:after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: 20px;
          height: 2px;
          background-color: #fff;
        }
        &:before {
          transform: rotate(45deg) translate(-7px, 6px);
        }
        &:after {
          transform: rotate(-45deg) translate(-6px, -7px);
        }
        &:hover {
          background-color: #000;
        }
    }
    }
  }
     @media(min-width: 768px) {
      .nav-mobile,.sidebar-mobile {
        display: none;
      }
    }
  }

  
</style>