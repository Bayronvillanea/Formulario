import { useState } from "react";

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [datos, setDatos] = useState([]);
  const [enviado, setEnviado] = useState(false);
  const [mensaje, setMensaje] = useState("");

  function HandleSet(e) {
    e.preventDefault();

    if (nombre === "" || apellido === "" || email === "" || password === "") {
      setMensaje("Faltan datos por completar");
      setEnviado(false); 
      setTimeout(()=>{
        setMensaje("")
      },3000)
    } else {
      const nuevosDatos = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password
      };
      setDatos([...datos, nuevosDatos]);
      setNombre("");
      setApellido("");
      setEmail("");
      setPassword("");
      setEnviado(true);
      setMensaje("Enviado con éxito");
      setTimeout(()=>{
        setMensaje("")
      },3000)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={HandleSet}
        className="flex flex-col w-[300px] h-[500px] bg-slate-900 justify-center mx-auto rounded-lg px-2 shadow-2xl shadow-black text-slate-900"
      >
        <h1 className="text-center uppercase font-bold text-slate-100 mb-5">
          Formulario
        </h1>
        <label className=" uppercase  text-slate-100 " >Nombre</label>
        <input
          className="rounded-lg mt-2 hover:outline-indigo-600 hover:bg-indigo-200 py-2"
          type="text"
          name="nombre"
          placeholder="Ingrese el nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label className=" uppercase  text-slate-100 ">Apellido</label>
        <input
          className="rounded-lg mt-2 hover:outline-indigo-600 hover:bg-indigo-200 py-2"
          type="text"
          name="apellido"
          placeholder="Ingrese el apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <label className=" uppercase  text-slate-100 ">Email</label>
        <input
          className="rounded-lg mt-2 hover:outline-indigo-600 hover:bg-indigo-200 py-2"
          type="email"
          name="email"
          placeholder="Ingrese el email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className=" uppercase  text-slate-100 ">Password</label>
        <input
          className="rounded-lg mt-2 hover:outline-indigo-600 hover:bg-indigo-200 py-2"
          type="password"
          name="password"
          placeholder="Ingrese el password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="hover:bg-indigo-600 mt-5 rounded-md bg-indigo-400 h-10 " type="submit">
          Enviar
        </button>

        {enviado && <p className="text-slate-100 text-center bg-green-600 uppercase rounded mt-5 ">{mensaje}</p>}
        {!enviado && mensaje && <p className="text-slate-100 uppercase text-center mt-5 bg-red-700 rounded">{mensaje}</p>}
      </form>
    </div>
  );
}
