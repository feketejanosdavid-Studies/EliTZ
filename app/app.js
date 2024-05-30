// File: index.html
// Author: Fekete János Dávid
// Copyright: 2024, Fekete János Dávid
// Group: Szoft I-1-N
// Date: 2024-05-30
// Github: https://github.com/feketejanosdavid/
// Licenc: GNU GPL

var Calculation = /** @class */ (function () {
    function Calculation() {
        this.bindHtml();
        this.HandleEvent();
    }
    Calculation.prototype.bindHtml = function () {
        this.AaxisInput = document.querySelector('#AaxisInput');
        this.BaxisInput = document.querySelector('#BaxisInput');
        this.CaxisInput = document.querySelector('#CaxisInput');
        this.ResultInput = document.querySelector('#result');
        this.calcButton = document.querySelector('#calcButton');
    };
    Calculation.prototype.HandleEvent = function () {
        var _this = this;
        var _a;
        (_a = this.calcButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.startCalc();
        });
    };
    Calculation.prototype.startCalc = function () {
        var _a, _b, _c;
        var Aaxis = Number((_a = this.AaxisInput) === null || _a === void 0 ? void 0 : _a.value);
        var Baxis = Number((_b = this.BaxisInput) === null || _b === void 0 ? void 0 : _b.value);
        var Caxis = Number((_c = this.CaxisInput) === null || _c === void 0 ? void 0 : _c.value);
        var result = this.calcResult(Aaxis, Baxis, Caxis);
        this.RenderResult(result);
    };
    Calculation.prototype.calcResult = function (Aaxis, Baxis, Caxis) {
        return (4 / 3) * Math.PI * Aaxis * Baxis * Caxis;
    };
    Calculation.prototype.RenderResult = function (result) {
        if (this.ResultInput) {
            this.ResultInput.value = String(result);
        }
    };
    return Calculation;
}());
new Calculation();
