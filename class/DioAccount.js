"use strict";
exports.__esModule = true;
exports.DioAccount = void 0;
var DioAccount = /** @class */ (function () {
    function DioAccount(name, accountNumber) {
        var _this = this;
        this.balance = 0;
        this.status = true;
        this.balanceValidate = true;
        this.setName = function (name) {
            _this.name = name;
            console.log('Nome alterado com sucesso!');
        };
        this.getName = function () {
            return _this.name;
        };
        this.deposit = function (amount) {
            if (_this.validateStatus()) {
                console.log("Voce depositou R$".concat(amount));
                _this.balance = _this.balance + amount;
            }
            else {
                throw new Error('Conta inválida');
            }
        };
        this.withdraw = function (amount) {
            if (_this.validateStatus() && _this.validadeBalance(amount)) {
                console.log("Voce sacou R$".concat(amount));
                _this.balance = _this.balance - amount;
            }
            else {
                throw new Error('Conta inválida');
            }
        };
        this.validadeBalance = function (amount) {
            if (amount <= _this.balance) {
                return true;
            }
            else {
                throw new Error('Saldo insuficiente !');
            }
        };
        this.getBalance = function () {
            console.log(_this.balance);
        };
        this.validateStatus = function () {
            if (_this.status) {
                return _this.status;
            }
            else {
                throw new Error('Conta inválida');
            }
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
    return DioAccount;
}());
exports.DioAccount = DioAccount;
