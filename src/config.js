const config = {
    toolbarButtons: {
      moreText: { buttons: ["bold", "italic", "underline"] },
      moreParagraph: {
        buttons: [
          "paragraphStyle",
          "backgroundColor",
          "alignLeft",
          "alignCenter",
          "formatOLSimple",
          "alignRight",
          "alignJustify",
          "formatOL",
          "formatUL",
        ],
        buttonsVisible: 2,
      },
      moreRich: {
        buttons: [
          "insertTable",
          "insertHR",
          "insertImage",
          "insertVideo",
          "insertLink",
          "wirisEditor",
          "wirisChemistry",
          "embed",
        ],
        buttonsVisible: 0,
      },
    },
    // Colors
    colorsBackground: [
      "#15E67F",
      "#E3DE8C",
      "#D8A076",
      "#D83762",
      "#76B6D8",
      "REMOVE",
    ],
    colorsStep: 6,
  };
  
  export default config;
  