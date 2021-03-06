const fs   = require('fs');
const contetMaker = require('./contentMaker');

module.exports = {

    //********This function generates all the files for declaring Mongoose Models */
    makeModels: function(model_list){
        
        model_list.map((item, index) => {
            const content = contetMaker.modelsContent(item);
            fs.writeFile(`./models/${item}.js`, content, (err) => {
                if (err) {
                    console.log("\x1b[31m",err);
                }
            })
            console.log("\x1b[32m",`Generated file ${item}.js`)
        })
    },

    //*********This function generates html views********/
    makeViews: function(view_list){

        view_list.map((item, index) => {
            const content = contetMaker.viewsContent(item);
            fs.writeFile(`./views/${item}.html`, content, (err) => {
                if (err) {
                    console.log("\x1b[31m",err);
                }
            })
            console.log("\x1b[32m",`Generated file ${item}.html`)
        })
    },

    //**********This function generates the code for declaring controllers */
    makeControllers: function(controller_config){
        const controllerFiles = Object.keys(controller_config);   
        controllerFiles.map((item, index) => {
            const content = contetMaker.controllerContent(controller_config[item]);
            fs.writeFile(`./controllers/${item}.js`, content, (err) => {
                if (err) {
                    console.log("\x1b[31m",err);
                }               
            })
            console.log("\x1b[32m", `Generated file ${item}.js`)
        })
        
    },

    //**********This function writes the basic route declaration**********/
    
    makeRoutes: function(route_config){
        const routeFiles = Object.keys(route_config);
        routeFiles.map((item, index) => {
            const content = contetMaker.routesContent(route_config[item]);
            fs.writeFile(`./routes/${item}.js`, content, err => {
                if (err){
                    console.log("\x1b[31m",err);
                }
            })
            console.log("\x1b[32m", `Generated file ${item}.js`)
        })
    }
}