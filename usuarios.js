/*
 * GET users listing.
 */

exports.list = function(req, res){

  req.connection(function(err,connection){
       
        var query = connection.query('SELECT * FROM usuario',function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('usuario',{page_title:"Usuarios - Index.js",data:rows});
                
           
         });
         
         console.log(query.sql);
    });
  
};
