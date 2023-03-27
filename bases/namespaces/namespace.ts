namespace Validations {

    export const isValidName = (name: string):boolean => {
        return name.length > 2 ? true : false;
    }

    export const isValidDate = (date: Date):boolean => {
        return date.getFullYear() == 2023 ? true : false
    }

    export const isValidCode = (flag: boolean):boolean => {
        return flag ? true : false;
    }

}

console.log(Validations.isValidCode(true));
console.log(Validations.isValidDate(new Date()));
console.log(Validations.isValidName('CUAR'));
