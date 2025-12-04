import { Categoria } from "../../database/table";
import { redirect } from "next/navigation";

async function DeletaCategoria(formData){
  'use server';
  const id = formData.get('id');
  const categoria = await Categoria.findByPk(id);
   await categoria.destroy();
  redirect('/Categoria');


}

async function Categorias() {
    const categorias = await Categoria.findAll();
    return (
        <>
        <h1>Categorias</h1>
        <a href= "/Categoria/novoCat"> Categorias </a>
        <table border = "1" >
        <thead>

            <tr>
            <th>Especificacao</th>
            </tr>

        </thead>
        <tbody>
      {
        categorias.map(function(fill){
          return (

              <tr key = {fill.id}>
                <td>{fill.Especificacao}</td>
                <td>
                <form action= {'/Categoria/edita'}>
                              <input type= "hidden" name= "id" defaultValue= {fill.id}/>
                              <button>Editar</button>
                            </form>
                            
                            <form action= {DeletaCategoria}>
                              <input type= "hidden" name= "id" defaultValue= {fill.id}/>
                              <button> Excluir</button>
                            </form>
                            
                </td>
              </tr>

          );


        })

      }
        </tbody> 
        </table>   
           </>
    );
}

export default Categorias;