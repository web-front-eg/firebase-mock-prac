import Axi from '../src/api/axios';

class MockService {
  async GET_getPostById(id) {
    const response = await Axi.methods.get(`posts/${id}`);
    
    return response.data;
  }

  async GET_getCommentById(id) {
    const response = await Axi.methods.get(`comments/${id}`);

    return response.data;
  }

  async GET_getProfileByName(name) {
    if (typeof name !== 'string') {
      throw new Error('name must be type of string');
    }

    const response = await Axi.methods.get('profile');

    return response.data;
  }
}

export default new MockService();
