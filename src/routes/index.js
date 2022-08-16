module.exports = (app) => {
    app.use('/api/products', require('./products'));
    app.use('/api/user', require('./user'));
};
