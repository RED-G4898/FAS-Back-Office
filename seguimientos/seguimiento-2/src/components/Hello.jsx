// Module import
import React from "react";
import { useParams } from "react-router-dom";

// Hello component definition
function Hello() {
  // Extract name parameter from URL
  const { name } = useParams();

  // Return a header with greeting message
  return (
    <main className="bg-[#0f0e17] w-full h-screen pt-8">
      <h2 className="text-[#ff8906] text-4xl font-bold text-center">¡Hola {name || "Mundo"}!, esto es un componente en React</h2>
      <h3 className="text-[#f25f4c] text-2xl font-bold ml-8 mt-16">Detalles de Actividad:</h3>
      <ul className="ml-8 mt-8">
        <li className="text-[#a7a9be]"><b className="text-[#e53170]">Actividad:</b> Seguimiento 2</li>
        <li className="text-[#a7a9be]"><b className="text-[#e53170]">Alumno:</b> Rodrigo Eduardo Delgadillo González</li>
        <li className="text-[#a7a9be]"><b className="text-[#e53170]">Asignatura:</b> Desarrollo de Aplicaciones 2</li>
        <li className="text-[#a7a9be]"><b className="text-[#e53170]">Profesor:</b> Mtro. Alfonso Gregorio Rivero Duarte</li>
      </ul>
    </main>
  );
}

export default Hello;