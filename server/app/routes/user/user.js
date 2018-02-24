module.exports = function(app) {

    app.get('/user', (req,res) => {
        res.send('success');
    })

    app.post('/new-user', (req,res) => {
        res.send('success');
    })

    app.put('update-user', (req,res) => {
        res.send('success');
    })

    app.delete('delete-user', (req,res) => {
        res.send('success');
    })
}