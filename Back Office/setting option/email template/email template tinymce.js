tinymce.init({
  selector: "#email-message-body", // Target textarea

  // Plugins for fonts, colors, and text formatting
  plugins:
    "advlist autolink link image lists charmap print preview anchor code textcolor fontselect",

  // Toolbar configuration with font style, size, and color options directly on the toolbar
  toolbar:
    "undo redo | fontselect fontsizeselect | forecolor backcolor | styleselect | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent | bullist numlist | link image",

  menubar: "file edit view insert format tools table", // Optional menubar

  // Enable browser spellcheck and paste image settings
  browser_spellcheck: true,
  paste_data_images: true,

  // Font formats and sizes
  font_formats:
    "Arial=arial,helvetica,sans-serif; Times New Roman='Times New Roman',times; Verdana=verdana,geneva; Courier New=courier new,courier,monospace; Comic Sans MS='Comic Sans MS',sans-serif; Georgia=georgia,serif",
  fontsize_formats: "8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt", // Font sizes to display in the toolbar
});
