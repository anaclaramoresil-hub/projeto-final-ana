import {Item_Pedido} from '../../../database/table';
import {redirect} from 'next/navigation';


async function InsereItem_Pedido(formData){
    'use server';
     const dados = {
        Quantidade: formData.get('quantidade'),
        Preco_Unitario: formData.get('preco_unitario')
     }
    await   Item_Pedido.create(dados);
    redirect('/Item_Pedido')
 }

 
 function TelaNovoItem_Pedido() {
    return (
        <form action= {InsereItem_Pedido}>
          <label htmlFor= "Quantidade">Quantidade</label> <br></br>  
          <input type= "text" name= "quantidade"></input> <br></br>  

          <label htmlFor= "Preco_Unitario">Preco_Unitario</label> <br></br>  
          <input type= "text" name= "preco_unitario"></input> <br></br>  

          <button>Cadastrar Itens do seu pedido</button>
        </form>
    );
  }

  
  export default TelaNovoItem_Pedido;