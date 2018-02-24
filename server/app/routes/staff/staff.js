module.exports = function(app) {

    app.get('/staff', (req,res) => {
        res.send('success');
    })

    app.post('/new-staff', (req,res) => {
        res.send('success');
    })

    app.put('update-staff', (req,res) => {
        res.send('success');
    })

    app.delete('delete-staff', (req,res) => {
        res.send('success');
    })
}