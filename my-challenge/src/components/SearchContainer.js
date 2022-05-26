import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {useForm} from "../hooks/useForm";
import CustomInput from "./CustomInput";
import {repositorySearch} from "../services/repositorySearch"
import useValidate from "../hooks/useValidate";
import {useNavigate} from "react-router-dom";
import {getQueryByObject} from "../helpers/getQueryByObject";

function SearchContainer() {
    const {model, validate} = repositorySearch();
    const {validated} = useValidate();
    let navigate = useNavigate();

    const {
        formState,
        handleChange,
        errors,
        setErrors,
        clearValues
    } = useForm(model(), validate);

    const formValid = (errors) => {
        return !(Object.entries(errors).length > 0)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let errorsValidation = validated(formState, validate);
        setErrors(errorsValidation);

        if (formValid(errorsValidation)) {
            const filter = {
                search: formState.search,
            }
            navigate("/items?" + getQueryByObject(filter));
        }
        clearValues(model());
    }

    return (
        <Form onSubmit={handleSubmit} className="row g-3 justify-content-center">
            <div className="col-sm-10">
                <CustomInput
                    name="search"
                    value={formState.search}
                    errors={errors}
                    onChange={handleChange}
                />
            </div>
            <div className="col-auto">
                <div className='flex-righ'>
                    <Button
                        variant="primary"
                        role="button"
                        type="submit"
                    >
                        Buscar
                    </Button>
                </div>
            </div>
        </Form>
    );
}

export default SearchContainer;