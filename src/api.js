import axios from "axios";
const BASE_URL = "https://hacker-news.firebaseio.com/v0/";

const NewsAPI = {
  topStories: async () => {
    const { data, status } = await axios.get(`${BASE_URL}topstories.json`);
    if (status === 200) {
      return data;
      //   data.map(async id => {
      //     console.log("id", id);
      //     const respStory = await axios.get(
      //       `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      //     );
      //     console.log(respStory.data);
      //   });
    }
    return [];
  },
  storyById: async id => {
    const { data, status } = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    if (status === 200) {
      return data;
    }
    return null;
  }
};

export default NewsAPI;
