import {Pagamento} from "../../database/table";
import { redirect } from "next/navigation";
import "../../css/cadastro.css"; 



async function Pagamentos(){
    const pagamentos = await Pagamento.findAll();
    return (
    <div>
           <h1>Lista de Pagamentos</h1>
           <a href= "/Pagamento/novoPag">Cadastrar Pagamentos</a>

           <table border = "1">

           <thead>
            <tr>

           <th>Metodo_Pagamento</th>
           <th>Valor</th>

            </tr>

          </thead>
          <tbody>
            {
        
                pagamentos.map(function(fil){
                    return (
                        <tr key= {fil.id}>
                               <td> {fil.Metodo_Pagamento}</td>
                             <td> {fil.Valor}</td>

                        </tr>

                 );
            })
       
       }
          </tbody>
      
          </table>
    </div>

    );
}

export default Pagamentos;