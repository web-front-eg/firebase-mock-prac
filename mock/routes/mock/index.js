const { getCommentById } = require('./comment/getCommentById');
const { getPostById } = require('./post/getPostById');
const { getProfileByName } = require('./profile/getProfileByName');

module.exports.mockServices = {
  getCommentById,
  getPostById,
  getProfileByName
};
