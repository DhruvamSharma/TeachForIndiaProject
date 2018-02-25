const Feedback = require('../models/feedback');
module.exports = function(app) {

    app.get('/feedback/:id', (req,res) => {
        Feedback.find({programId:req.params.id},function(err,char){
            if(err){
                console.log(err);
            }
            else{
                res.send(char);
            }
        });
    })

    app.post('/new-feedback', (req,res) => {
        var char = new Feedback({
            userId: req.headers.userid,
            programId: req.headers.programid,
            replied: req.headers.replied,
            createdOn: req.headers.createdon,
            details: req.headers.details
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

    app.put('/update-feedback', (req,res) => {
        res.send('success');
    })

    app.delete('/delete-feedback', (req,res) => {
        Feedback.remove({programId:req.headers.programid},function(err,char){
            if(err){
                console.log(err);
            }
            else{
                res.send(char);
            }
        });
    })
}