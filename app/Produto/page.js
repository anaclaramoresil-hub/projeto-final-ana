import {Produto} from "../../database/table";
import { redirect } from "next/navigation";
import "../css/listagem.css";

async function DeletaProduto(formData){
    'use server';
    const id = formData.get('id');
    const produto = await Produto.findByPk(id);
     await produto.destroy();
    redirect('/Produto');
  
  
  }
async function Produtos(){
    const produtos = await Produto.findAll();
    return (
    <div>
           <h1>Lista de Produtos</h1>
           <a href= "/Produto/NovoProd">Cadastrar Produtos</a>

           <table border = "1">

           <thead>
            <tr>

           <th>Nome</th>
           <th>Estoque</th>
           <th>Descricao</th>
           <th>Preco</th>

            </tr>

          </thead>


          <tbody>
            {
        
                produtos.map(function(fil){
                    return (
                        <tr key= {fil.id}>
                               <td> {fil.Nome}</td>
                               <td> {fil.Estoque}</td>
                              <td> {fil.Descricao}</td>
                               <td> {fil.Preco}</td>
                               <td>
                           <form action= {'/Produto/edita'}>
                              <input type= "hidden" name= "id" defaultValue= {fil.id}/>
                              <button>Editar</button>
                            </form>
                            
                            <form action= {DeletaProduto}>
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

export default Produtos;