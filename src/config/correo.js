const nodemailer = require('nodemailer');
var num = 0;
function random(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);

}

function intervalo(){
  do{
      num = random(1,9999);
  }while (num<4);
  return num;
}

num= intervalo();
exports.recuperarContrasena= async (data)=>{

  //setInterval(intervalo, 60000);
    const configurarCorreo={
        from: process.env.APP_CORREO,
        to: data.correo,
        subject: "Código de recuperación de contraseña",
        text: 'Gracias por ser parte de nuestra familia Huellitas de Sol \n Su código es: '+num,
    };
    setTimeout(intervalo, 60000); //a los 60000
    const transporte = nodemailer.createTransport({
        host: process.env.CORREO_SERVICIO,
        port: process.env.CORREO_PORT,
        secure: true,
        auth:{
            user: process.env.APP_CORREO,
            pass: process.env.CORREO_CONTRASENA,
        },
    });
    transporte.verify(function(error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("El servidor puede enviar mensajes");
        }
      });

    return await transporte.sendMail(configurarCorreo);
};

exports.verificarCodigo = async (data)=>{
  //console.log(data.codigo);
  if(num ==data.codigo){
    console.log("Correcto");
  }else{
    console.log("codigo incorrecto");
  }
}