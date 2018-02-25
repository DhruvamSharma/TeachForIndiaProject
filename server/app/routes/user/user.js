const User = require('../models/user');
module.exports = function(app) {
    app.get('/user/:id', (req,res) => {
        User.find({username:req.params.id}, function(err,user) {
            if(err) {
                console.log(err);
            }

            else {
                res.send(user)
            }
        })
    })

    


    app.post('/new-user/', (req,res) => {
        var char = new User({
            username: req.headers.username,
            userId: req.headers.userId,
            age: req.headers.age,
            contact: req.headers.contact,
            email: req.headers.email,
        });
        char.save(function(err,char){
            if(err) {
                console.log(err);
            }

            else {
                res.send(char);
            }
        });
    })

    app.put('/update-user', (req,res) => {
        res.send('success');
    })

    app.delete('/delete-user', (req,res) => {
        User.remove({username:req.headers.username},function(err,char){
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