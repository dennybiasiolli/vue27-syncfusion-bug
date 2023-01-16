<template>
  <div id="app">
    <div class="center-stuff">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <ejs-button>Button</ejs-button>
    </div>
    <RichTextEditor />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import RichTextEditor from './components/RichTextEditor.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    RichTextEditor,
  }
}
</script>

<style scoped>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css';


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.center-stuff {
  text-align: center;
}
</style>
