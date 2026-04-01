import { Usuario, UsuarioVIP } from "./usuario.js";
import { Producto, ProductoDigital } from "./producto.js";


// //! CHECKPOINT 1
// //? Crear 2 instancias de Usuario con roles diferentes.
// let user1 = new Usuario("Juan Kratos", "Juan@email.com");
// let user2 = new Usuario("Camilo Itachi", "Camilo@gmail.com", "Supervisor")

// //? Llamar saludo() y resumen() en ambas.
// user1.saludo();
// user1.resumen();
// user2.saludo();
// user2.resumen();


// //! CHECKPOINT 2
// //? Crear una instancia VIP
// let userVip1 = new UsuarioVIP("Nett", "Nett@gmail.com")

// //? Verificar que hereda resumen() y desactivar().
// userVip1.resumen();
// userVip1.desactivar();
// //? Mostrar saludo() diferente.
// userVip1.saludo();


//! CHECKPOINT 3
//? Crear 2 productos de categorias distintas.
// let producto1 = new Producto("TV", 10000, "Electrodomestico");
// let producto2 = new Producto("Cuaderno", 1000, "Papeleria")

// //? Llamar tarjeta() en ambos y verificar que calcularTotal() refleja el iva.
// producto1.tarjeta()
// producto1.calcularTotal()

// producto2.tarjeta()
// producto2.calcularTotal()

// //? Aplicar 1 descuento y verificar que precio origianl no cambia.
// producto1.aplicarDescuento(10);
// producto1.resumen()

// //! CHECKPOINT 4
// //? Crear un producto digital, llamar calcularTotal(), validar que no aplique IVA.
// let productoDigital1 = new ProductoDigital("Xbox", 5000, "Licencia de uso personal");
// productoDigital1.calcularTotal();

// //? Comparar tarjeta entre producto normal y digital.
// let producto3 = new Producto("TV", 10000, "Electrodomestico");
// producto3.tarjeta()

// productoDigital1.tarjeta()

// //! CHECKPOINT 5
// //? Crear al menos 3 usuarios: un cliente, administrador y usuario VIP.
// let cli1 = new Usuario("Atrox", "Atrox@gmail.com")
// let admin1 = new Usuario("Thomas", "Thomas@gmail.com", "Administrador")
// let vip1 = new UsuarioVIP("Netto", "Netto@gmail.com")

// //? Crear al menos 4 productos, 2 fisicos de categorias distintas y 2 digitales con diferentes licencias.
// let prod1 = new Producto("TV", 10000, "Electrodomestico");
// let prod2 = new Producto("Cuaderno", 1000, "Papeleria")
// let prod3 = new ProductoDigital("Xbox", 5000, "Licencia de uso personal");
// let prod4 = new ProductoDigital("Photoshop", 2000, "Licencia de uso comercial");

// //? Desactivar uno de los usarios y mostrar su resumen para verificar el cambio de estado.
// admin1.desactivar();
// admin1.resumen()

// //? Aplicar descuento de 20% a un producto fisico e imprimir precio.
// prod1.aplicarDescuento(20);

// //? Imprimir la tarjeta de todos los productos
// prod1.tarjeta();
// prod2.tarjeta();
// prod3.tarjeta();
// prod4.tarjeta();

// //? Imprimir resumen de todos los usuarios
// cli1.resumen();
// admin1.resumen();
// vip1.resumen();