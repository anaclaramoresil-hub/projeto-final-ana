import {Pagamento} from '../../../database/table';
import {redirect} from 'next/navigation';
import "../../css/cadastro.css";

async function InserePagamento(formData){
    'use server';
     const dados = {
         Metodo_Pagamento: formData.get('metodo_pagamento'),
         Valor: formData.get('valor')
     }
    await   Pagamento.create(dados);
    redirect('/Pagamento')
 }

 function TelaNovoPagamento() {
    return (
      <div>
        <form action= {InserePagamento}>
          <label htmlFor= "Metodo_Pagamento">Metodo_Pagamento</label> <br></br>  
          <input type= "text" name= "metodo_pagamento"></input> <br></br>  

          <label htmlFor= "Valor">Valor</label> <br></br>  
          <input type= "number" name= "valor"></input> <br></br>  

          <button>Cadastrar Metodo de Pagamento</button>
        </form>
        </div>
    );
  }

  
  export default TelaNovoPagamento;