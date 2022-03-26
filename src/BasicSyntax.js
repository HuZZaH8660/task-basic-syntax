export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'I':
                if (str[i + 1] == 'V' || str[i + 1] == 'X') {
                    result--;
                } else {
                    result++;
                }
                break;
            case 'V':
                result += 5;
                break;
            case 'X':
                if (str[i + 1] == 'L' || str[i + 1] == 'C') {
                    result -= 10;
                } else {
                    result += 10;
                }
                break;
            case 'L':
                result += 50;
                break;
            case 'C':
                if (str[i + 1] == 'D' || str[i + 1] == 'M') {
                    result -= 100;
                } else {
                    result += 100;
                }
                break;
            case 'D':
                result += 500;
                break;
            case 'M':
                result += 1000;
                break;
        }
    }
    return result;
}
