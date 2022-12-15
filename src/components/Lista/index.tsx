import { ITarefa } from '../../types/tarefa';
import Item from './Item'
import style from './Lista.module.scss';

function Lista( { tarefas }: { tarefas: ITarefa[] } ) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index} tarefa={item.tarefa} tempo={item.tempo} 
                    selecionado={item.selecionado} completado={item.completado} id={item.id} />
                    // OU
                    // <Item key={index} { ...item } />
                    // Para pegar todas as informações de item e enviar para Item
                ))}
            </ul>  
        </aside>
    )
}

export default Lista;