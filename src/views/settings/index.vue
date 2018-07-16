<template>
  <div class="form-action">
    <div class="form">
      <div class="field">
        <input type="number" v-focus placeholder="价格">
      </div>
      <div class="field">
        <input type="radio" name="sex" id="female">
        <label for="female">男</label>
        <input type="radio" name="sex" id="male">
        <label for="male">女</label>
      </div>
      <div class="field">
        <input type="checkbox" name="courseEn" id="courseEn">
        <label for="courseEn">英语</label>
        <input type="checkbox" name="courseMath" id="courseMath">
        <label for="courseMath">数学</label>
      </div>
      <div class="field">
        <area-linkage ref="base" ></area-linkage>
      </div>
      <div class="field">
        <textarea name="" id="" cols="30" rows="10" placeholder="print more words"></textarea>
      </div>
      <div class="counter">
        <p>点击总次数：{{counterTimes}}</p>
        <p>最终结果：{{counterTotal}}</p>
        <!-- <my-counter @click="counter" :is-true="true">
            <template slot="header">header-slot</template>
            <a href="">slot</a>welcome
            <template slot="footer">footer-slot</template>
        </my-counter> -->
        <my-counter @click="counter" date-pick="ok" class="counter-inline"></my-counter>
      </div>
    </div>
    <div class="field">
      <div class="dynamic-component-demo">
        <button v-for="tab in tabs" 
        :class="['tab-button', {active: currentTab == tab}]" 
        :key="tab" 
        @click="currentTab = tab">{{tab}}</button>
        <component v-bind:is="currentTabComponent" class="tab-content"></component>
      </div>
    </div>
    <div class="field">
      <tree-folder :folder="folder"></tree-folder>
      <anchored-heading :level="1">hellow world for 11111</anchored-heading>
      <anchored-heading :level="2">hellow world for 22222</anchored-heading>
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <p>====以下为测试demo====</p>
    <!-- is属性 -->
    <!-- ps: .vue文件中，对于元素的解析没有限制，ul内部不一定只能是li标签 -->
    <div class="field">
      <base-input v-model="loginVal" ref="baseInput" @focus="onFocus('focus有效')"></base-input>
    </div>
    <div class="field">
      <button @click="onFocus ('.native只针对组件有效，对普通组件无效')">no native</button>
      <button @click.native="onFocus ('click width .native')">click with native</button>
      <base-input-native @focus.native="onFocus('focus无效')"></base-input-native>
    </div>
    <div class="field">
      <input type="text" placeholder="名称" v-model="name">
      <span>输入的值(触发input)：{{ name }}</span>
    </div>
    <div class="field">
      <input type="text" placeholder="名称" v-model.lazy="name1">
      <span>输入的值(触发change)：{{ name1 }}</span>
    </div>
    <div class="field">
      <ul>
        <my-counter></my-counter>
      </ul>
    </div>
    <div class="field">
      <p>方法1:</p>
      <todo-list :todos="todos">
        <template slot-scope="slotPros">
        <span v-if="slotPros.todo.isComplete">
        {{slotPros.todo.text}}
        </span>
        </template>
      </todo-list>
      <p>方法2:</p>
      <todo-list v-bind:todos="todos">
        <template slot-scope="{ todo }">
        {{todo}}
          <span v-if="todo.isComplete">✓</span>
          {{ todo.text }}
        </template>
      </todo-list>
    </div>
  </div>
</template>

<script>
import AreaLinkage from '@/components/AreaLinkage'
const TodoList = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('@/components/TodoList'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})

  export default {
    name: "settingsForm",
    data(){
      return {
        loginVal: 'hello',
        name: '',
        name1: '',
        counterTotal: 0,
        counterTimes: 0,
        currentTab: 'home',
        tabs: ['home', 'next', 'end'],
        todos: [
        {id: 1, text: "english",isComplete: true},
        {id: 2, text: "math",isComplete: false},
        {id: 3, text: "math"}],
         folder: {
          name: "根目录",
          children: [
          {
            name: "一级子目录1",
            children: [{
              name: "二级子目录1"
            }]
          },
          {
            name: "一级子目录2",
            children: [{
              name: "二级子目录1",
              children: [{
                name: "三级子目录1"
              }]
            }]
          },
          {
            name: "一级子目录3"
          }
          ]
        }
      }
    },
    mounted() {
    },
    computed: {
      currentTabComponent(){
        // return this.currentTab == 'home' ? 'area-linkage' : 'my-counter'
        return {template: "<div>"+this.currentTab+"</div>"}
      }
    },
    methods: {
      counter(counter) {
        this.counterTotal += counter
        this.counterTimes++
      },
      onFocus(msg){
        console.log(msg)
      }
      
    },
    components: {
      AreaLinkage,
      // 'area-linkage': () => import('@/components/AreaLinkage'),
      'my-counter': () => import('@/components/MyCounter'),
      'base-input': () => import('@/components/BaseInput'),
      'base-input-native': () => import('@/components/BaseInputNative'),
      'todo-list': () => import('@/components/TodoList'),
      'tree-folder': () => import('@/components/TreeFolder'),
      'anchored-heading': () => import('@/components/RenderComponent')
    },
    directives: {
      focus: {
        inserted(el){
          el.focus()
        }
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @import '~assets/less/login.less';
  .tab-button {
    padding: 5px;
  }
  .active {
    background-color: blue;
    color: #fff;
  }
  .tab-content {
    border: 2px solid #ddd;
    min-height: 60px;
  }
  .form-action {
    max-width: 1024px;
    margin: 0 auto;

    .form {
      margin: 5px auto;
      text-align: center;

      .field {
        text-align: left;
        padding: 10px 5px;
        input, textarea {
          max-width: 200px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        select {
          max-width: 100px;
          width: 100%;
        }
      }
      .counter {
        text-align: left;
      }
    }
  }
</style>