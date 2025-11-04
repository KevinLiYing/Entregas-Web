import { useForm } from "react-hook-form";

const Registro = ({ onFormSubmit }) => {
const { register, handleSubmit, watch, setValue } = useForm();
  const onSubmit = (data) => {
    console.log("Datos del formulario:", data);
    //le da los datos a APP.jsx
    onFormSubmit(data);
  };

// Para saber si esta marcado la casilla o no
const selectedGender = watch("genero");
return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre</label>
        <input {...register("nombre", { required: true, maxLength: 20 })} />
      </div>

      <div>
        <label>Apellidos</label>
        <input {...register("apellido", { required: true, maxLength: 20 })} />
      </div>

      <div>
        <label>País</label>
        <select {...register("pais", { required: true })}>
          <option value="es">España</option>
          <option value="it">Italia</option>
          <option value="pt">Portugal</option>
        </select>
      </div>

      <div>
        <label>Dirección</label>
        <input {...register("direccion", { required: true })} />
      </div>

      <div>
        <label>Objetivo del entrenamiento</label>
        <input {...register("datoIrrelevante", { required: true, maxLength: 200 })} />
      </div>

      <div>
        <label>Género</label>
        <label>
          <input type = "checkbox" value = "masculino" {...register("genero", { required: true })} checked = {selectedGender === "masculino"} 
          onChange = {() => setValue("genero", selectedGender === "masculino" ? "" : "masculino")
          }
          />
          Masculino
        </label>
        <label>
          <input type = "checkbox" value = "femenino" {...register("genero", { required: true })} checked={selectedGender === "femenino"}
            onChange={() => setValue("genero", selectedGender === "femenino" ? "" : "femenino")
            }
          />
          Femenino
        </label>
      </div>

      <input type="submit" value="Enviar" />
    </form>
  );
};

export default Registro;
