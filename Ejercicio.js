let vectorCarrito = ["Sal fina", "Sal gruesa", "Pimienta", "Oregano", "Comino", "Canela", "Aceite de oliva", "Aceite"];


//Funcion que muestra posicion, producto, nombre
function mostrarVector(completo){
    console.log("-------Mostrando-------");
    console.log("Tamaño actual del vector : ",completo.length,);
    for (let i = 0; i < (completo.length); i++) {
    //console.log(completo);
    console.log("Posicion Nº",i+1,'\n',"[Producto ",i,"]",completo[i]);
    //vectorCarrito[0] 
}
    console.log("-------Fin-------");

}
mostrarVector(vectorCarrito);

//Se cambia el nombre del producto 3 de Oregano por Mayonesa
vectorCarrito[3] = "Mayonesa";
mostrarVector(vectorCarrito);

//Se utizila unshift para agregar el ddl al princio y push para miel al final
vectorCarrito.unshift("Dulce de Leche");
vectorCarrito.push("Miel");
mostrarVector(vectorCarrito);

//Se elimina Sal Gruesa-Pimienta-Comino
vectorCarrito.splice(2,2);
vectorCarrito.splice(3,1);
mostrarVector(vectorCarrito);

//Se agregar nuevos productos en un lugar determinado
vectorCarrito.splice(3,0,"Pringles");
vectorCarrito.splice(5,0,"Agua Mineral");
vectorCarrito.splice(3,0,"Terma");
mostrarVector(vectorCarrito);

//Se cambian de lugar Terma por Pringles y Aceite de oliva por Miel 
[vectorCarrito[3], vectorCarrito[4]] = [vectorCarrito[4], vectorCarrito[3]];
[vectorCarrito[7], vectorCarrito[9]] = [vectorCarrito[9], vectorCarrito[7]];
mostrarVector(vectorCarrito);