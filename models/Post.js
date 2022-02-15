module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'Post',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            texto:{
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            img:{
                type: DataTypes.STRING(100)
            },
            usuarios_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            n_likes: {
                type: DataTypes.INTEGER
            }
        },
        {
            tableName: 'posts',
            timestamps: false
        }
    )
}
