import { DataTypes } from "sequelize";
import mysql from "./mysql.js";


const Cliente = mysql.define('Cliente', {
    Nome: DataTypes.STRING,
    Telefone: DataTypes.TEXT,
    Email: DataTypes.TEXT,
    Endereco: DataTypes.TEXT,
    
});

const Categoria = mysql.define('Categoria',{
    Especificacao: DataTypes.STRING
});

const Produto = mysql.define('Produto', {
    Nome: DataTypes.STRING,
    Estoque: DataTypes.INTEGER,
    Descricao: DataTypes.TEXT,
    Preco: DataTypes.DECIMAL,


});


const Pedido = mysql.define('Pedido', {
 
    Status: DataTypes.TEXT,
    Descricao: DataTypes.TEXT,
    Total: DataTypes.DECIMAL,
    Data_Pagamento: DataTypes.DATEONLY

});
const Pagamento = mysql.define('Pagamento', {

    Metodo_Pagamento: DataTypes.TEXT,
    Valor: DataTypes.DECIMAL
});

const Item_Pedido = mysql.define('Item_Pedido', {
 
    Quantidade: DataTypes.TEXT,
    Preco_Unitario: DataTypes.DECIMAL

});

Produto.hasMany(Categoria);
Categoria.belongsTo(Produto);

Cliente.hasMany(Pedido);
Pedido.belongsTo(Cliente);

Item_Pedido.belongsTo(Produto);
Produto.belongsTo(Item_Pedido);

Pedido.belongsTo(Item_Pedido);
Item_Pedido.hasMany(Pedido);

Pagamento.hasMany(Pedido);
Pedido.belongsTo(Pagamento);

mysql.sync();

export {Cliente, Categoria, Produto, Pedido, Pagamento, Item_Pedido};