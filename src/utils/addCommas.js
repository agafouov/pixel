export default function addCommas(num) {
    // Преобразование числа в строку
    var numStr = num.toString();
    
    // Разделение числа на целую и дробную части, если они есть
    var parts = numStr.split(".");
    var integerPart = parts[0];
    var decimalPart = parts.length > 1 ? "." + parts[1] : "";
    
    // Добавление запятых для разделения тысяч
    var integerStrWithCommas = "";
    for (var i = integerPart.length - 1, j = 1; i >= 0; i--, j++) {
        integerStrWithCommas = integerPart.charAt(i) + integerStrWithCommas;
        if (j % 3 === 0 && i !== 0) {
            integerStrWithCommas = "," + integerStrWithCommas;
        }
    }
    
    // Соединение целой и дробной частей с добавленными запятыми
    var result = integerStrWithCommas + decimalPart;
    
    return result;
}