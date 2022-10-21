<template>
  <div>
    <ejs-grid
      ref="ejsGrid"
      :data-bound="handleDataBound"
      v-bind="gridParams"
      :action-complete="handleActionComplete"
      :edit-settings="computedEditSettings"
      :query-cell-info="handleQueryCellInfo"
      :row-selected="handleRowSelected"
      :toolbar="[]"
    >
      <e-columns>
        <e-column
          v-for="col in columns"
          :key="col.id"
          :foreign-key-field="col.foreignKeyField || 'id'"
          :foreign-key-value="col.foreignKeyValue || 'name'"
          v-bind="col"
        />
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import {
  DetailRow,
  Edit,
  Filter,
  ForeignKey,
  // Group,
  Page,
  // Reorder,
  Resize,
  Sort,
  Toolbar,
} from '@syncfusion/ej2-vue-grids';

export default {
  name: 'BasicList',
  provide: {
    grid: [
      DetailRow,
      Edit,
      Filter,
      ForeignKey,
      // Group,
      Page,
      // Reorder,
      Resize,
      Sort,
      Toolbar,
    ],
  },
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    gridParams: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      innerEditSettings: {
        allowEditing: false,
        allowEditOnDblClick: false,
        allowAdding: false,
        allowDeleting: false,
        mode: 'Dialog',
        showDeleteConfirmDialog: true,
      },
    };
  },
  computed: {
    computedEditSettings() {
      return {
        ...this.gridParams?.editSettings,
        ...this.innerEditSettings,
      };
    },
  },
  methods: {
    handleActionComplete(e) {
      /* istanbul ignore else */
      if (e.requestType === 'add') {
        e.dialog.header = 'New Item';
      } else if (e.requestType === 'beginEdit') {
        e.dialog.header = 'Edit Item';
      }
      if (this.gridParams.actionComplete) {
        this.gridParams.actionComplete(e);
      }
    },
    handleDataBound() {
      if (this.gridParams.autoFitColumns) {
        this.$refs.ejsGrid.autoFitColumns();
      }
    },
    handleQueryCellInfo(e) {
      if (e.column.obfuscate) {
        this.$obfuscate.obfuscate(e.cell);
      }
      if (this.gridParams.queryCellInfo) {
        this.gridParams.queryCellInfo(e);
      }
    },
    handleRowSelected (e) {
      if (e.data.id) {
        this.innerEditSettings = {
          ...this.innerEditSettings,
          allowEditing: this.gridParams.editSettings?.allowEditing ?? e.data?.permissions?.change,
          allowEditOnDblClick: this.gridParams.editSettings?.allowEditOnDblClick ?? e.data?.permissions?.change,
          allowDeleting: this.gridParams.editSettings?.allowDeleting ?? e.data?.permissions?.delete,
        };
      }
      if (this.gridParams.rowSelected) {
        this.gridParams.rowSelected(e);
      }
    },
  },
};
</script>
