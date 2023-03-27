"use strict";
var Validations;
(function (Validations) {
    Validations.isValidName = (name) => {
        return name.length > 2 ? true : false;
    };
    Validations.isValidDate = (date) => {
        return date.getFullYear() == 2023 ? true : false;
    };
    Validations.isValidCode = (flag) => {
        return flag ? true : false;
    };
})(Validations || (Validations = {}));
console.log(Validations.isValidCode(true));
console.log(Validations.isValidDate(new Date()));
console.log(Validations.isValidName('CUAR'));
//# sourceMappingURL=main.js.map