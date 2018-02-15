var ormFunctions = require('../config/orm.js');

var burgermodelFunctions = {
    all: function(table, cb){
        ormFunctions.selectAll(table, function(result){
            cb(result);
        });
    },
    insert: function(table, columns, value, cb){
        ormFunctions.insert(table, function(result){
            cb(result);
        });
    },
    update: function(table, column, value, condition, cb){
        ormFunctions.update(table, function(result){
            cb(result);
        });
    },
}