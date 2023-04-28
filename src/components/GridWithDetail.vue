<template>
  <div>
    <ejs-grid :dataSource="data" :detailTemplate='detailTemplate'>
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' width='125' textAlign='Right'></e-column>
        <e-column field='FirstName' headerText='Name' width='120'></e-column>
        <e-column field='Title' headerText='Title' width='170'></e-column>
        <e-column field='HireDate' headerText='Hire Date' width='135' textAlign='Right' format='yMd'></e-column>
        <e-column field='ReportsTo' headerText='Reports To' width='120' textAlign='Right'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import Vue from "vue";
import { GridPlugin, DetailRow } from "@syncfusion/ej2-vue-grids";
import { fEmployeeData } from "./datasource.js";
import DetailTemplate from "./DetailTemplate.vue";

Vue.use(GridPlugin);

console.log(fEmployeeData)

export default {
  data: () => {
    return {
      data: fEmployeeData,
      detailTemplate: function () {
        return {
          template: {
            extends: DetailTemplate,
          },
        }
      }
    };
  },
  provide: {
    grid: [DetailRow]
  }
}
</script>
