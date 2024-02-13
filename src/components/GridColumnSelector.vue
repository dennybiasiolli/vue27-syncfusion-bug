<template>
  <div id="app">
    <div>
      Steps to reproduce the issue:
      <ol>
        <li>
          <u>Set column "Order ID" as visible</u>
          <br>
          actionComplete(columnstate) event triggered correctly<br>
          with "Order ID" changed to visible=true
        </li>
        <li>
          <u>Set columns "Order ID" and "Customer Name" as not visible</u>
          <br>
          actionComplete(columnstate) event triggered with only<br>
          with "Customer Name" changed to visible=false
        </li>
      </ol>
    </div>
    {{  }}
    <ul v-if="startupColumnState">
      Original column state:
      <li v-for="col in startupColumnState" :key="col.field">
        Column "{{ col.headerText }}" originally set to visible={{ col.visible || false }}
      </li>
    </ul>
    <ul v-if="columnstate">
      Columnstate event, columns changed:
      <li v-for="col in columnstate" :key="col.field">
        Column "{{ col.headerText }}" changed to visible={{ col.visible || false }}
      </li>
    </ul>
    <ejs-grid :dataSource="data" :show-column-chooser="true" :toolbar="toolbarOptions" :columns="columns"
      :loading-indicator="{ indicatorType: 'Shimmer' }" :allow-text-wrap="true"
      :selection-settings="{ checkboxOnly: true, enableSimpleMultiRowSelection: true }"
      :action-complete="handleActionComplete" />
  </div>
</template>
<script>
import { ColumnChooser, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

export default {
  data() {
    return {
      data: data,
      toolbarOptions: ['ColumnChooser'],
      columns: [],
      columnstate: null,
      startupColumnState: [],
    };
  },
  provide: {
    grid: [ColumnChooser, Toolbar],
  },
  async mounted() {
    this.columns = [
      {
        type: "checkbox",
        width: 50,
      },
      {
        field: "actions",
        headerText: "Actions",
        width: 150,
        showInColumnChooser: false,
        valueAccessor: () => "Actions",
      },
      {
        field: "OrderID",
        headerText: "Order ID",
        width: 125,
        visible: false,
      },
      {
        field: "CustomerID",
        headerText: "Customer Name",
        width: 150,
      },
      {
        field: "Freight",
        headerText: "Freight",
        width: 120,
        format: "C2",
        textAlign: "Left",
      },
      {
        field: "ShipCountry",
        headerText: "Ship Country",
        visible: true,
        width: 150,
      },
      {
        field: "ShipCity",
        headerText: "Ship City",
        visible: false,
        width: 150,
      },
    ];
    this.startupColumnState = this.columns.map(col => ({
      field: col.field,
      headerText: col.headerText,
      visible: col.visible
    }));
  },
  methods: {
    handleActionComplete(args) {
      if (args.requestType === "columnstate") {
        console.log(args.columns);
        this.columnstate = args.columns.map(col => ({
          field: col.field,
          headerText: col.headerText,
          visible: col.visible
        }));
      }
    },
  },
}
</script>
