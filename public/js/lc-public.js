(function () {
  "use strict";

  /**
   * All of the code for your public-facing JavaScript source
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
  window.addEventListener("load", function () {
    function camelCaseToDash(myStr) {
      return myStr.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }

    if (
      !lc_public_js ||
      !lc_public_js.text_widget_location_id ||
      lc_public_js.text_widget_error == "1"
    ) {
      console.error(
        "invalid API key or location ID, please provide correct API key and resave it under LeadConnector setting menu"
      );
      return;
    }

    var textWidget = document.createElement("chat-widget");
    textWidget.setAttribute(
      "location-id",
      lc_public_js.text_widget_location_id
    );
    if (
      !!lc_public_js.text_widget_settings &&
      !!(lc_public_js.text_widget_settings instanceof Object)
    ) {
      var textWidgetSettings = lc_public_js.text_widget_settings;
      var allAttrs = Object.keys(textWidgetSettings);

      for (var attrIndex = allAttrs.length - 1; attrIndex >= 0; attrIndex--) {
        try {
          var attributeName = allAttrs[attrIndex];
          attributeName = camelCaseToDash(attributeName);
          var attributeValue = textWidgetSettings[allAttrs[attrIndex]];
          if ("widget-primary-color" === attributeName) {
            attributeName = "style";
            attributeValue =
              "--chat-widget-primary-color:" +
              attributeValue +
              "; --chat-widget-active-color:" +
              attributeValue +
              " ;--chat-widget-bubble-color: " +
              attributeValue;
          }
        } catch (e) {
          console.log(e, "Fail to parse settings");
          continue;
        }

        textWidget.setAttribute(attributeName, attributeValue);
      }
    } else {
      if (!!lc_public_js.text_widget_heading) {
        textWidget.setAttribute("heading", lc_public_js.text_widget_heading);
      }
      if (!!lc_public_js.text_widget_sub_heading) {
        textWidget.setAttribute(
          "sub-heading",
          lc_public_js.text_widget_sub_heading
        );
      }
      textWidget.setAttribute(
        "use-email-field",
        lc_public_js.text_widget_use_email_field == "1" ? "true" : "false"
      );
    }

    document.body.appendChild(textWidget);

    if (!!lc_public_js.text_widget_cdn_base_url) {
      setTimeout(() => {
        if (!window.leadConnector || !window.leadConnector.chatWidget) {
          try {
            var moduleScript = document.createElement("script");
            var cdnURL = lc_public_js.text_widget_cdn_base_url;
            moduleScript.src = cdnURL + "loader.js";
            moduleScript.setAttribute(
              "data-cdn-url",
              cdnURL.replace(/\/$/, "")
            );
            document.body.appendChild(moduleScript);
          } catch (err) {
            console.warn(err);
          }
        }
      }, 10 * 1000);
    }
  });
})();
