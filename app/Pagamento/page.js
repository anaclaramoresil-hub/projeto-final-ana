import {Pagamento} from "../../database/table";




async function Pagamentos(){
    const pagamentos = await Pagamento.findAll();
    return (
    <>
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
    </>

    );
}

export default Pagamentos;