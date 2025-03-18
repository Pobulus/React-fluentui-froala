import React, { useState, useEffect, useRef } from "react";

// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditorComponent from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg";

const EditorComponent = () => {
  const [value, setValue] = useState("test");
  const editorRef = useRef(null);

  const config = {
    fullPage: true,
    iframe: true,
    // events: {
    //     mouseup: function (e) {
    //         console.log('res')
    //         e.stopPropagation();
    //         const editor = this;
    //         console.log(this)
    //         if (editor.$el.hasClass("fr-resizing")) {
    //             console.log('resizing')
    //           editor.table.refresh();
    //           editor.toolbar.enable();
    //           editor.$el.removeClass("fr-resizing");
    //           editor.events.focus();
    //         }
    //     },
    // },
  };

  return (
    <div className="main-editor-container">
      <FroalaEditorComponent
        ref={editorRef}
        tag="textarea"
        config={config}
        onModelChange={setValue}
      />
    </div>
  );
};

export default EditorComponent;
