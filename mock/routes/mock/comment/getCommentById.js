module.exports.getCommentById = (() => {
  const route = '/comment/:id';

  const controller = (req, res) => {
    console.log('[getCommentById]');

    // const { id } = res.body;

    return res.status(201).send({
      res: 'getCommentById'
    });
  };

  return {
    mapRoute: server => server.get(route, controller)
  };
})();
