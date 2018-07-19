/*
 * @file
 *
 * - gulp check-scss
 *
 * Checks SCSS syntax.
 *
 */

const check = require('./lib/check-scss');

module.exports = function (done) {
    check.check(true, function (success) {
        done();
    });
};