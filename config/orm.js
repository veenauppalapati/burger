


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
    insert: function(table, columns, value, cb){
        
        var queryString = `INSERT INTO ${table} (${columns.toString()}) VALUES (${value.toString()})`;
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        })
    },

    //update
   
}

