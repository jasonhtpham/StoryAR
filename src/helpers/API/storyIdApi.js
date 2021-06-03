//creating another api instance 
//add new api path - /api/storyar/getAllStory

// import { axiosInstance, errorHelper, generateSuccess } from './axiosInstance';

// class StoryIdAPI {

//   /**
//    * 
//    * @returns data (story by ID) from the api
//   */
//   getStory() {
//     return axiosInstance.get('storyar/getStory/{storyId}').then(response => {
//       return generateSuccess(response.data);
//     }).catch(error => errorHelper(error, "getStory"));
//   }

//   // addStory(payload) {
//   //   return axiosInstance.post('storyar/addStory', payload).then(response => {
//   //     return generateSuccess(response.data);
//   //   }).catch(error => errorHelper(error, "addStory"));
//   // }
// }

// const instance = new StoryIdAPI();
// export default instance;