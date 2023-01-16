import Vue from "vue";

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
// import "@/styles/syncfusion.scss";

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
