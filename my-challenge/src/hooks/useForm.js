import {useState} from "react";
import useValidate from "./useValidate";

export const useForm = (initState, validations) => {
    const {validated} = useValidate()
    const [formState, setFormState] = useState(initState)
    const [errors, setErrors] = useState({})

    const handleChange = ({value, name}) => {
        setFormState({
            ...formState,
            [name]: value
        })
        let errorsValidations = validated({[name]: value}, validations);
        setErrors(errorsValidations)
    }

    const clearValues = (initialState) => {
        setFormState(initialState)
    }

    return {
        formState,
        errors,
        setErrors,
        handleChange,
        clearValues
    }
}