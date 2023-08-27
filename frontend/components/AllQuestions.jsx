import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react';
import axios from 'axios'


const AllQuestions = ({userdata}) => {
  const [getPostdetails, setPostdetails] = useState({})
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const fetchData = async () => {
    setError("")
    setLoading(true)
    if(getPostdetails=={}){
      setError("Loading")
    }
    else{
      setLoading(false)
      try {
        var userPostRoute = 'http://127.0.0.1:5000/user/posts?'
        axios.get(userPostRoute+'user_id='+ userdata['uid']+'&page=1&order_by=time_desc').then(response => {
          setPostdetails(response)
        }).catch(err => {
          console.log(err)
        })
      } catch (err) {
        console.log(err)
      }
    }
  };

  useEffect(( ) => {
    fetchData();
  },[]);

  return (
    <AllQuesStyled>
      {
          error !== '' && (<p style={{
            color: 'white',
            fontSize: '18px'
          }}>{error}</p>)
        }
      <div className="all-question-container">
        <div className="all-question-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>vote(s)</span>
            </div>
            <div className="all-option">
              <p>0</p>
              <span>Answers(s)</span>
            </div>
            <div className="all-option">
              <small>0 view(s)</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link to='/viewQuestion'>The tielt of the question</Link>
          <div style={{ width: "90%" }}>
            <div className='answer'>this is answer</div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <span className="question-tags">First-tag</span>
            <span className="question-tags">Second-tag</span>
            <span className="question-tags">Third-tag</span>
          </div>
        </div>
        <div className="author">
          <div className="author-details">
            <Avatar />
            <p>{userdata['uname']}</p>
          </div>
          <small>timestamp</small>
        </div>
      </div>
    </AllQuesStyled>
  )
}

const AllQuesStyled = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #eee;

  .all-question-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .all-question-left{
    display: flex;
    margin-right: 30px;
  }

  .all-options{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #eee;
  }

  .all-option{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }

  .all-option p{
    font-size: 20px;
  }

  .all-option span{
    font-size: 18px;
  }

  .question-answer{
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .question-answer a{
    text-decoration: none;
    font-size: 25px;
    margin-bottom: 10px;
    color: antiquewhite;
  }

  .question-answer a:hover{
    color: azure;
  }

  .answer{
    font-size: 20px;
    color: gainsboro;
  }

  .question-tags{
    margin: 10px 5px;
    padding: 5px 10px;
    background-color:violet ;
    color: #201313;
    border-radius: 12px;
  }

  .author{
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .author small{
    color: #fff;
    margin-top: 15px;
  }
 
  .author-details p{
    font-size: 20px;
    color: azure;
    margin-top: 5px;
  }

  @media screen and (max-width: 768px){

    .all-question-container{
      flex-direction: column-reverse;
    }

    .all-question-left{
      flex-direction: column;
    }

    .all-options{
      flex-direction: row;
      justify-content: space-around;
      margin-top: 10px;
    }

    .author{
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .author-details{
      display: flex;
      flex-direction: row;
    }
      
    .author-details p{
      margin-left: 10px;
    }

  }

`;
export default AllQuestions
