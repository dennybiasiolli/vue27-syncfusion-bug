<template>
  <div>
    <ejs-button>Button</ejs-button>
    <ejs-richtexteditor
      ref="defaultRTE"
      v-model="value"
      :height="400"
      :toolbar-settings="toolbarSettings"
    >
    </ejs-richtexteditor>
    <span>{{ value }}</span>
    <span v-html="value"></span>
  </div>
</template>

<script>
import { Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table } from "@syncfusion/ej2-vue-richtexteditor";

export default {
  provide: {
    richtexteditor: [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table]
  },
  data() {
    return {
      toolbarSettings: {
        items: [
          'Bold', 'Italic', 'Underline', '|',
          'Formats', 'Alignments', 'OrderedList', 'UnorderedList', '|',
          'CreateTable', '|',
          'CreateLink', 'Image', '|',
          {
            tooltipText: 'Insert Symbol 1',
            undo: true,
            click: () => this.onClick('{{ foo-bar }}'),
            template: '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar"  style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;">&#9312;</div></button>'
          },
          {
            tooltipText: 'Insert Symbol 2',
            undo: true,
            click: () => this.onClick('<FooBar />'),
            template: '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar"  style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;">&#9313;</div></button>'
          },
          '|',
          'SourceCode', 'Undo', 'Redo', '|',
          'ClearFormat',
        ],
      },
      value: `
      <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user
        experience to create and update the content.Users can format their content using standard toolbar commands.</p>
      <p><b>Key features:</b></p>
      <ul>
        <li>
          <p>Provides IFRAME and DIV modes</p>
        </li>
        <li>
          <p>Capable of handling markdown editing.</p>
        </li>
        <li>
          <p>Contains a modular library to load the necessary functionality on demand.</p>
        </li>
        <li>
          <p>Provides a fully customizable toolbar.</p>
        </li>
        <li>
          <p>Provides HTML view to edit the source directly for developers.</p>
        </li>
        <li>
          <p>Supports third-party library integration.</p>
        </li>
        <li>
          <p>Allows preview of modified content before saving it.</p>
        </li>
        <li>
          <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>
        </li>
        <li>
          <p>Contains undo/redo manager.</p>
        </li>
        <li>
          <p>Creates bulleted and numbered lists.</p>
        </li>
      </ul>`,
    };
  },
  methods: {
    onClick(strSymbol) {
      this.$refs.defaultRTE.ej2Instances.executeCommand('insertText', strSymbol, {undo: true});
    },
  },
}
</script>