let nombre=prompt("ingrese su nombre");

if(nombre.length%2==0){
    document.write("Su nombre es ", nombre);
    document.write("<br> Su nombre tiene ",+ nombre.length + " letras");
    document.write("<br> Su nombre tiene una cantidad de letras par ")
}else {
    document.write("Su nombre es ", nombre);
    document.write("<br> Su nombre tiene ",+ nombre.length + " letras");
    document.write("<br> Su nombre tiene una cantidad de letras impar")
}

