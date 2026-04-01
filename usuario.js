class Usuario {
    constructor(nombre, email, rol = "cliente") {
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = true;
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, mi rol es ${this.rol}\n`)
        return "Saludando";
    }
    desactivar() {
        this.activo = false
        console.log(`El usuario se ha desactivado`);
        return this.activo
    }
    resumen() {
        console.log(`Nombre: ${this.nombre} \nEmail: ${this.email} \nRol: ${this.rol} \nActivo: ${this.activo}\n`);
    }
}
//! Module.exports = Usuario

class UsuarioVIP extends Usuario {
    constructor(nombre, email, membresia = "Cliente VIP") {
        super(nombre, email);
        this.membresia = membresia
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, mi membresia es ${this.membresia}\n`)
        return "Saludando";
    }
    beneficios() {
        console.log(`Este usuario cuenta con beneficios exclusivos de miembros VIP`);
        return "Beneficios"
    }
}

export { Usuario, UsuarioVIP };