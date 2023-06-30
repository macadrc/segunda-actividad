const productos = [
    { nombre: "royal", precio: 20 },
    { nombre: "harina", precio: 50 },
    { nombre: "azúcar", precio: 70 },
    { nombre: "huevos", precio: 100 },
  ];
  let carrito = [];
  
  let seleccion = prompt("Bienvenido, ¿desea seleccionar los productos de su preferencia?");
  
  while (seleccion !== "si" && seleccion !== "no") {
    alert("Seleccione si o no");
    seleccion = prompt("Bienvenido, ¿desea seleccionar los productos de su preferencia?");
  }
  
  if (seleccion === "si") {
    alert("Nuestra lista de productos");
    let todoslosProductos = productos.map((producto) => `${producto.nombre} ${producto.precio}$`);
    alert(todoslosProductos.join(" - "));
  } else if (seleccion === "no") {
    alert("Gracias por venir, vuelva pronto");
  }
  // Lista de productos disponibles
  console.log('Productos disponibles:');
  for (var i = 0; i < productos.length; i++) {
    console.log(productos[i].nombre + ' - $' + productos[i].precio);
  }
  
  // Agregar productos al carrito
  var addToCart = true;
  while (addToCart) {
    var productIndex = prompt('Agrega un producto a tu carrito (0-' + (productos.length - 1) + ')');
  
    if (productIndex >= 0 && productIndex < productos.length) {
      var productoSeleccionado = productos[productIndex];
      let unidades = parseInt(prompt("¿Cuántas unidades desea llevar?"));
      carrito.push({ producto: productoSeleccionado.nombre, unidades, precio: productoSeleccionado.precio });
      console.log(carrito);
    } else {
      alert("No contamos con ese producto en este momento");
    }
  
    addToCart = confirm('¿Desea seguir comprando?');
  }
  
  if (seleccion === "no") {
    alert("Gracias por elegirnos");
    carrito.forEach((carritoFinal) => {
      console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, Total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`);
    });
  }
  
  // Mostrar los productos en el carrito
  console.log('Productos en el carrito:');
  for (var i = 0; i < carrito.length; i++) {
    console.log(carrito[i].producto + ' - $' + carrito[i].precio);
  }
  
  const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
  console.log(`Total a pagar: ${total}`);

  