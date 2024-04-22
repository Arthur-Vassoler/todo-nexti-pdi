import * as C from './Button.style'

type ButtonType = {
    text: string,
    onClick: () => void
}

const Button = ({text, onClick}:ButtonType) => {
    return(
        <C.Button onClick={onClick}>{text}</C.Button>
    )
}

export default Button