export interface Empleado {
    nombre: string,
    telefono: string,
    correo: string,
    uid: string,
    password: string,
    Parkid: string,
    perfil: 'usuario'|'admin'|'parqueadero'|'empleado',
    icono: string
}