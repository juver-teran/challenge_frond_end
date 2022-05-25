import React from 'react';
import {Form} from 'react-bootstrap'

function CustomInput(props) {
    const {onChange, errors, name, placeholder, value, type = "text"} = props;

    const handleChange = (e) => {
        const {name, value} = e.target;
        onChange({name, value})
    }

    const hasError = () => {
        return errors && errors[name] && Object.entries(errors[name]).length > 0
    }

    return (
        <div>
            <Form.Control
                isInvalid={hasError()}
                id={name}
                value={value}
                placeholder={placeholder}
                onChange={(e) => handleChange(e)}
                type={type}
                name={name}
            />
            <div className="invalid-feedback">
                {hasError() && (!(errors) || errors[name])}
            </div>
        </div>
    );
}

export default CustomInput;