module.exports = function(sequelize, DataTypes) {
    const Model = sequelize.define("Model", {
        "description" : {
            type: DataTypes.STRING,
            allowNull: false
        },
        "State" : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
            defualtValue: false
        },
        "location" : {
            type : DataTypes.STRING,
            allowNull : false
        }
    })
    return Model;
}