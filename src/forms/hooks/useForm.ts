import { useState } from "react";

function useFom(fields:{[key:string]:string}) {

    
    const [formData, setFormData] = useState(fields)
    

    const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value })
    }

    const resetForm = ()=>{
        setFormData({...fields})
    }

    return{
        formData,
        handleChangeField,
        resetForm
    }    
}

export default useFom;