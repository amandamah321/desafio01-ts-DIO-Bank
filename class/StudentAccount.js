"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.StudentAccount = void 0;
var DioAccount_1 = require("./DioAccount");
var StudentAccount = /** @class */ (function (_super) {
    __extends(StudentAccount, _super);
    function StudentAccount(name, accountNumber) {
        var _this = _super.call(this, name, accountNumber) || this;
        _this.deposit = function (amount) {
            if (_this.validateStatus()) {
                console.log("Voce depositou R$".concat(amount));
                _this.balance = _this.balance + amount + 10;
            }
            else {
                throw new Error('Conta inválida');
            }
        };
        return _this;
    }
    return StudentAccount;
}(DioAccount_1.DioAccount));
exports.StudentAccount = StudentAccount;
