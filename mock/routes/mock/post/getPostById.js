module.exports.getPostById = (() => {
  const route = '/post/:id';

  const controller = (req, res) => {
    console.log(`[getPostById]`);
    // const { id } = res.body;

    return res.status(201).send({
      res: 'getPostById'
    });
  };

  return {
    mapRoute: server => server.get(route, controller)
  };
})();
