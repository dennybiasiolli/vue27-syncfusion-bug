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
import Vue from 'vue';
import { DialogUtility } from "@syncfusion/ej2-popups";
import { ButtonPlugin, CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { DateTimePickerPlugin } from "@syncfusion/ej2-vue-calendars";
import { ChartPlugin, StockChartPlugin } from "@syncfusion/ej2-vue-charts";
import {
  MultiSelectPlugin,
  ListBoxPlugin,
  DropDownListPlugin,
} from "@syncfusion/ej2-vue-dropdowns";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { TextBoxPlugin, NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { ToolbarPlugin, TabPlugin } from "@syncfusion/ej2-vue-navigations";
import { ToastPlugin } from "@syncfusion/ej2-vue-notifications";
import { DialogPlugin, TooltipPlugin } from "@syncfusion/ej2-vue-popups";
import { RichTextEditorPlugin } from "@syncfusion/ej2-vue-richtexteditor";
import HelloWorld from './components/HelloWorld.vue'
import RichTextEditor from './components/RichTextEditor.vue'

[
  ButtonPlugin,
  ChartPlugin,
  CheckBoxPlugin,
  DateTimePickerPlugin,
  DialogPlugin,
  DialogUtility,
  DropDownListPlugin,
  GridPlugin,
  ListBoxPlugin,
  MultiSelectPlugin,
  NumericTextBoxPlugin,
  RichTextEditorPlugin,
  StockChartPlugin,
  TabPlugin,
  TextBoxPlugin,
  ToastPlugin,
  ToolbarPlugin,
  TooltipPlugin,
].forEach((p) => Vue.use(p));

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
