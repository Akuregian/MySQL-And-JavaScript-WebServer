This is a example on how to setup a simple web based server using mySql and Javascript

**If You Clone This Repo: Run the Command 'npm i' To install all required packages**

1) Run the Command 'sequelize init' in the terminal to Generate: Config, Migrations, Models and Seeders Directories
     npx sequelize init ---> on raspberry Pi.
   - [If No Sequelize] run: npm install sequelize -g
2) Run the Command 'npm init' to generate your package.json file. This is used to install all packages need for the project.
3) Run the Command 'npm i sequelize express mysql2' which adds these dependencies too package.json

    * be sure too set the password inside /Config/Config.json : for the mySql server to loggin [development section]

---- Basic Setup Complete ----

4) Now you want to create your mySql Database Model..
    - This can be done inside the models Directory; this will be a .js file
    ```javascript
    module.exports = function(sequelize, DataTypes) { // we must export the model
    const Model = sequelize.define("Model", { // set the var too the model defined
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
}  ```

5) Create your Server.js file
    - This is where you create your get, post, put and delete methods
6) Create a new Directory:
    - Add the Files --> -index.html          : this will render stuff too the web page
                    --> -service-worker.js   : service worker to work even if offline
                    --> -manifest.json       : description of the app

7) Create your mySql database. Make sure the Database matches the name 'developement' name in the config.json file
    - Start Your My Sql 

8) Type the Command 'nodemon server.js' which will host your app at localhost:8080
