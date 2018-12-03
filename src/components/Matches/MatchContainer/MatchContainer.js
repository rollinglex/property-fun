import React, { Component } from "react";

import CardsContainerStyle from "./MatchContainerStyle";
import Match from "./../MatchPresentational/Match";
import { ModalContainer } from "../../Helpers";
import { userLikeLocalStorage } from "../../../general-helpers";

import testData from "../../../resources/sampleData";

class MatchesContainer extends Component {
  //this.state.userLikes is given the value of a new Set in componentDidMount to prevent duplicate ids.//
  state = {
    matchedProperties: [],
    showModal: false,
    modalData: {},
    modalOpenClickPosition: 0,
    userLikes: []
  };
  toggleModalHandler = (e, modalData) => {
    e.stopPropagation();
    const clickPosition = e.currentTarget.offsetTop;
    this.setState(prevState => ({
      ...prevState,
      showModal: !prevState.showModal,
      modalOpenClickPosition: clickPosition,
      modalData
    }));
  };
  toggleLikeHandler = (e, id) => {
    e.stopPropagation();
    if (this.state.userLikes.has(id)) {
      this.setState(prevState => {
        prevState.userLikes.delete(id);
        userLikeLocalStorage().updateLocalStorage(prevState.userLikes);
        return {
          ...prevState,
          userLikes: prevState.userLikes
        };
      });
    } else {
      this.setState(prevState => {
        prevState.userLikes.add(id);
        userLikeLocalStorage().updateLocalStorage(prevState.userLikes);
        return {
          ...prevState,
          userLikes: prevState.userLikes
        };
      });
    }
  };
  componentDidMount() {
    //imitates fetching data
    const matchedPropertyData = testData.reduce((acc, match) => {
      const {
        id,
        property: name,
        pricepermonth: pricePerMonth,
        location,
        thumbnail
      } = match;
      return [
        ...acc,
        {
          id,
          name,
          pricePerMonth,
          location,
          thumbnail
        }
      ];
    }, []);

    const likedPropertiesInLocalStorage = userLikeLocalStorage().getLocalStorage()
      ? userLikeLocalStorage().getLocalStorage()
      : [];
    this.setState(prevState => ({
      ...prevState,
      matchedProperties: matchedPropertyData,
      userLikes: new Set(likedPropertiesInLocalStorage)
    }));
  }
  render() {
    const {
      matchedProperties,
      showModal,
      modalData,
      modalOpenClickPosition
    } = this.state;
    return (
      <CardsContainerStyle>
        <header>
          <p>Your Results</p>
        </header>
        <ModalContainer
          showModal={showModal}
          modalData={modalData}
          openModalPosition={modalOpenClickPosition}
          toggleModal={this.toggleModalHandler}
          modalType="match"
        />
        {matchedProperties.map(match => {
          const userLikes = this.state.userLikes;
          const liked = userLikes.has(match.id);
          return (
            <Match
              toggleModal={this.toggleModalHandler}
              toggleLikeHandler={this.toggleLikeHandler}
              isLiked={liked}
              key={match.id}
              property={{ ...match }}
            />
          );
        })}
      </CardsContainerStyle>
    );
  }
}

export default MatchesContainer;
