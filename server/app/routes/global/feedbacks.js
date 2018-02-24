module.exports = function(app) {

    app.get('/feedback', (req,res) => {
        res.send('success');
    })

    app.post('/new-feedback', (req,res) => {
        res.send('success');
    })

    app.put('update-feedback', (req,res) => {
        res.send('success');
    })

    app.delete('delete-feedback', (req,res) => {
        res.send('success');
    })
}