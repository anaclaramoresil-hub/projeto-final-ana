import {Cliente} from '../../../database/table';
import {redirect} from 'next/navigation';
import "../../css/cadastro.css";
async function InsereCliente(formData){
   'use server';
    const dados = {
        Nome: formData.get('nome'),
        Telefone: formData.get('telefone'),
        Endereco: formData.get('endereco'),
        Email: formData.get('email')
    }
   await   Cliente.create(dados);
   redirect('/Cliente')
}
 
 function TelaNovoCliente() {
    return (
           <div>
        <form action= {InsereCliente}>
          <label htmlFor= "Nome">Nome</label> <br></br>  
          <input type= "text" name= "nome"></input> <br></br>  
            
          <label htmlFor= "Telefone">Telefone</label> <br></br>  
          <input type= "text" name= "telefone"></input> <br></br>  
            
          <label htmlFor= "Endereco">Endereço</label> <br></br>  
          <input type= "text" name= "endereco"></input> <br></br>  

          <label htmlFor= "Email">Email</label> <br></br>  
          <input type= "text" name= "email"></input> <br></br>  

          <button className='bt-classico'>Cadastrar</button>
        </form>
        </div>
    );
  }

  export default TelaNovoCliente;