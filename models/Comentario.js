module.exports = (sequelize, DataTypes) => {
    
    const comentario = sequelize.define(
        'Comentario',
        {
            texto: DataTypes.TEXT,
            usuarios_id: DataTypes.INTEGER,
            posts_id: DataTypes.INTEGER
        },
        {
            tableName: 'comentarios',
            timestamps: false
        }
    );

    comentario.associate = (models) => {
        comentario.belongsTo(models.Usuario,{as:"autor",foreignKey:"usuarios_id"});
    }

    return comentario;

}

