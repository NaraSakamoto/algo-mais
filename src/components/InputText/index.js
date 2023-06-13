import './InputText.css';

const InputText = (props) => {
    return(
        <div className="input-text">
            <label>{props.label}</label>
            <input name={props.name} placeholder={props.placeholder} onChange={props.onChange}></input>
        </div>
    )
}

export default InputText;