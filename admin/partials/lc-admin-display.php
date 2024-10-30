<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    LeadConnector
 * @subpackage LeadConnector/admin/partials
 */

?>
<?php

function lead_connector_render_plugin_settings_page()
{
    $options = get_option(LEAD_CONNECTOR_OPTION_NAME);
    $enabled_text_widget = 0;
    $api_key = "";
    $text_widget_error = "0";
    $error_details = '';
    $warning_msg = "";

    if (isset($options[lead_connector_constants\lc_options_enable_text_widget])) {
        $enabled_text_widget = esc_attr($options[lead_connector_constants\lc_options_enable_text_widget]);
    }

    if (isset($options[lead_connector_constants\lc_options_api_key])) {
        $api_key = esc_attr($options[lead_connector_constants\lc_options_api_key]);
    }

    if (isset($options[lead_connector_constants\lc_options_text_widget_error])) {
        $text_widget_error = esc_attr($options[lead_connector_constants\lc_options_text_widget_error]);
    }

    if (isset($options[lead_connector_constants\lc_options_text_widget_error_details])) {
        $error_details = esc_attr($options[lead_connector_constants\lc_options_text_widget_error_details]);
    }
    if (isset($options[lead_connector_constants\lc_options_text_widget_warning_text])) {
        $warning_msg = esc_attr($options[lead_connector_constants\lc_options_text_widget_warning_text]);
    }

    $ui_setting = wp_json_encode(array(
        'enable_text_widget' => $enabled_text_widget,
        'api_key' => base64_encode($api_key),
        'text_widget_error' => $text_widget_error,
        'warning_msg' => $warning_msg,
    ));

    ?>
    <form action="options.php" method="post">
        <?php
settings_fields(LEAD_CONNECTOR_OPTION_NAME);
    do_settings_sections('lead_connector_plugin');?>
        <div id="lead-connecter-settings-holder" data-settings="<?php esc_attr($ui_setting);?>"></div>
    </form>
    <div id="app" data-enable_text_widget="<?php esc_attr($enabled_text_widget);?>"></div>
    <?php
}

function lead_connector_section_text()
{
    // echo '<p>' . __('Here you can set all the options for using the Chat Widget', 'LeadConnector') . '</p>';
}

function lead_connector_section_text1()
{
    echo '';
}
