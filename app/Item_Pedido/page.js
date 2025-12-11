import {Item_Pedido} from "../../database/table";
import { redirect } from "next/navigation";
import "../../css/cadastro.css";

async function Itens_Pedidos(){
    const item_pedido = await Item_Pedido.findAll();
    return (
    <div>
           <h1>Lista de Itens dos Pedidos</h1>
           <a href= "/Item_Pedido/novoItem">Cadastrar Itens dos Pedido</a>

           <table border = "1">
           <thead>
            <tr>

           <th>Quantidade</th>
           <th>Preco_Unitario</th>

            </tr>

          </thead>
          <tbody>
            {
        
          item_pedido.map(function(fil){
                    return (
                        <tr key= {fil.id}>
                               <td> {fil.Quantidade}</td>
                               <td> {fil.Preco_Unitario}</td>

                        </tr>

                 );
            })
       
       }
          </tbody>
      
          </table>
    </div>

    );
}

export default Itens_Pedidos;