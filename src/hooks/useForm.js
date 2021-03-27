import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState)

    const reset = () => {
      setValues(initialState);
    }
    
    const handleInputChange = ({target}) => {
        
        setValues({
          ...values,
          [target.name]: target.value
          // si hay un cambio en la casilla de texto se la agrega al state junto con los valores anteriores
        })
    }

    return [values,handleInputChange,reset];
}