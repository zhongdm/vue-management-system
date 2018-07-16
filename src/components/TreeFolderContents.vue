<template>
  <ul style="margin-left: 20px">
    <li v-for="child in children">
      <tree-folder v-if="child.children" :folder="child"></tree-folder>
      <span v-else>&nbsp;&nbsp;{{child.name}}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "TreeFolderContents",
    props: ["children"],
    components: {
      'tree-folder': () => import('@/components/TreeFolder')
    }
  }
</script>