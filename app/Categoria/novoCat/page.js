import { Categoria } from "../../../database/table";
import { redirect } from 'next/navigation';
import "../../css/cadastro.css";


async function InsereCategoria(formData) {
    'use server';
    const dados = {
        Especificacao: formData.get('especificacao')
    };
    await Categoria.create(dados);
    redirect('/Categoria');
}


function TelaNovoCategoria(){
    return(
        <div>
       <form action= {InsereCategoria}>

        <label htmlFor="Especificacao">Especificacao - Roupa ou Suplemento</label> <br></br>
        <input type="text" name="especificacao"></input>
        <button className='bt-classico'>Cadastrar</button>
        <button>Inserir Categoria</button>
       </form>
       </div>
    );
}

export default TelaNovoCategoria;