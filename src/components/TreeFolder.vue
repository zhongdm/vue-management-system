<template>
  <p>
    <span @click="isVisible=!isVisible">
    <template v-if="!isVisible">+</template>
    <template v-else>-</template>
    &nbsp;{{folder.name}}</span>
    <tree-folder-contents v-if="isVisible" :children="folder.children"></tree-folder-contents>
  </p>
</template>

<script>
  export default {
    name: 'TreeFolder',
    props: ["folder"],
    data(){
      return {
        isVisible: true
        // folder: {
        //   name: "根目录",
        //   children: [
        //   {
        //     name: "一级子目录1",
        //     children: {
        //       name: "二级子目录1"
        //     }
        //   },
        //   {
        //     name: "一级子目录2",
        //     children: {
        //       name: "二级子目录1",
        //       children: {
        //         name: "三级子目录1"
        //       }
        //     }
        //   },
        //   {
        //     name: "一级子目录3"
        //   }
        //   ]
        // }
      }
    },
    beforeCreate(){
      this.$options.components.TreeFolderContents = require('@/components/TreeFolderContents').default
    },
    components:{
      // 'tree-folder-contents': () => import('@/components/TreeFolderContents')
    }
  }
</script>