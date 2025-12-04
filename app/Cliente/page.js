import "../css/listagem.css";
import { Cliente } from "../../database/table";
import { redirect } from "next/navigation";

async function DeletaCliente(formData){
  'use server';
  const id = formData.get('id');
  const cliente = await Cliente.findByPk(id);
   await cliente.destroy();
  redirect('/Cliente');


}
async function Clientes(){
    const clientes = await Cliente.findAll();
    return (
        <div>
        <h1>Lista de Clientes</h1>
      <a href= "/Cliente/novo">Cadastrar Cliente</a>
        <table border = "1">
          <thead>

            <tr>

            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Endereco</th>
 
            </tr>

          </thead>
          <tbody>
            {
                clientes.map(function(fil){
                   return (
                    <tr key= {fil.id}>
                           <td> {fil.Nome}</td>
                           <td> {fil.Telefone}</td>
                           <td> {fil.Email}</td>
                           <td> {fil.Endereco}</td>
                           <td>
                           <form action= {'/Cliente/edita'}>
                              <input type= "hidden" name= "id" defaultValue= {fil.id}/>
                              <button>Editar</button>
                            </form>
                            
                            <form action= {DeletaCliente}>
                              <input type= "hidden" name= "id" defaultValue= {fil.id}/>
                              <button> Excluir</button>
                            </form>
                            
                             </td>






                    </tr>
                   );
                })
            }
            
            
        </tbody>   

        
        </table>
        </div>
    );
    
}
export default Clientes;


