const useValidate = () => {

    const validated = (form, validations) => {
        const error = {}
        for (let key in form) {
            if (form.hasOwnProperty(key) && validations.hasOwnProperty(key)) {
                switch (validations[key].type) {
                    case 'string':
                        error[key] = validateString(form[key], validations[key])
                        if (!error[key]) {
                            delete error[key]
                        }
                        break;
                    default:
                        return error
                }
            }
        }
        return error
    }
    // Validaciones de string
    const validateString = (value, validation) => {
        if (validation.required) {
            if (value.trim() === '')
                return `El campo es requerido`
        }

        if (/[<>#@$%&]/.test(value))
            return 'Caracteres inválidos'

    }
    
    return {validated}
}

export default useValidate;