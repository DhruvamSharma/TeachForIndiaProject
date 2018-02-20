module.exports = function(app) {
    

    /* GET api listing. */
    app.get('/', (req, res) => {
        res.send('api works');
    });

    app.get('/dashboard', (req,res) => {
        res.send('hello');
    });

    app.get('/manage-applications', (req,res) => {
        res.send('hello');
    });

    app.get('/landing', (req,res) => {
        res.send('hello');
    });

    // Catch all other routes and return the index file
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname,'../../', 'dist/index.html'));
    });
  
    
}