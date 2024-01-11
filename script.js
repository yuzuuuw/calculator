function valueButton(angka){
    formkalkulator.screen.value += angka.value;
}

function Reset(){
    formkalkulator.screen.value = null;
}

function Hitung(){
    formkalkulator.screen.value = eval (formkalkulator.screen.value);
}