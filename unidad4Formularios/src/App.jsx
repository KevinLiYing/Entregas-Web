import "./App.css";
import axios from "axios";
import { useState } from "react";
import Registro from './components/Registro';
import Terminos from './components/Terminos';

function App() {
const [formEnviado, setFormEnviado] = useState(false);
//amacena datos de usuario
const [userData, setUserData] = useState({});

const handleRegistroSubmit = (data) => {
  setUserData(data);          
  setFormEnviado(true);       
};

const handleFinalizar = (terminosData) => {
  const allData = { ...userData, ...terminosData };
  console.log("Datos finales:", allData);

/*//Mandar datos a un servidor
const onSubmit = async (data) => {
try {
        setFinalizado(true);
        const response = await axios.post("https://alguna-URL.com", allData);
        console.log("Respuesta del servidor: ", response.data);
        } catch (error) {
        console.error("Error al enviar los datos:", error);
    }

};
*/

};

// Si el formulario se ha enviado, ejecutar el formulario de Terminos
return (
  <div>
    {!formEnviado ? (<Registro onFormSubmit={handleRegistroSubmit}/>) : (<Terminos onFinalSubmit={handleFinalizar}/>)
    }
  </div>
);
}

export default App;
