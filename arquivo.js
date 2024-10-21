// Máquinas ATM permitem códigos PIN de 4 ou 6 dígitos, e os códigos PIN não podem conter nada além de 
//exatamente 4 dígitos ou exatamente 6 dígitos.

///Se a função receber uma string de PIN válida, retorne verdadeiro; caso contrário, retorne falso.

function verifyPin(pin){
    if (isNaN(pin) !== true){
        if (pin.length === 4 || pin.length === 6){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(verifyPin('123456'))