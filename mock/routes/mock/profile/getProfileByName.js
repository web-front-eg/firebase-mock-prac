module.exports.getProfileByName = (() => {
  const route = '/profile/';
  
  const controller = (req, res) => {
    console.log(`[getProfileByName]`);
    // const { id } = res.body;

    return res.status(201).send({
      res: 'getProfileByName'
    });
  };

  return {
    mapRoute: server => server.get(route, controller)
  };
})();
