## $${\color{red}WPackagist \ Cheat \ Sheet}$$


**WPackagist** is a Composer repository that mirrors the official **WordPress.org** plugin and theme directories, allowing you to install WordPress plugins/themes via Composer.

Repository URL:

```
https://wpackagist.org
```

---

### 1. Setup in `composer.json`

Add repository:

```json
{
  "repositories": [
    {
      "type": "composer",
      "url": "https://wpackagist.org"
    }
  ]
}
```

---

### 2. Install Plugins via Composer

### Install plugin

```bash
composer require wpackagist-plugin/contact-form-7
```

Example:

```bash
composer require wpackagist-plugin/wordpress-seo
```

Plugin slug = same as WordPress.org slug.

---

### 3. Install Themes

```bash
composer require wpackagist-theme/twentytwentyfour
```

---

### 4. Install to Custom Directory (Recommended)

Use `composer/installers`:

```bash
composer require composer/installers
```

Configure:

```json
{
  "extra": {
    "installer-paths": {
      "wp-content/plugins/{$name}/": ["type:wordpress-plugin"],
      "wp-content/themes/{$name}/": ["type:wordpress-theme"]
    }
  }
}
```

---

### 5. Version Constraints

| Constraint   | Meaning             |
| ------------ | ------------------- |
| `^5.0`       | Compatible with 5.x |
| `~5.0.2`     | >=5.0.2 <5.1.0      |
| `5.0.*`      | Any patch version   |
| `dev-master` | Development branch  |

Example:

```bash
composer require wpackagist-plugin/woocommerce:^8.0
```

---

### 6. Remove Plugin

```bash
composer remove wpackagist-plugin/contact-form-7
```

---

### 7. Update Plugins

Update all:

```bash
composer update
```

Update single:

```bash
composer update wpackagist-plugin/wordpress-seo
```

---

### 8. Typical WordPress + WPackagist Structure

Often used with:

* **Bedrock**
* **Roots**
* **Trellis**

---

### 9. Production Best Practices

* Commit `composer.lock`
* Do NOT commit `vendor/`
* Use exact version constraints in production
* Deploy via `composer install --no-dev --prefer-dist`
* Use `.env` for environment configs

---

### 10. Quick Reference

| Action         | Command                                   |
| -------------- | ----------------------------------------- |
| Add repo       | Add wpackagist repo block                 |
| Install plugin | `composer require wpackagist-plugin/slug` |
| Install theme  | `composer require wpackagist-theme/slug`  |
| Remove         | `composer remove wpackagist-plugin/slug`  |
| Update         | `composer update`                         |

