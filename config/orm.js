
var ormFunctions= {
    // select
    selectAll: function(table, cb){
        var queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    // insert
    // insert: function(table, value){
    //     var queryString = 

    // }
    //update
}

