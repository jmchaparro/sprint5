let registros = [
  {
    nombre: "juan",
    apellido: "chaparro",
    telefono: "5552222",
    correo: "aaa",
    contrasena: "aaa",
  },
  {
    nombre: "manuel",
    apellido: "rueda",
    telefono: "2225555",
    correo: "bbb",
    contrasena: "bbb",
  },
];

var inputs = document.getElementsByTagName("input");

var correo = document.getElementById("correo");
var contrasena = document.getElementById("contrasena");

function login() {
  let arregloLogin = [];
  let datalogin = {
    correo: document.getElementById("correo").value,
    password: document.getElementById("contrasena").value,
  };
  arregloLogin.push(datalogin);

  console.log(registros);

  const correoIn = correo.value;
  const contrasenaIn = contrasena.value;

  for (var i = 0; i < registros.length; i++) {
    const correoDb = registros[i].correo;
    const contrasenaDb = registros[i].contrasena;
    if (correoDb.length != 1 || correoDb != "" || correoDb != null) {
      if (correoIn == correoDb) {
        if (contrasenaIn == contrasenaDb) {
          console.log("Acceso correcto a " + correoIn);
          return true;
        } else {
          console.log("Acceso denegado, clave incorrecta");
          return false;
        }
      }
    }
  }
  console.log("correo vacio o no existe");
  return false;
} //fin function login()

const miLogin = document.getElementById("form-login");
miLogin.addEventListener("submit", (e) => {
  e.preventDefault();
});