module.exports = (app,db) => {
    /*var Objectid = require('mongodb').ObjectID;
    app.delete("/notes/:id", (req, res) => {
        const id = req.params.id;
        const details = {'_id':new Objectid(id)};
        db.collection('notes').remove(details, (err, item) => {
            if(err){
                console.log({'error':'An error has occured'});
            }else{
                res.send('note' + ' '+id+' '+'deleted!!!');
            }
                
        })
    })*
    app.post("/notes", function(req, res){
    console.log(req.body);
    // res.send('hello');
    const note = { text: req.body.body, title: req.body.title };
    var collection = db.collection('notes');
    collection.insert(note, (err,result) => {
            if(err){
                console.log({'error':'An error has occured'});
            }else{
                res.send(result.ops[0]);
            }
        })
    })*/
}

