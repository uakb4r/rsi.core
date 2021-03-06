"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("./service");
exports.Service = service_1.Service;
var resource_1 = require("./resource");
exports.Resource = resource_1.Resource;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["CREATED"] = 201] = "CREATED";
    StatusCode[StatusCode["ACCEPTED"] = 202] = "ACCEPTED";
    StatusCode[StatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCode[StatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    StatusCode[StatusCode["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    StatusCode[StatusCode["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
//# sourceMappingURL=index.js.map