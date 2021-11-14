// NOT USING 
function FormInput({ id, input, handleChange, value }) {
    return (
        <div className="form-group row">
            <label htmlFor={id} className="Form-label">{input}:</label>
            <input
                id={id}
                name="response"
                className="form-control"
                placeholder={input}
                onChange={handleChange}
                value={value}
                required
            />
        </div>
    )
}

export default FormInput;
