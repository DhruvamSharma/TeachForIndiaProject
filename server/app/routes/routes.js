module.exports = function(app) {
    

    /* GET api listing. */
    app.get('/', (req, res) => {
        res.send('api works');
    });

    app.get('/dashboard', (req,res) => {
        res.send('hello');
    });
  
    
}