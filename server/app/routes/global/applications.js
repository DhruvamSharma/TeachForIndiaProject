
module.exports = function(app) {

    app.get('/applications', (req,res) => {
        res.send('success');
    });

    app.post('/create-applications', (req,res) => {
        res.send('success');
    })

    app.put('/update-applications', (req,res) => {
        res.send('success');
    })

    app.delete('/delete-applications', (req,res) => {
        res.send('success');
    })

}


