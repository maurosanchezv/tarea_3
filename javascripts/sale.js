/*Aquí se declara el precio de producto y el número de elemento para asignarle y poder identificar */
const precio_producto = document.getElementById("product");
const id_numero = document.getElementById("number");
let compras = [];
const products = [
  {
    id: 1,
    name: "Mezcla original 200g",
    price: 500,
  },
  {
    id: 2,
    name: "Mezcla original 500g",
    price: 900,
  },
  {
    id: 3,
    name: "Mezcla especial 200g",
    price: 700,
  },
  {
    id: 4,
    name: "Mezcla especial 500g",
    price: 1200,
  },
];

function añadir_carrito() {
  const valor_precio = parseInt(precio_producto.value);
  const product = products.find((item) => item.id == valor_precio);
  const number = id_numero.value;

  let compra_var = {
    product: product,
    number: parseInt(number),
  };

  const nueva_compra = compras.findIndex(
    (item) => item.product.id === compra_var.product.id
  );
  if (compras.length < 1 || nueva_compra === -1) {
    compras.push(compra_var);
  } else {
    compras[nueva_compra].number += compra_var.number;
  }

  window.alert(`${mensaje()}\n subtotal ${subtotal()} yenes.`);
  precio_producto.value = "";
  id_numero.value = "";
}

function subtotal() {
  return compras.reduce((prev, compra_var) => {
    return prev + compra_var.product.price * compra_var.number;
  }, 0);
}
/*Esta función es llamada al darle al botón añadir carrito entonces te muestra los productos que adquiriste hasta el momento */
function mensaje() {
  return compras
    .map((compra_var) => {
      return `${compra_var.product.name} , ${compra_var.product.price} yenes : ${compra_var.number} item.\n`;
    })
    .join("");
}
/*Calcúla lo añadido al carrito más el gasto de envío si es que hay gastos de envio y lo refleja con una alerta  */
function total_pagar() {
  const suma_subtotal = subtotal();
  const gasto_envio = envio(suma_subtotal);
  window.alert(
    `${mensaje()}\n el subtotal: ${suma_subtotal} yenes.\n Los gastos de envío son: ${gasto_envio} yenes.\n Total: ${
      suma_subtotal + gasto_envio
    } yenes.`
  );
  compras = [];
  precio_producto.value = "";
  id_numero.value = "";
}

/*Esta función lo que hace es calcular Cuánto es lo que debes pagar de envío dependiendo de lo que hayas comprado */
function envio(suma_subtotal) {
  if (suma_subtotal == 0 || suma_subtotal >= 3000) {
    return 0;
  } else if (suma_subtotal < 1000) {
    return 500;
  } else {
    return 250;
  }
}
/* El diseño y las imágenes deben mostrarse de la misma forma que en la página de muestra.
Al añadir un producto, el nombre del producto, el importe y la cantidad deben aparecer en una ventana emergente.
Cuando se muestra el importe total, el nombre del producto, el importe, la cantidad, el subtotal, los gastos de envío y el importe total de los productos añadidos deben mostrarse correctamente.
Los gastos de envío deben ser de 500 yenes para un importe total o inferior a 2000 yenes, de 250 yenes para 2000 yenes o más y de 0 yenes para 3000 yenes o más.*/
