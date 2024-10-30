(function () {
  "use strict";

  /**
   * All of the code for your admin-facing JavaScript source
   * should reside in this file.
   *
   * Note: It has been assumed you will write jQuery code here, so the
   * $ function reference has been prepared for usage within the scope
   * of this function.
   *
   * This enables you to define handlers, for when the DOM is ready:
   *
   * $(function() {
   *
   * });
   *
   * When the window is loaded:
   *
   * $( window ).load(function() {
   *
   * });
   *
   * ...and/or other possibilities.
   *
   * Ideally, it is not considered best practise to attach more than a
   * single DOM-ready or window-load handler for a particular page.
   * Although scripts in the WordPress core, Plugins and Themes may be
   * practising this, we should strive to set a better example in our own work.
   */

  function toggleInputs(enabled) {
    const element = document.getElementById("lc_text-widget--submit");
    if (!!element) {
      if (enabled) {
        element.value = "Pull and Save";
      } else {
        element.value = "Save";
      }
    }
  }

  window.addEventListener("load", function () {
    var enabledTextWidgetCheckBox = document.querySelector(
      "#lead_connector_setting_enable_text_widget"
    );
    if (!!enabledTextWidgetCheckBox) {
      toggleInputs(enabledTextWidgetCheckBox.checked ? true : false);

      enabledTextWidgetCheckBox.addEventListener(
        "change",
        function () {
          toggleInputs(enabledTextWidgetCheckBox.checked ? true : false);
        },
        false
      );
    }
  });
})();
