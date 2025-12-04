import {Pedido} from '../../../database/table';
import {redirect} from 'next/navigation';

async function InserePedido(formData){
    'use server';
     const dados = {
         Status: formData.get('status'),
         Descricao: formData.get('descricao'),
         Total: formData.get('total'),
         Data_Pagamento: formData.get('data_pagamento')
     }
    await   Pedido.create(dados);
    redirect('/Pedido')
 }

 function TelaNovoPedido() {
    return (
        <form action= {InserePedido}>
          <label htmlFor= "Status">Status</label> <br></br>  
          <input type= "text" name= "status"></input> <br></br>  

          <label htmlFor= "Descricao">Descricao</label> <br></br>  
          <input type= "text" name= "descricao"></input> <br></br>  

          <label htmlFor= "Total">Total</label> <br></br>  
          <input type= "text" name= "total"></input> <br></br>  
            
          <label htmlFor= "Data_Pagamento">Data_Pagamento</label> <br></br>  
          <input type= "text" name= "data_pagamento"></input> <br></br>  

          <button>Cadastrar Pedido</button>
        </form>
    );
  }

  
  export default TelaNovoPedido;