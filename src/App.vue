<template>
  <div id="app">
    <!-- <div class="center-stuff">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div> -->
    <!-- <GridWithDetail /> -->
    <!-- <GridExample /> -->
    <!-- <RichTextEditor /> -->
    <GridColumnSelector />
    <StockChart />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import RichTextEditor from './components/RichTextEditor.vue'
// import GridExample from './components/GridExample.vue'
// import GridWithDetail from './components/GridWithDetail.vue'
import GridColumnSelector from './components/GridColumnSelector.vue'
import StockChart from './components/StockChart.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // RichTextEditor,
    // GridExample,
    // GridWithDetail,
    GridColumnSelector,
    StockChart,
  }
}
</script>

<style>
@import '@syncfusion/ej2-base/styles/material.css';
@import '@syncfusion/ej2-buttons/styles/material.css';
@import '@syncfusion/ej2-calendars/styles/material.css';
@import '@syncfusion/ej2-dropdowns/styles/material.css';
@import '@syncfusion/ej2-inputs/styles/material.css';
@import '@syncfusion/ej2-lists/styles/material.css';
@import '@syncfusion/ej2-popups/styles/material.css';
@import '@syncfusion/ej2-navigations/styles/material.css';
@import '@syncfusion/ej2-splitbuttons/styles/material.css';
@import '@syncfusion/ej2-vue-richtexteditor/styles/material.css';
@import "@syncfusion/ej2-vue-grids/styles/material.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.e-control {
    font-family: Avenir, Helvetica, Arial, sans-serif !important;
}


.center-stuff {
  text-align: center;
}
</style>
