// 1.1 Bucle for del 0 al 9
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 1.2 Bucle for del 0 al 9 imprimiendo solo los pares
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 1.3 Contando ovejas para dormir (10 vueltas)
for (let i = 1; i <= 10; i++) {
  if (i === 10) {
    console.log("¡Dormido!");
  } else {
    console.log("Intentando dormir 🐑");
  }
}