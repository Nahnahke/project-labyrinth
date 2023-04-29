/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { game, generateMoves } from 'reducers/game';
import styled from 'styled-components/macro';

const GameBoardWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 8px 0 0 0;
background: rgba(255,255,255, 0.5);
`;

const Description = styled.h1`
font-size: 18px;
color: var(--h1-color);
font-weight: 500;
text-align: center;
margin: 10px 0;
text-shadow: 3px 3px 3px #bfff00;
max-width: 70vw;
`;

const GoBtn = styled.button`
background: var(--btn-color);
border-radius: 20px;
padding: 10px 20px;
margin-top: 10px;
border: none;
font-family: 'Kanit', sans-serif;
font-weight: 900;
letter-spacing: 7px;
text-transform: uppercase;
color: var(--text2-color);
&:hover {
  background: var(--hover-color);
  color: var(--text-color);
  cursor: pointer;
} 
`;

const ActionDescription = styled.div`
color: var(--text-color);
font-size: 13px;
font-weight: 300;
text-align: center;
background: rgba(255,255,255, 0.6);
margin: 10px;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 70vw;
box-shadow: 3px 5px 44px -7px rgba(0,0,0,0.75);
-webkit-box-shadow: 3px 5px 44px -7px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 5px 44px -7px rgba(0,0,0,0.75);
`;

const RestartBtn = styled.button`
background: var(--Rebtn-color);
border-radius: 0 0 20px;
padding: 8px 12px;
margin-top: 0;
border: none;
font-family: 'Kanit', sans-serif;
font-size: 10px;
font-weight: 900;
letter-spacing: 2px;
text-transform: uppercase;
color: var(--Rehover-color);
&:hover {
  background: var(--Rehover-color);
  color: var(--text-color);
  cursor: pointer;
} 
`;

export const GameBoard = () => {
  const description = useSelector((store) => store.game.description);
  const actions = useSelector((store) => store.game.actions);
  const dispatch = useDispatch();

  const onRestartButton = () => {
    dispatch(game.actions.restartGame());
  };

  return (
    <>
      <RestartBtn restart type="button" onClick={onRestartButton}>
        Restart Game
      </RestartBtn>
      <GameBoardWrapper>
        <Description>{description}</Description>
        <div className="CompassWrapper">
          {actions.length > 0 && actions.map((action) => (
            <>
              <ActionDescription>
                {action.description}
                <GoBtn
                  className={action.direction}
                  direction={action.direction}
                  key={action.direction}
                  onClick={() => dispatch(generateMoves(action.direction))}>
                  {action.direction}
                </GoBtn>
              </ActionDescription>
            </>
          ))}
        </div>
      </GameBoardWrapper>
    </>
  );
};
