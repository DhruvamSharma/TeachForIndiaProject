const Application = require('../models/application');
module.exports = function(app) {

    app.get('/applications/:id', (req,res) => {
        Application.find({userId: req.params.id},function(err,char){
            if(err){
                console.log(err);
            }
            else{
                res.send(char);
            }
        });
    });

    app.post('/create-applications', (req,res) => {
        var char = new Application({
            userId: req.headers.userid,
            programId: req.headers.programid,
            username: req.headers.username
        });
        char.save(function(err,char){
            if(err){
                console.log(err);
            }
            else{
                res.send(char);
            }
        });
    })

    app.put('/update-applications', (req,res) => {
        res.send('success');
    })

    app.delete('/delete-applications', (req,res) => {
        Application.remove({programId:req.headers.programid},function(err,char){
            if(err){
                console.log(err);
            }
            else{
                res.send(char);
            }
        });
    })

}


