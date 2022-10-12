import { shallowMount } from '@vue/test-utils';
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
import BasicList from '@/components/BasicList.vue';


describe('BasicList.vue', () => {
  const shallowMountComponent = params => {
    return shallowMount(BasicList, {
      ...params,
      stubs: ['ejs-grid', 'e-columns', 'e-column'],
    });
  };

  it('should provide tools to the grid', () => {
    expect(BasicList.provide).toEqual({
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
    });
  });

  it('should render as expected', async () => {
    const wrapper = shallowMountComponent({
      propsData: {
        columns: [{
          field: 'id',
          headerText: 'ID',
        }, {
          field: 'name',
          headerText: 'Name',
          foreignKeyField: 'foo',
          foreignKeyValue: 'bar',
        }],
        gridParams: {
          dataSource: [{ id: 1 }, { id: 2 }],
          toolbar: ['Add', 'Edit', 'Delete', 'Search', 'Print'],
        }
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should compute editSettings as expected', async () => {
    const editSettings = { allowEditing: true };
    const wrapper = shallowMountComponent({
      propsData: {
        columns: [],
        gridParams: {
          editSettings,
        },
      },
    });
    expect(wrapper.vm.innerEditSettings).toEqual({
      allowEditing: false,
      allowEditOnDblClick: false,
      allowAdding: false,
      allowDeleting: false,
      mode: 'Dialog',
      showDeleteConfirmDialog: true,
    });
    expect(wrapper.vm.computedEditSettings).toEqual({
      ...editSettings,
      ...wrapper.vm.computedEditSettings,
    });

    editSettings.allowDeleting = true;
    await wrapper.setProps({ editSettings });
    expect(wrapper.vm.computedEditSettings).toEqual({
      ...editSettings,
      ...wrapper.vm.computedEditSettings,
    });
  });

  it('should handleActionComplete correctly', async () => {
    const wrapper = shallowMountComponent({ propsData: { gridParams: {} } });
    const e = { dialog: {}, requestType: 'add' };
    wrapper.vm.handleActionComplete(e);
    expect(e.dialog.header).toBe('New Item');

    e.requestType = 'beginEdit';
    wrapper.vm.handleActionComplete(e);
    expect(e.dialog.header).toBe('Edit Item');


    const spyActionComplete = jest.fn();
    await wrapper.setProps({ gridParams: { actionComplete: spyActionComplete } });
    wrapper.vm.handleActionComplete(e);
    expect(spyActionComplete).toHaveBeenCalledWith(e);
  });

  it('should handleDataBound correctly', async () => {
    const wrapper = shallowMountComponent({ propsData: { gridParams: {} } });
    wrapper.vm.$refs.ejsGrid.autoFitColumns = jest.fn();

    wrapper.vm.handleDataBound();
    expect(wrapper.vm.$refs.ejsGrid.autoFitColumns).not.toHaveBeenCalled();

    await wrapper.setProps({ gridParams: { autoFitColumns: true } });
    wrapper.vm.handleDataBound();
    expect(wrapper.vm.$refs.ejsGrid.autoFitColumns).toHaveBeenCalledWith();
  });

  it('should handleQueryCellInfo correctly', async () => {
    const wrapper = shallowMountComponent({ propsData: { gridParams: {} } });
    wrapper.vm.$obfuscate = { obfuscate: jest.fn() };

    wrapper.vm.handleQueryCellInfo({ column: { obfuscate: false } });
    expect(wrapper.vm.$obfuscate.obfuscate).not.toHaveBeenCalled();

    const e = { cell: 'aaa', column: { obfuscate: true } };
    wrapper.vm.handleQueryCellInfo(e);
    expect(wrapper.vm.$obfuscate.obfuscate).toHaveBeenCalledWith(e.cell);


    const spyQueryCellInfo = jest.fn();
    await wrapper.setProps({ gridParams: { queryCellInfo: spyQueryCellInfo } });
    wrapper.vm.handleQueryCellInfo(e);
    expect(spyQueryCellInfo).toHaveBeenCalledWith(e);
  });

  it('should handleRowSelected correctly', async () => {
    const wrapper = shallowMountComponent({ propsData: { gridParams: {} } });
    let e = { data: {} };

    // disallow editing and deleting without explicit configuration
    wrapper.vm.handleRowSelected(e);
    expect(wrapper.vm.$data.innerEditSettings.allowEditing).toBe(false);
    expect(wrapper.vm.$data.innerEditSettings.allowEditOnDblClick).toBe(false);
    expect(wrapper.vm.$data.innerEditSettings.allowDeleting).toBe(false);

    // allow editing and deleting with explicit configuration in row data permissions
    e = { data: { id: 1, permissions: { change: true, delete: true } } };
    wrapper.vm.handleRowSelected(e);
    expect(wrapper.vm.$data.innerEditSettings.allowEditing).toBe(true);
    expect(wrapper.vm.$data.innerEditSettings.allowEditOnDblClick).toBe(true);
    expect(wrapper.vm.$data.innerEditSettings.allowDeleting).toBe(true);

    // disallow editing and deleting with explicit configuration in props
    await wrapper.setProps({ gridParams: { editSettings: { allowEditing: false, allowEditOnDblClick: false, allowDeleting: false } } });
    wrapper.vm.handleRowSelected(e);
    expect(wrapper.vm.$data.innerEditSettings.allowEditing).toBe(false);
    expect(wrapper.vm.$data.innerEditSettings.allowEditOnDblClick).toBe(false);
    expect(wrapper.vm.$data.innerEditSettings.allowDeleting).toBe(false);

    // allow editing with explicit configuration in props
    await wrapper.setProps({ gridParams: { editSettings: { allowEditing: true, allowEditOnDblClick: true, allowDeleting: false } } });
    wrapper.vm.handleRowSelected(e);
    expect(wrapper.vm.$data.innerEditSettings.allowEditing).toBe(true);
    expect(wrapper.vm.$data.innerEditSettings.allowEditOnDblClick).toBe(true);
    expect(wrapper.vm.$data.innerEditSettings.allowDeleting).toBe(false);

    const spyRowSelected = jest.fn();
    await wrapper.setProps({ gridParams: { rowSelected: spyRowSelected } });
    wrapper.vm.handleRowSelected(e);
    expect(spyRowSelected).toHaveBeenCalledWith(e);
  });
});
