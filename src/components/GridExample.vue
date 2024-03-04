<template>
  <div>
    <ejs-grid id="Grid" ref='grid' :dataSource='dataSource' :allowFiltering='true' :filterSettings='filteroption' height='270px' :dataStateChange="handleDataStateChange">
      <e-columns>
        <!--
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='EmployeeID' headerText='Employee Name' :dataSource='employeeData' foreignKeyValue='FirstName'
            :filter='filter' width=120></e-column>
          <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2' width=80></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=130></e-column>
        -->
        <e-column v-for="col in columns" :key="col.id" v-bind="col" />
      </e-columns>
    </ejs-grid>
    <h3 v-if="lastDataStateChangeArgs.where">Last dataStateChange args.where</h3>
    <pre v-if="lastDataStateChangeArgs.where"><code>{{ lastDataStateChangeArgs.where }}</code></pre>
  </div>
</template>

<script>
import { createElement } from '@syncfusion/ej2-base';
import { Edit, Toolbar, ForeignKey, Filter } from "@syncfusion/ej2-vue-grids";
import { MultiSelect, CheckBoxSelection } from "@syncfusion/ej2-dropdowns";
import { DataManager } from '@syncfusion/ej2-data';
import { data, fEmployeeData } from './datasource.js';

MultiSelect.Inject(CheckBoxSelection); // mandatory for `mode: 'CheckBox'`

let dropInstance;
let arr = [];

export default {
  data: () => {
    return {
      lastDataStateChangeArgs: {},
      dataSource: { count: 0, result: [] },
      columns: [],
      employeeData: fEmployeeData,
      filteroption: { type: 'Menu' },
      filter: {
        operator: "equal",
        ui: {
          create: (args) => {
            let flValInput = createElement('input', { className: 'flm-input' });
            args.target.appendChild(flValInput);
            args.target.parentElement.getElementsByClassName("e-flm_optrdiv")[0].hidden = true;
            args.target.parentElement.getElementsByClassName(
              "e-flmenu-valuediv"
            )[0].style.paddingTop = 0;
            dropInstance = new MultiSelect({
              dataSource: new DataManager(fEmployeeData),
              fields: { text: 'FirstName', value: 'EmployeeID' },
              placeholder: 'Select a value',
              popupHeight: '200px',
              mode: 'CheckBox',
              filterType: 'Equal',
            });
            dropInstance.appendTo(flValInput);
          },
          write: (/* args */) => {
            dropInstance.text = arr.toString() || '';
          },
          read: (args) => {
            // not working
            args.fltrObj.removeFilteredColsByField(args.column.field);

            // not working
            var grid = document.getElementById("Grid").ej2_instances[0];
            grid.removeFilteredColsByField(args.column.field);

            const values = dropInstance.value || [];
            arr = values.map((value) => dropInstance.getTextByValue(value));
            args.fltrObj.filterByColumn(args.column.field, args.operator, arr);
          },
        },
      },
    };
  },
  mounted() {
    this.columns = [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
      { field: 'EmployeeID', headerText: 'Employee Name', dataSource: this.employeeData, foreignKeyField: 'EmployeeID', foreignKeyValue: 'FirstName', filter: this.filter, width: 120 },
      { field: 'Freight', headerText: 'Freight', textAlign: 'Center', format: 'C2', width: 80 },
      { field: 'ShipCity', headerText: 'Ship City', width: 130 },
    ];
    this.dataSource = { count: 123, result: data };
  },
  methods: {
    handleDataStateChange(state) {
      this.lastDataStateChangeArgs = state;
      console.log('handleDataStateChange triggered with state:', state);
      console.log('pageState?.where', state?.where);
      // returning the same data as before
      this.dataSource = { ...this.dataSource };
    },
  },
  provide: {
    grid: [Filter, ForeignKey, Edit, Toolbar],
  },
};
</script>
