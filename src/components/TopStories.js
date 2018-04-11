import React, { Component } from "react";

import NewsAPI from "../api";
import {
  MainStories,
  RowStory,
  RowStoryScore,
  RowStoryTitle
} from "../styledComponents";

class TopStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      offset: 0
    };
    this.renderStories = this.renderStories.bind(this);
  }

  componentWillMount = () => {
    console.log("This State", this.state.stories);
    let arrPromise = [];
    this.fetchStories();
  };

  fetchStories() {
    NewsAPI.topStories().then(data => {
      const { offset } = this.state;
      data.slice(offset, offset + 20).map(item => {
        // arrPromise.push(NewsAPI.storyById(item));
        NewsAPI.storyById(item).then(storyData =>
          this.setState({ stories: [...this.state.stories, storyData] }, () => {
            this.setState({ offset: offset + 21 });
          })
        );
      });
    });
  }

  renderStories() {
    return this.state.stories.map(item => {
      return (
        <RowStory key={item.id} style={{ opacity: 1 }}>
          <RowStoryScore>
            <p>{item.score}</p>
          </RowStoryScore>
          <RowStoryTitle>{item.title}</RowStoryTitle>
        </RowStory>
      );
    });
  }

  render() {
    return (
      <MainStories>
        {this.renderStories()}

        {this.state.stories.length && (
          <RowStory onClick={this.fetchStories.bind(this)}>Load More</RowStory>
        )}
      </MainStories>
    );
  }
}

export default TopStories;
