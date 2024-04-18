//se crea una funcion  con click desde el HTML
function mostrar()
{
    //se captura la edad ingresada por el usuario en el HTML
    edad = document.getElementById("edad").value; 
//se verifica que la edad no sea igual a '0'
if(edad==0)
    {
        alert("Debe Ingresar una Edad Valida");
        //se limpia el input
        document.getElementById("edad").value = "";
        return
    }
    else {
        //se verifica si es menor de edad
        if(edad<18)
        {   
            alert("La Persona es es Menor de Edad");
            //se limpia el input
            document.getElementById("edad").value = "";
            return
        }
        else
        {
            //se verifica si es Adulto
            if(edad < 65)
            {
                alert("La Persona es es Adulto");
                //se limpia el input
                document.getElementById("edad").value = "";
                return
            }
            else
            {
                 //se verifica si es Adulto Mayor
                if(edad < 85)
                {
                    alert("La Persona es Adulto Mayor");
                    //se limpia el input
                    document.getElementById("edad").value = "";
                    return
                }
                else
                {
                // si la edad es mayor 0 igual a  85 se persona en Años Dorados
                    alert("La Persona es de Años Dorados");
                    //se limpia el input
                    document.getElementById("edad").value = "";
                    return
                }
            }
        }
    }


}

