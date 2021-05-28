//create api instance 
//add api path - /api/storyar/getAllStory

import { axiosInstance, errorHelper, generateSuccess } from './axiosInstance';

class StoryArAPI {

  /**
   * 
   * @returns data (stories) from the api
  */
  getStories() {
    return axiosInstance.get('storyar/getAllStory').then(response => {
      return generateSuccess(response.data);
    }).catch(error => errorHelper(error, "getAllStory"));
  }

  addStory(payload) {
    return axiosInstance.post('storyar/addStory', payload).then(response => {
      return generateSuccess(response.data);
    }).catch(error => errorHelper(error, "addStory"));
  }
}

const instance = new StoryArAPI();
export default instance;