// Criar e exportar uma função
// Essa função recebe dois parametros: sequelize, DataTypes
// A função retorna um objeto que é definido a partir do sequelize.define

module.exports = (sequelize, DataTypes) => {

    const post = sequelize.define(
        'Post',
        {
            texto: DataTypes.STRING(100),
            img: DataTypes.STRING(100),
            usuarios_id: DataTypes.INTEGER,
            n_likes: DataTypes.INTEGER
        },
        {
            tableName: 'posts',
            timestamps: false
        }
    );

    post.associate = (models) =>{
        post.belongsTo(models.Usuario,{as:'usuario', foreignKey:'usuarios_id'});
        post.hasMany(models.Comentario,{as:'comentarios', foreignKey:'posts_id'});
        post.belongsToMany(
            models.Usuario,{
                as:'curtiram',
                through:'curtidas',
                foreignKey:'posts_id',
                otherKey:'usuarios_id',
            }
        )
    }

    return post;

}