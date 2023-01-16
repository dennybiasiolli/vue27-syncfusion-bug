import Vue from "vue";
import { ButtonComponent, CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { DateTimePickerComponent } from "@syncfusion/ej2-vue-calendars";
import {
  // ChartComponent,
  StockChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  StockEventsDirective,
  StockEventDirective,
} from "@syncfusion/ej2-vue-charts";
import {
  ListBoxComponent,
  DropDownListComponent,
} from "@syncfusion/ej2-vue-dropdowns";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-vue-grids";
import { TextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import {
  ToolbarComponent,
  ItemsDirective,
  ItemDirective,
} from "@syncfusion/ej2-vue-navigations";
import { ToastComponent } from "@syncfusion/ej2-vue-notifications";
import { DialogComponent, TooltipComponent } from "@syncfusion/ej2-vue-popups";
import { RichTextEditorComponent } from "@syncfusion/ej2-vue-richtexteditor";

Vue.component("ejs-button", ButtonComponent);
Vue.component("ejs-tooltip", TooltipComponent);
Vue.component("ejs-dropdownlist", DropDownListComponent);
Vue.component("ejs-richtexteditor", RichTextEditorComponent);

Vue.component("ejs-grid", GridComponent);
Vue.component("e-columns", ColumnsDirective);
Vue.component("e-column", ColumnDirective);

Vue.component("ejs-toast", ToastComponent);
Vue.component("ejs-listbox", ListBoxComponent);
Vue.component("ejs-textbox", TextBoxComponent);
Vue.component("ejs-checkbox", CheckBoxComponent);

Vue.component("ejs-toolbar", ToolbarComponent);
Vue.component("e-items", ItemsDirective);
Vue.component("e-item", ItemDirective);

Vue.component("ejs-dialog", DialogComponent);

// Vue.component("ejs-chart", ChartComponent);
// Vue.component("e-series-collection", ...);
// Vue.component("e-series", ...);

Vue.component("ejs-datetimepicker", DateTimePickerComponent);

Vue.component("ejs-stockchart", StockChartComponent);
Vue.component("e-stockchart-series-collection", SeriesCollectionDirective);
Vue.component("e-stockchart-series", SeriesDirective);
Vue.component("e-stockchart-stockevents", StockEventsDirective);
Vue.component("e-stockchart-stockevent", StockEventDirective);
