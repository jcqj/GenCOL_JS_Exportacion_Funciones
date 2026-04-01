class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.precioIVA = 0;
    }
    calcularTotal() {
        this.precioIVA = this.precio + (this.precio * 0.19)
        console.log(`Precio normal ${this.precio} \nPrecio con IVA: ${this.precioIVA}\n`);
        return this.precioIVA;
    }
    aplicarDescuento(porcentaje) {
        let descuento = this.precio - (this.precio * porcentaje / 100)
        console.log(`El precio normal es: ${this.precio} \nEl precio con descuento aplicado es ${descuento}`);
        return descuento
    }
    resumen() {
        console.log(`Nombre: ${this.nombre} \nCategoria: ${this.categoria} \nPrecio base: ${this.precio}`);
        return "Resumen"
    }
    tarjeta() {
        this.precioIVA = this.precio + (this.precio * 0.19)
        console.log(`Nombre: ${this.nombre} \nCategoria: ${this.categoria} \nPrecio con IVA: ${this.precioIVA}\n`);
        return "Tarjeta"
    }
}

class ProductoDigital extends Producto {
    constructor(nombre, precio, licencia) {
        super(nombre, precio);
        this.licencia = licencia;
    }
    calcularTotal() {
        console.log(`Precio normal, al ser digital no tieneIVA: ${this.precio}\n`);
        return this.precioIVA;
    }
    tarjeta() {
        console.log(`Nombre: ${this.nombre} \nLicencia: ${this.licencia} \nPrecio sin IVA: ${this.precio}\n`);
        return "Tarjeta"
    }
}

export { Producto, ProductoDigital };