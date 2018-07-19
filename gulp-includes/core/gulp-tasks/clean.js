/*
 * @file
 *
 * - gulp clean
 *
 * Erase generated assets.
 *
 */

const clean = require('./lib/clean');

module.exports = function (done) {
    clean.clean(true, function (success) {
        done();
        process.exit();
    });
};