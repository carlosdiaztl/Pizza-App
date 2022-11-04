import React,{useContext} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import './style.scss'
import useForm from '../hooks/useForm';
import Swal from "sweetalert2";
const Datospagar = () => {
    const [dataForm, handleChangeInput] = useForm({
        name: "",
        numeroTarjeta: "",
        fechaV: "",
        cvv: "",
        direccion:""
    });
    
    const compra= JSON.parse(sessionStorage.getItem ('compra') )  
    console.log(compra);
    const navigate=useNavigate()
const confirm=async(e)=>{
    e.preventDefault()
    console.log(dataForm);
   
    if (dataForm.name !=="" && dataForm.numeroTarjeta !=="" && dataForm.fechaV !=="" && dataForm.cvv !=="" && dataForm.direccion !=="") {
        console.log(dataForm);
        navigate('/confirm')
    }
    else{Swal.fire(
        'Faltan datos',
        'Llene los datos por favor',
        'error'
      );}
    
}
const regresar=()=>{
   
    navigate(`/${compra.name}`)

}

  return (
    <>

    <div> <button onClick={regresar}>Carrito de compras </button>
<section className='infocompras'> <img  src={compra.imagenes} />
<h4>pizza</h4>
<h4>{compra.pizza} </h4>

<h5>X {compra.cantidad} </h5> <span><h5>{compra.cantidad * compra.precio}</h5>  </span>
  </section>
    </div>
<form onSubmit={confirm}>



<label>
    Nombre completo
    <input  name='name' onChange={handleChangeInput}  type="text" placeholder='Ingrese su nombre'/>
</label>
<label>
    Numero de tarjeta de Credíto
    <input name='numeroTarjeta' onChange={handleChangeInput}  type="number" placeholder='12334 1234 1234 1234 '/>
</label>
<span> 
 <label>
 Fecha de vencimiento 
<input name='fechaV' onChange={handleChangeInput} type="date"
min="2022-11"
max="2026-10" />

</label>
 <label>
 CVV 
 <input name='cvv' onChange={handleChangeInput} type="number"  maxLength={3} /> 


</label> 
 </span>
 <label>
    Dirección 
    <input name='direccion' onChange={handleChangeInput} type="text" placeholder='av.moreno #123' />
 </label>

    

<button type='submit'>Pagar ahora</button>

</form>
    </>
    
  )
}

export default Datospagar