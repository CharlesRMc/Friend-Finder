var mysql = require('mysql');
var sql = {
    con: mysql.createConnection({
        host: "Localhost",
        user: "root",
        password: "MyNewPass",
        //database: "friends_db"
    })
}
//connect to mysql
sql.con.connect(function(err) {
    if (err) { throw err; }
    console.log("Connected to Database!");
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
});
});