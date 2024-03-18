const db = require ('./config/db');
const UsuarioDao= require ('./DAO/UsuarioDao');

async function main() {

    await db.conectar().then(() => {
        console.log('Conexion establecida con éxito');
    }).catch(error => {
        console.error('Error al conectar a la base de datos:', error);
    });



  //  await UsuarioDao.crearUsuario({ Nombre: 'Bruno Morales', Correo: 'bruno1812@gmail.com', Contraseña: 'papasfritas45', SignDate: '03/17/2025'}).then(UsuarioCreado => {
   //     console.log('Usuario creado exitosamente: ', UsuarioCreado);
   // }).catch(error => {
  //      console.error('Error al crear el usuario:', error);
  //  });
   await UsuarioDao.getUsuarioPorID('65f74cd2d22bddc420082287').then(Usuario => {
        console.log(Usuario);
    }).catch(error => {
        console.log('Error al encontrar usuario:', error);
    });
 //   await UsuarioDao.eliminarUsuario('65f74cd2d22bddc420082287').then(UsuarioEliminado =>{
 //       console.log('Usuario eliminado correctamente, ', UsuarioEliminado);
 //   }).catch(error => {
 //       console.log(error);
 //   });

    db.desconectar().then(() => {
        console.log('Desconexión exitosa');
    }).catch(error => {
        console.error('Error al desconectar a la base de datos:', error);
    });
}



main();