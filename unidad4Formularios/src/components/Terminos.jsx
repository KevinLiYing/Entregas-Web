import { useForm } from "react-hook-form";
import { useState } from "react";

const Terminos = ({ onFinalSubmit }) => {
const { register, handleSubmit } = useForm();
const [finalizado, setFinalizado] = useState(false);

const onSubmit = (data) => {
    setFinalizado(true);
    onFinalSubmit(data);
};

const handleVerTerminos = () => {
    alert("≽^•⩊•^≼       Terminos y condiciones");
};

if (finalizado) {
    return <h2>Tus datos se han mandado correctamente :D</h2>;
}

//añadido dni para poder añadirle más información a los datos finales y que pueda funcionar si se añaden más formularios
return (
    <form onSubmit={handleSubmit(onSubmit)}>

        <div>
            <label>DNI</label>
                <input {...register("dni", {required: true})}
                placeholder="Cualquier valor sirve para este campo"
            />
         </div>

        <h2>¿Quieres aceptar los terminos de condiciones? :D</h2>

        <button type="button" onClick={handleVerTerminos}>
            Ver términos y condiciones
        </button>

        <br></br>

        <label>
            <input type="checkbox" {...register("acepto", { required: true })} />
            HE LEÍDO LOS TERMINOS/CONDICIONES Y ACEPTO
        </label>
        <br />
        <input type="submit" value="Finalizar" />
    </form>
  );
};

export default Terminos;
