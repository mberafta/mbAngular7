const apiRoutes = require('../api/routes/apiRoutes');

module.exports = (app) => {
  app.use('/api', apiRoutes);
  app.get('*', (req, res) => {
    res.sendFile('./mb-ng7-output/index.html');
  });
};
