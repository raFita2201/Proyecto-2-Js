const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
console.log("Array inicial:", aldeanos);

// 4.1 - Saca a "Tendo" por consola atacando su posición.
console.log("\n--- 4.1 ---");
console.log("Elemento en la posición 3 (Tendo):", aldeanos[3]);


// 4.2 - Coloca en el último lugar de este array a "Cervasio".
console.log("\n--- 4.2 ---");
aldeanos.push("Cervasio");
console.log("Array tras añadir a Cervasio al final:", aldeanos);


// 4.3 - Cambia el primer elemento de este array por "Bambina".
console.log("\n--- 4.3 ---");
aldeanos[0] = "Bambina";
console.log("Array tras cambiar el primer elemento por Bambina:", aldeanos);


// 4.4 - Dale la vuelta a este array.
console.log("\n--- 4.4 ---");
aldeanos.reverse();
console.log("Array invertido:", aldeanos);


// 4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
console.log("\n--- 4.5 ---");
const indiceNarciso = aldeanos.indexOf("Narciso");
if (indiceNarciso !== -1) {
  aldeanos.splice(indiceNarciso, 1, "Canela");
}
console.log("Array tras reemplazar a Narciso por Canela:", aldeanos);


// 4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explícitamente
console.log("\n--- 4.6 ---");
console.log("Último elemento (usando length - 1):", aldeanos[aldeanos.length - 1]);
