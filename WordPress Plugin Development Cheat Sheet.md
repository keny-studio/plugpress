## $${\color{red}WordPress \ Plugin \ Development \ Cheat \ Sheet}$$

## 📁 Plugin Structure

```txt
my-plugin/
├── my-plugin.php
├── uninstall.php
├── readme.txt
├── assets/
│   ├── css/
│   └── js/
├── includes/
│   ├── class-plugin.php
│   └── helpers.php
└── languages/
```

---

## 🔌 Plugin Header

```php
<?php
/**
 * Plugin Name: My Plugin
 * Plugin URI: https://example.com
 * Description: Short plugin description.
 * Version: 1.0.0
 * Author: Your Name
 * Author URI: https://example.com
 * Text Domain: my-plugin
 * Domain Path: /languages
 */
```

---

## 🚀 Plugin Initialization

```php
defined( 'ABSPATH' ) || exit;

require_once plugin_dir_path( __FILE__ ) . 'includes/class-plugin.php';

function my_plugin_init() {
    new My_Plugin();
}
add_action( 'plugins_loaded', 'my_plugin_init' );
```

---

## 🪝 Hooks (Actions & Filters)

### Action Hook

```php
add_action( 'init', 'my_plugin_init_function' );
```

### Filter Hook

```php
add_filter( 'the_content', 'my_plugin_modify_content' );
```

---

## 🧠 OOP Plugin Pattern

```php
class My_Plugin {
    public function __construct() {
        add_action( 'init', [ $this, 'init' ] );
    }

    public function init() {
        // Plugin logic
    }
}
```

---

## ⚙️ Activation / Deactivation

```php
register_activation_hook( __FILE__, 'my_plugin_activate' );
register_deactivation_hook( __FILE__, 'my_plugin_deactivate' );

function my_plugin_activate() {
    // Setup
}
```

---

## 🧼 Uninstall Hook

```php
// uninstall.php
defined( 'WP_UNINSTALL_PLUGIN' ) || exit;
delete_option( 'my_plugin_option' );
```

---

## 🗄️ Options & Settings API

```php
add_option( 'my_plugin_option', 'default' );
update_option( 'my_plugin_option', 'value' );
$value = get_option( 'my_plugin_option' );
```

---

## 🧩 Admin Menu

```php
add_action( 'admin_menu', function () {
    add_menu_page(
        'My Plugin',
        'My Plugin',
        'manage_options',
        'my-plugin',
        'my_plugin_admin_page'
    );
});
```

---

## 🖥️ Admin Page

```php
function my_plugin_admin_page() {
    ?>
    <div class="wrap">
        <h1>My Plugin</h1>
    </div>
    <?php
}
```

---

## 📦 Enqueue Scripts & Styles

```php
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'my-plugin-css',
        plugin_dir_url( __FILE__ ) . 'assets/css/style.css'
    );
});
```

---

## 🔐 Security Best Practices

### Nonce

```php
wp_nonce_field( 'my_action', 'my_nonce' );
check_admin_referer( 'my_action', 'my_nonce' );
```

### Sanitization

```php
sanitize_text_field( $_POST['name'] );
esc_html( $output );
```

---

## 🔄 AJAX

```php
add_action( 'wp_ajax_my_action', 'my_ajax_handler' );

function my_ajax_handler() {
    wp_send_json_success( 'OK' );
}
```

---

## 🧱 Custom Post Type

```php
register_post_type( 'book', [
    'label' => 'Books',
    'public' => true,
] );
```

---

## 🧩 Shortcode

```php
add_shortcode( 'my_shortcode', function () {
    return 'Hello World';
});
```

---

## 🌍 Internationalization (i18n)

```php
load_plugin_textdomain(
    'my-plugin',
    false,
    dirname( plugin_basename( __FILE__ ) ) . '/languages'
);
```

---

## 🧪 Debugging

```php
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
```

---

## 📜 REST API Endpoint

```php
add_action( 'rest_api_init', function () {
    register_rest_route( 'my-plugin/v1', '/data', [
        'methods'  => 'GET',
        'callback' => 'my_rest_callback',
    ]);
});
```

---

## 🧠 Common Best Practices

* Prefix everything (`plugin_name_`)
* Use OOP for medium/large plugins
* Escape output, sanitize input
* Never modify core files
