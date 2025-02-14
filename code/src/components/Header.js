import React from "react";
import styled from "styled-components/macro";
import moment from "moment";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useSelector } from "react-redux";
import { mainColor } from "./style/colors";

export const Header = () => {
  const date = new Date();
  const todoList = useSelector((store) => store.todo.todos);
  const completedList = todoList.filter((todo) => todo.completed);

  // Function that checks amount completed quests.
  const getPercentage = () => {
    if (completedList.length === 0) {
      return 0;
    } else if (todoList.length === 0) {
      return 0;
    } else {
      return Math.round((completedList.length / todoList.length) * 100);
    }
  };

  return (
    <HeaderContainer>
      <TitleDateContainer>
        <Title>Your Todo's</Title>
        <DateContainer>{moment(date).format(`MMM D, YYYY`)}</DateContainer>
      </TitleDateContainer>
      <HeaderDetailContainer>
        <AmountOfTodos>
          <AmountNumber>{todoList.length}</AmountNumber>
          <AmountText>Total</AmountText>
        </AmountOfTodos>
        <AmountOfTodos>
          <AmountNumber>{completedList.length}</AmountNumber>
          <AmountText>Done</AmountText>
        </AmountOfTodos>

        <PercentageContainer>
          <ProgressbarContainer>
            <CircularProgressbar
              value={getPercentage()}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "butt",
                pathTransition: "none",
                pathColor: mainColor,
                trailColor: `#fcf4f0`,
              })}
            />
          </ProgressbarContainer>
          <PercentageText>{getPercentage()}%</PercentageText>
        </PercentageContainer>
      </HeaderDetailContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  min-height: 35vh;
  width: 100%;
  background-image: url("./pictures/HeaderPicture.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;
  display: grid;
  grid-template-columns: 1fr auto;
  color: white;
`;

const TitleDateContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  border-bottom: 3px ${mainColor} solid;
`;

const Title = styled.h1`
  margin: 65px 0 10px 10px;
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 60px;
  }
  @media (min-width: 1025px) {
    font-size: 60px;
  }
`;

const DateContainer = styled.span`
  margin: 0 0 10px 10px;
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 26px;
  }
  @media (min-width: 1025px) {
    font-size: 26px;
  }
`;

const HeaderDetailContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  background-color: rgb(0, 0, 0, 0.3);
  padding: 0 10px 0px 10px;
  min-width: 110px;
  @media (min-width: 668px) and (max-width: 1024px) {
    min-width: 250px;
  }
  @media (min-width: 1025px) {
    min-width: 350px;
  }
`;

const AmountNumber = styled.span`
  font-size: 30px;
  @media (min-width: 1025px) {
    font-size: 40px;
  }
`;

const AmountOfTodos = styled.div`
  margin: 0 30px 0 0;
  display: grid;
  grid-template-rows: 1fr auto auto;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
`;

const PercentageContainer = styled.div`
  display: grid;
  justify-content: center;
  column-gap: 10px;
  grid-template-columns: auto auto;
  align-items: center;
  margin-bottom: 13px;
  margin-top: 10px;
`;

const AmountText = styled.span`
  color: rgb(255, 255, 255, 0.5);
  @media (min-width: 1025px) {
    font-size: 20px;
  }
`;

const ProgressbarContainer = styled.div`
  width: 20px;
  height: 20px;
  @media (min-width: 1025px) {
    width: 30px;
    height: 30px;
  }
`;

const PercentageText = styled.span`
  font-size: 20px;
  @media (min-width: 1025px) {
    font-size: 30px;
  }
`;
