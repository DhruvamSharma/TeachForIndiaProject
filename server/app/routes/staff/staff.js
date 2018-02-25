const Staff = require('../models/staff');
module.exports = function(app) {

    app.get('/staff/:id', (req,res) => {
        Staff.find({username:req.params.id}, function(err,user) {
            if(err) {
                console.log(err);
            }

            else {
                res.send(user);
            }
        })
        //res.send('success');
    })

    app.post('/new-staff', (req,res) => {
        var char = new Staff({
            staffId: req.headers.staffid,
            username: req.headers.username,
            programsCreated: req.headers.programscreated,
            age: req.headers.age,
            contact: req.headers.contact
        });
        char.save(function(err,char){
            if(err){
                console.log(err);
            }
            else{
                res.send(char);
            }
        });
        //res.send('success');
    })

    app.put('/update-staff', (req,res) => {
        res.send('success');
    })

    app.delete('/delete-staff', (req,res) => {
        Staff.remove({username:req.headers.username},function(err,char){
            if(err) {
                console.log(err);
            }

            else {
                res.send(char);
            }
        });
        //res.send('success');
    })
}