import {Produto} from '../../../database/table';
import {redirect} from 'next/navigation';


async function InsereProduto(formData){
    'use server';
     const dados = {
         Nome: formData.get('nome'),
         Estoque: formData.get('estoque'),
         Descricao: formData.get('descricao'),
         Preco: formData.get('preco')
     }
    await   Produto.create(dados);
    redirect('/Produto')
 }

 function TelaNovoProduto() {
    return (
        <form action= {InsereProduto}>
          <label htmlFor= "Nome">Nome</label> <br></br>  
          <input type= "text" name= "nome"></input> <br></br>  
            
          <label htmlFor= "Estoque">Estoque</label> <br></br>  
          <input type= "text" name= "estoque"></input> <br></br>  
            
          <label htmlFor= "Descricao">Descricao</label> <br></br>  
          <input type= "text" name= "descricao"></input> <br></br>  

          <label htmlFor= "Preco">Preco</label> <br></br>  
          <input type= "number" name= "preco"></input> <br></br>  

          <button>Cadastrar Produto</button>
        </form>
    );
  }

  
  export default TelaNovoProduto;