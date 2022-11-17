import React from "react";

// Maneiras de estilizar com CSS inline no React
class Botao extends React.Component {
    // 1 - Criando o estilo direto na tag 
    // render() {
    //     return (
    //         <button style={{backgroundColor: 'blue'}}>
    //             Botao
    //         </button>
    //     )
    // }
    // 2 - Criando variável com estilo e depois chamando-a na tag
    // render() {
    //     const backgroundColor = 'red'
    //     return (
    //         <button style={{backgroundColor}}>
    //             Botao
    //         </button>
    //     )
    // }
    // 3 - Criando variável com estilo, externando para uma outra varivável e depois chamando-a na tag
    render() {
        const estaAtivo = true;
        const backgroundColor = estaAtivo ? 'green' : 'yellow'
        const styles = { backgroundColor }
        return (
            <button style={ styles }>
                Botao
            </button>
        )
    }
}

export default Botao;