"use strict";
exports.__esModule = true;
exports.getUniqueReadableCode = exports.getMD5Hash = exports.getSHA1Hash = void 0;
var crypto_1 = require("crypto");
var map = ['U', 'M', 'I', 'N', 'T', 'Y', 'C', 'O', 'E', 'R'];
exports.getSHA1Hash = function (str) { return crypto_1.createHash("sha1").update(str, "utf8").digest("hex"); };
exports.getMD5Hash = function (str) { return crypto_1.createHash("md5").update(str).digest("hex"); };
exports.getUniqueReadableCode = function () { return String(Date.now()).split('').map(function (index) { return map[Number(index)]; }).join(""); };
