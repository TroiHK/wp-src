## Requirements

Your database **should** be the exact copy of the production.

Export using command line :

- Export : `mysqldump -u` USER `-p` DB_NAME `-r utf8.dump.sql --default-character-set=utf8mb4`
- Import : `mysql -u` USER `-p --default-character-set=utf8mb4` DB_NAME `< utf8.dump.sql`

Alternatives :

- [PhpMyAdmin](https://www.phpmyadmin.net/)
- [WP Migrate DB](https://fr.wordpress.org/plugins/wp-migrate-db/)

#### The project has been set up using these versions :

- **PHP** : 7.2.1
- **MySql** : 5.7
- **Yarn** : 1.6.0
- **Node** : 9.11.1
- **Gulp** : 3.9.1

## Frontend Boilerplate Documentation

[Read full documentation](./gulp-includes/core/doc/readme.md)

## Installation

#### CD into your project folder and clone this repo (or download as .zip) :

- `cd folder/my-folder/`
- `git clone GIT_URL_HERE .`

#### Run the following commands :

- `yarn install` : Installs frontend-boilerplate's dependencies (add --no-bin-links if on VirtualBox)
- `gulp favicon` : Generates all favicon files
- `gulp` : Generates theme's assets (CSS, JS) and .gitignore based on generated assets.
- `php wp-cli.phar cli update --stable --yes` : Update WP-CLI

**Install WordPress files**

- `php wp-cli.phar core download --path=./public_html/ --locale=fr_FR --version=latest --skip-content --allow-root`

**Generate configuration file**

- `php wp-cli.phar config create --dbname=`YOUR_DB_NAME `--dbuser=`YOUR_DB_USER `--dbhost=`YOUR_DB_HOST `--dbprefix=jmwjf_ --skip-check --path=./public_html/ --prompt=dbpass --allow-root`

**Install languages**

- `php wp-cli.phar language core install fr_FR --activate --path=./public_html/ --allow-root`

#### Manually replace tokens in wp-config.php :

```php
define( 'AUTH_KEY',         'Kjh<4zfA<>KZ)s7O/&T&6eI-po^[%@^dI%-r8$^l5O5I.$&C|{BdetJn9YJY?2Wm' );
define( 'SECURE_AUTH_KEY',  '=z+j=J+3}Os*9JwvYBn$wAWR.!&M>?^6_pt,HAj>~z_0=og/mfe]u|=&A_C1v`X-' );
define( 'LOGGED_IN_KEY',    '{VzSc) tk(R0R0iNS*M~4w;~5 g_f~q/R@=:s % L&we=n.*gQBA@cVKc2HEu==6' );
define( 'NONCE_KEY',        'a;y*H4cmZ1Bbdm OBE5nQUt((jfc]GU*{j3e5IF/R@DHFNo72@G1D)T#+I%i0m. ' );
define( 'AUTH_SALT',        'I>Dp$B}1h3r+_Q8#GA$I}1l+yY<91q!Kpq9P:, 6k*CpX7cG`Rg6<RN!(8kxz:x{' );
define( 'SECURE_AUTH_SALT', '9k[$NdW-)dU)$):g{jk#*[w@ng*4[@qOSOyD[qldXO<z{]T{B-LNF)(Q~P]qF}8-' );
define( 'LOGGED_IN_SALT',   'd~V$Pa$m?VeLAama{o?uq&Yjrf7u?M2@<P6%E|vN&/L#V%IW)wRURO:qR^}ql/G)' );
define( 'NONCE_SALT',       '*g~P6@v/>&q##;/<:w157nI!R-.^5`gh0g]n++-i8yL Ey>g/L)xs-s@FkE}_H)+' );
```

#### Add the following code at the BEGINNING of wp-config.php :

```php
umask( 0022 );
```

### Run the following commands :

#### Define global constants in wp-config.php

- `php wp-cli.phar config set WP_CACHE true --raw --type=constant --path=./public_html/ --allow-root`
- `php wp-cli.phar config set WPCACHEHOME` /absolute/path/to/project/public_html/wp-content/plugins/wp-super-cache/ `--type=constant --path=./public_html/ --allow-root`

#### Replace old URLS

- `php wp-cli.phar search-replace` /absolute/path/to/old/root /absolute/path/to/new/root `--precise --path=./public_html/ --allow-root`
- `php wp-cli.phar search-replace` old-url.com new-url.com `--precise --path=./public_html/ --allow-root`

#### Install plugins

- `php wp-cli.phar plugin install advanced-custom-fields --version=5.6.9 --activate --path=./public_html/ --allow-root` replaced by `ACF pro`
- `php wp-cli.phar plugin install wordpress-seo --activate --path=./public_html/ --allow-root`
- `php wp-cli.phar plugin install $(<plugin-slugs.txt) --path=./public_html/ --allow-root`

#### Install WP-CLI Packages

- `php wp-cli.phar package install wp-cli/wp-super-cache-cli --path=./public_html/ --allow-root`

#### Update everything

- `php wp-cli.phar core update --locale=fr_FR  --path=./public_html/ --allow-root`
- `php wp-cli.phar plugin update --all --path=./public_html/ --allow-root`
- `php wp-cli.phar package update --path=./public_html/ --allow-root`
- `php wp-cli.phar language core update --path=./public_html/ --allow-root`

#### Database repair/optimisations

- `php wp-cli.phar db repair --path=./public_html/ --allow-root`
- `php wp-cli.phar db optimize --path=./public_html/ --allow-root`

#### Medias & Uploads

Download latest medias (from remote server using FTP client for example). *public_html/wp-content/uploads/*

#### Generate missing images sizes

- `php wp-cli.phar media regenerate --skip-delete --only-missing --yes --path=./public_html/ --allow-root`

- Visit *http://website.com/wp-admin/options-general.php?page=wpsupercache* to regenerate 
*public_html/wp-content/wp-cache-config.php* : enable cache and the reload page. Then disable cache if you don't need
 it. If you need cache, you must reconfigure the plugin settings.

- Visit *http://website.com/wp-admin/options-permalink.php* and change permalink structure then revent to %postname%. This will regenerate the .htaccess file.

# Maintenance

**Update outdated NPM dependencies :**

`yarn upgrade-interactive --latest`

**Update WP-CLI :**

`php wp-cli.phar cli update --stable --yes`

**Update WordPress :**

`php wp-cli.phar core update --locale=fr_FR  --path=./public_html/  --allow-root`

**Update Plugins :**

`php wp-cli.phar plugin update --all --path=./public_html/ --allow-root`

**Update Translations :**

`php wp-cli.phar language core update --path=./public_html/ --allow-root`

**Update WP-CLI Packages :**

- `php wp-cli.phar package update --path=./public_html/ --allow-root`

**Regenerate missing images sizes :**

`php wp-cli.phar media regenerate --skip-delete --only-missing --yes --path=./public_html/ --allow-root`


## Deploys Documentation

#### Init Git

Connect the root folder of site and using command line :

- `git init`
- `git remote add origin GIT_URL_HERE`

#### Export/Import database

Export database [here](staging-site)
- Browser login: user/pass
- Admin login: user/pass
- Replace URL and file path(http://prntscr.com/kisd9i)

Import using command line :
- Import : `mysql -u` USER `-p ` DB_NAME `< export-database.sql`

#### Install WordPress files

- `php wp-cli.phar core download --path=./public_html/ --locale=fr_FR --version=latest --skip-content --allow-root`

#### Generate configuration file

- `php wp-cli.phar config create --dbname=`YOUR_DB_NAME `--dbuser=`YOUR_DB_USER `--dbhost=`YOUR_DB_HOST `--dbprefix=apf_ --skip-check --path=./public_html/ --prompt=dbpass --allow-root`

#### Add the following code at the BEGINNING of `public_html/wp-config.php` :

```php
umask( 0022 );
```

#### Install plugins

- `php wp-cli.phar plugin install $(<plugin-slugs.txt) --path=./public_html/ --allow-root`

#### Extract wp-content files

Connect the root folder of site, then go to the `public_html/wp-content`  and extract `wp-content.zip` file.

#### Update the permalink

Go to your-site.com/wp-admin/options-permalink.php(user/pass) and click `Enregistrer les modifications`.