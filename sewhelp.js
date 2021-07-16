/* Coded By Ravindu Manoj.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

function successfullMessage(msg) {
    return "🇱🇰 *RavinduManoj*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🥴 *RavinduManoj*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "🐲 *RavinduManoj*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
