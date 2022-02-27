export interface User{
    nombre: string,
    telefono: string,
    correo: string,
    uid: string,
    password: string,
    perfil: 'usuario'|'admin'|'parqueadero'|'trabajador'
}