module.exports = (app) => {
  app.post('/post/new', (req,res) => {
    console.log(req.body);
  });
};
