=== LeadConnector ===
link: https://www.leadconnectorhq.com
Tags: crm, lead connector
Requires at least: 5.0
Tested up to: 6.5.3
Requires PHP: 5.6
Stable tag: 1.9
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

LeadConnector: It helps you to add the LeadConnector chat widget  and the LeadConnector funnel pages to your WordPress website.

== Description ==

The LeadConnector plugin helps you install the text to chat widget to your wordpress website to drive better conversions. It will also allow you to embed LeadConnector funnel pages to your WordPress website which will help you capture your visitor information like email and phone and make sure you do not miss out on any leads.

== Installation ==

= Minimum Requirements =

* WordPress 5.0 or greater
* PHP version 5.6 or greater

= We recommend your host supports: =

* WordPress 5.5.3 or greater
* PHP version 7.4.9 or greater
* WordPress Memory limit of 64 MB or greater (128 MB or higher is preferred)


= Installation =

1. Install using the WordPress built-in Plugin installer, or Extract the zip file and drop the contents in the `wp-content/plugins/` directory of your WordPress installation.
2. Activate the plugin through the 'Plugins' menu in WordPress(This will add new Menu in admin panel's side menu name `Lead Connector`).
3. Go to Menu > Lead Connector
4. It will open a new page which will ask you to provide API key for one of your locations and allow you to enable the widgets

== Screenshots ==

1. This is how the plugin looks once enabled.
2. You need to copy in your API key from your location, enable the chat widget.
3. Preview of the chat widget installed on the website.
4. Add and Edit your funnel's steps as WordPress pages 
5. View and Manage All Your Pages

== Changelog ==
= 1.9- 2024-06-13 =
* General Fix: Warnings and Errors
* Tracking code: Allowed noscript tag

= 1.8- 2024-04-23 =
* Security Updates

= 1.7- 2022-02-18 =
* Choose Favicon: New option to use wordpress site's default favicon for funnel.

= 1.6- 2021-11-09 =
* Present correct error if account's Permalinks set to plain
* Made the plugin compatible with other plugins which stop `chat-widget` installations

= 1.5- 2021-05-28 =
* Bug fix: Now, the tracking code will work from both funnel and its step level
* Bug fix: Plugin CSS will not conflict with other plugins CSS  

= 1.4- 2021-04-27 =
* Tracking code support: The tracking code in the funnel can be published in the WordPress post
* Chat-Widget: Theme color support
* Chat-Widget: Compatibility with third-party plugins
* Bug fixes: Non-Ascii char support in meta tags

= 1.3 - 2021-04-09 =
* Bug fix: Published funnel page not working if the domain is not connected 

= 1.2 - 2021-03-22 =
* Bug fixes

= 1.1 - 2021-03-16 =
* SEO metadata support: SEO metadata associated with funnel will also be available to the WordPress page

= 1.0 - 2021-03-08 =
* Funnel Integration: You can import your funnels from LeadConnector CRM and publish them as wordpress Page
* A New look feel to the Lead-Connector setting page

= 0.5.0 - 2021-02-28 =
* Privacy policy update 

= 0.4.0 - 2021-02-10 =
* Latest chat-widget integration 
* Now, the Plugin will fetch the latest settings from your account

= 0.3.0 - 2020-12-17 =
* Fix: Remove dependency from jQuery Migrate script

= 0.2.0 - 2020-12-9 =
* Introduced `use email field` checkbox under text-widget settings to show hide email input field in text widget

= 0.1.0 - 2020-11-30 =
* Initial Public Beta Release



= Third Party Services =

This plugin connects you to the [`LeadConnector`](https://www.leadconnectorhq.com/) CRM through the [APIs](https://rest.leadconnectorhq.com/') and [scripts](https://widgets.leadconnectorhq.com/loader.js) 
to render the widgets and generate leads from your website.
In order to use the APIs, this plugin requires you to provide the API key from your LeadConnector Account.
In order to use this plugin, it is highly recommended to read `LeadConnector's` [privacy-policy](https://www.leadconnectorhq.com/policy) and [Terms of Service](https://www.leadconnectorhq.com/terms2)