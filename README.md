This is a example on how to setup a simple web based server using mySql and Javascript

1) Run the Command 'sequelize init' in the terminal to Generate: Conif, Migrations, Models and Seeders Directories
2) Run the Command 'npm init' to generate your package.json file. This is used to install all packages need for the project.
3) Run the Command 'npm i sequelize express mysql2' which adds these dependencies too package.json

    * be sure too set the password inside /Config/Config.json : for the mySql server to loggin [development section]

---- Basic Setup Complete ----

4) Now you want to create your mySql Database Model..
    - This can be done inside the models Directory; this will be a .js file
    ```javascript
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
}
    ```