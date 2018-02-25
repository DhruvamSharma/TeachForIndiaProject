module.exports = function(app) {
    

    /* GET api listing. */
    app.get('/', (req, res) => {
        res.send('api works');
    });

    app.get('/dashboard', (req,res) => {
        res.send('hello');
    });

    app.get('/applications', (req,res) => {
        res.send('hello');
    });

    app.get('/user', (req,res) => {
        res.send('success');
    })

    app.get('/staff', (req,res) => {
        res.send('success');
    })

    app.get('/application', (req,res) => {
        res.send('success');
    })

    app.get('/feedback', (req,res) => {
        res.send('success');
    })

    app.get('/landing', (req,res) => {
        res.send('hello');
    });

    require('./global/applications.js')(app);
    require('./user/user.js')(app);
    require('./staff/staff.js')(app);
    require('./global/feedbacks.js')(app);

    // Catch all other routes and return the index file
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname,'../../', 'dist/index.html'));
    });
  
    
}