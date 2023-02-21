<template>
  <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :filterSettings='filteroption' height='270px' :dataStateChange="handleDataStateChange">
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
      <e-column field='EmployeeID' headerText='Employee Name' :dataSource='employeeData' foreignKeyValue='FirstName'
        :filter='filter' width=120></e-column>
      <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2' width=80></e-column>
      <e-column field='ShipCity' headerText='Ship City' width=130></e-column>
    </e-columns>
  </ejs-grid>
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
      data: { count: 123, result: data },
      employeeData: fEmployeeData,
      filteroption: { type: 'Menu' },
      filter: {
        operator: "equal",
        ui: {
          create: (args) => {
            let flValInput = createElement('input', { className: 'flm-input' });
            args.target.appendChild(flValInput);
            args.target.parentElement.getElementsByClassName("e-flm_optrdiv")[0].remove();
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
            const values = dropInstance.value || [];
            arr = values.map((value) => dropInstance.getTextByValue(value));
            args.fltrObj.filterByColumn(args.column.field, args.operator, arr);
          },
        },
      },
    };
  },
  methods: {
    handleDataStateChange(state) {
      console.log('handleDataStateChange triggered with state:', state);
      console.log('pageState?.where', state?.where);
      // returning the same data as before
      this.data = { ...this.data };
    },
  },
  provide: {
    grid: [Filter, ForeignKey, Edit, Toolbar],
  },
};
</script>
