import React from 'react'
import styled from 'styled-components'
import FilterListIcon from '@mui/icons-material/FilterList';
import AllQuestions from './AllQuestions';
import { useLocation, useNavigate } from 'react-router-dom'

const Body = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <BodyStyled>
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <button onClick={() => { navigate('/addQuestion', { state: { user_id: location.state.user_id, user_name: location.state.user_name } }) }} >Add Question</button>
        </div>
        <div className="main-desc">
          <p>all question stats</p>
          <div className="main-filter">
            <div className="main-filter-item">
              <FilterListIcon />
              <label for="filter">
                <select name="filter" id="filter">
                  <option value="timeasc">Time asce</option>
                  <option value="timedes">Time dese</option>
                  <option value="upvote">Upvote</option>
                  <option value="downvote">Downvote</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="question">
            <AllQuestions userdata={{ uid: location.state.user_id, uname: location.state.user_name }} />
            <AllQuestions userdata={{ uid: location.state.user_id, uname: location.state.user_name }} />
            <AllQuestions userdata={{ uid: location.state.user_id, uname: location.state.user_name }} />
          </div>
        </div>
      </div>
    </BodyStyled>
  )
}

const BodyStyled = styled.div`
    display: flex;
    padding: 30px 10px;
    flex: 0.75;
    flex-direction: column;

    .main-container{
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .main-top{
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-evenly;
      margin-bottom: 10px;
    }

    .main-top h2{
      color: #fff;
      font-weight: 500;
      font-size: 30px;
      cursor: default;
    }

    button{
      padding: 20px;
      background-color: #292e41;
      color: #fff;
      border-radius: 15px;
      font-size: 12px;
      font-weight: bold;
      outline: none;
      cursor: pointer;
    }

    select{
        font-size: 16px;
        background-color: black;
        color: white;
    }

    .main-desc{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      font-size: 1.3rem;
      color: #fff;
      padding-bottom: 20px;
      margin-top: 10px;
      opacity: 0.8;
      border-bottom: 1px solid #000;
    }

    .main-filter{
      display: flex;
      align-items: center;
    }

    .main-filter-item{
      display: flex;
      padding: 5px;
      border: 1.5px solid #fff;
      cursor: pointer;
    }

    .questions{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .question{
      display: flex;
      flex-direction: column;
      padding: 15px 0;
      width: 50%;
    }


    @media screen and (max-width: 768px){
      flex: 0.6;
      .main-top{
        justify-content: space-between;
      }

      .main-desc{
        justify-content: space-between;
      }

      .main-filter{
        padding-right: 20px;
      }

      .question{
        width: 95%;
      }

    }
`;

export default Body
