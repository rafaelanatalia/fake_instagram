module.exports = (sequelize, DataTypes) => {

    const usuario = sequelize.define(
        'Usuario',
        {
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING(256),
        },{
            tableName:"usuarios",
            timestamps:false
        }
    )

    return usuario;
    
}