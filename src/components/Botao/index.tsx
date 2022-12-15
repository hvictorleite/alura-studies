import React from "react";
import style from './Botao.module.scss';

class Botao extends React.Component<{ type?: "button" | "submit" | "reset" | undefined, texto: string }>{
    render() {
        const { type = "button", texto } = this.props;
        return (
            <button type={type} className={style.botao}>{texto}</button>
        )
    }
}

export default Botao;