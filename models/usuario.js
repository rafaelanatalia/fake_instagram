module.exports = (sequelize, DataTypes) => {

    return sequelize.define(
        'Usuario',
        {

            id: {
                type: DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true,
                allowNull:false
            },

            nome: {
                type: DataTypes.STRING (100),
                allowNull:false
            },
            email: {
                type: DataTypes.STRING (100),
                allowNull:false
            },
            senha:{
                type: DataTypes.STRING (60),
                allowNull:false
            },
          


        },
        {
            tableName: "Usuarios",
            timestamps:false
        }

    )

}