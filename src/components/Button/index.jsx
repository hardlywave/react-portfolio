import './index.scss'

const Button = ({style, buttonLabel}) => {
    if (typeof style !== 'object') style = {}
    return(
        <button className="button-component" style={style}>{buttonLabel}</button>
    )
}

export default Button;