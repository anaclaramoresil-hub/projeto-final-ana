import {Pedido} from "../../database/table";
import { redirect } from "next/navigation";
import "../css/listagem.css";

async function Pedidos(){
    const pedidos = await Pedido.findAll();
    return (
    <div>
           <h1>Lista de Produtos</h1>
           <a href= "/Pedido/novoPedido">Cadastrar Pedidos</a>

           <table border = "1">

           <thead>
            <tr>

           <th>Status</th>
           <th>Descricao</th>
           <th>Total</th>   
           <th>Data_Pagamento</th>

            </tr>

          </thead>


          <tbody>
            {
        
                pedidos.map(function(fil){
                    return (
                        <tr key= {fil.id}>
                               <td> {fil.Status}</td>
                               <td> {fil.Descricao}</td>
                               <td> {fil.Total}</td> 
                             <td> {fil.Data_Pagamento}</td>

                        </tr>

                 );
            })
       
       }
          </tbody>
      
          </table>
    </div>

    );
}

export default Pedidos;