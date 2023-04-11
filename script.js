function convertir() {
    let letras = document.getElementById("letras").value;
    let numeros = "";
    for (let i = 0; i < letras.length; i++) {
        switch (letras[i]) {
            case "B":
                numeros += "1";
                break;
            case "C":
                numeros += "2";
                break;
            case "D":
                numeros += "3";
                break;
            case "E":
                numeros += "4";
                break;
            case "F":
                numeros += "5";
                break;
            case "G":
                numeros += "6";
                break;
            case "H":
                numeros += "7";
                break;
            case "I":
                numeros += "8";
                break;
            case "J":
                numeros += "9";
                break;
            case "A":
                numeros += "0";
                break;
        }
    }
    let resultado = "Resultado: L." + numeros.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("numeros").innerHTML = resultado;
}

const myInput = document.getElementById("letras");
myInput.addEventListener("input", function(event) {
  const inputValue = event.target.value;
  const filteredValue = inputValue.replace(/[^ABCD-EFGHIJabcd-efghij]/g, "");
  if (inputValue !== filteredValue) {
    event.target.value = filteredValue;
  }
});