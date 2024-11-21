function maxDaysInMonth(month, year) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //tableau jours du mois de janvier à décembre


    // Vérification année bissextile
    if (month === 2 && year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return 29;
    }
    return daysInMonth[month - 1];// -1 pour bien prendre les 12 dates du tableau 
}

console.log(maxDaysInMonth(2, 2025)) // résulat = 28 

function isValidDate(date) {

    // Vérification du type "string"
    if (typeof date !== 'string') {
        return false;
    }
    // Vérification du format [fr:jj/mm/aaaa / en:dd/mm/yyyy ]
    const parts = date.split('/');

    if (
        parts.length !== 3 ||
        parts[0].length !== 2 ||
        parts[1].length !== 2 ||
        parts[2].length !== 4 ||
        isNaN(parts[0]) ||
        isNaN(parts[1]) ||
        isNaN(parts[2])
    ) {
        return false;
    }

    // Conversion des parties en nombres
    const [day, month, year] = parts.map(Number);

    // Définition des périodes years et months
    if (year < 1000 || year > 9999) return false;
    if (month < 1 || month > 12) return false;

    // Validation du jour
    const maxDay = maxDaysInMonth(month, year);
    if (day < 1 || day > maxDay) return false; {

        return true;
    }
}

console.log(isValidDate(02/02/2121))
console.log(isValidDate("03/03/2323")) // seule date qui doit être True dans la console
console.log(isValidDate("50/03/2323"))
console.log(isValidDate("03/50/2323"))
console.log(isValidDate("03/03/12323"))

isValidDate()

function isPalindrome(date) {
    //on enlève le / de la date
    const dateWithoutSlashes = date.replace(/\//g, ''); //Une regex (expression régulière) pour filtrer, transformer, remplacer
    
    // on compare les chiffres du début à ceux de la fin
    for (let i = 0; i < Math.floor(dateWithoutSlashes.length / 2); i++) { //Math.floor() arrondit ce résultat à l'entier inférieur 
        if (dateWithoutSlashes[i] !== dateWithoutSlashes[dateWithoutSlashes.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("11/02/2011")) // true
console.log(isPalindrome("03/04/2001")) // false

//pour trouver les prochains palindromes sans les donner il faudrait faire une boucle à partir de la date d'aujourd"hui, incrémenter la date jusqu'à ce que isPalindrome devienne revoie "true"...