/*
 * @file
 *
 * - gulp wordpressify
 *
 * Transforms the entire project into a ready to use Wordpress project. Irreversible.
 *
 */

const clean = require('./lib/clean'),
    check = require('./lib/check-scss'),
    confirm = require('confirm-simple'),
    log = require('fancy-log');

module.exports = function (done) {
    if (global.wordpress) {
        log.error('EROOR: The /wordpress/ folder already exists.');
        done();
        process.exit(0);
    } else {
        confirm('You are about to transform the entire project into a ready to use WordPress project. This is irreversible. Continue ?', function (y) {
            if (y) {
                clean.clean(function () {
                    check.check(false, function (success) {
                        if (success) {

                        } else {
                            log.error('You have uncompliant SASS code. Run \'gulp check-scss\' and fix the issue(s) first.');
                            done();
                            process.exit(0);
                        }
                    });
                });
            } else {
                process.exit(0);
            }
        });
    }
};


// Gulp check scss
// Gulp check js


// Création wordpress
//     1) Télécharger wordpress
//     2) Exclure certains fichiers de la copie
//     3) Checker conflits
//     4) Copier
// Installation wordpress (arguments : base de données)
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//