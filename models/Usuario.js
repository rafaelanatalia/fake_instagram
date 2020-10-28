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
    );

    usuario.associate = (models) => {
        usuario.hasMany(models.Post,{as:"posts",foreignKey:'usuarios_id'});
        usuario.belongsToMany(
            models.Post,
            {
                as:"curtiu",
                through:"curtidas", // atraves
                foreignKey:"usuarios_id",
                otherKey: "posts_id"
            }
        ); ; // Feito pelo professor depois da aula
    }

    return usuario;
    
}
