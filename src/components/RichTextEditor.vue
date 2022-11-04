<template>
  <div>
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
    onClick() {
      console.log('onClick', this.$refs.defaultRTE)
    },
  },
}
</script>