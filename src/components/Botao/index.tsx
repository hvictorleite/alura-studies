import React from "react";
import style from './Botao.module.scss';

class Botao extends React.Component<{ type?: "button" | "submit" | "reset" | undefined,
                                      texto: string,
                                      onClick?: () => void }>{
    render() {
        const { type = "button", texto, onClick } = this.props;
        return (
            <button onClick={onClick} type={type} className={style.botao}>{texto}</button>
        )
    }
}

export default Botao;