import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Avatar } from '@mui/material';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const ViewQuestion = () => {
  return (
    <ViewQuesStyled>
      <div className="main-container">
        <div className="main-top">
          <h2>This is question title</h2>
          <Link to='/addQuestion'><button>Add Question</button></Link>
        </div>
        <div className="main-desc">
          <div className="info">
            <p>timestamp</p>
            <p><span>43</span>view(s)</p>
          </div>
        </div>
        <div className="all-question">
          <div className="all-question-container">
            <div className="all-question-left">
              <div className="all-options">
                <p className="arrow">&#9650;</p>
                <p className="arrow">0</p>
                <p className="arrow"> &#9660;</p>
              </div>
              <div className="question-answer">
                <p>this is test question body</p>
              </div>
            </div>
          </div>
          <div className="author">
            <div className="author-details">
              <Avatar />
              <p>name</p>
            </div>
            <small>Timestamp</small>
          </div>
        </div>
          <p className='answer-count'>number of answers</p>
        <div className="all-question">
          <div className="all-question-container">
            <div className="all-question-left">
              <div className="all-options">
                <p className="arrow">&#9650;</p>
                <p className="arrow"> 0</p>
                <p className="arrow"> &#9660;</p>
              </div>
              <div className="question-answer">
                <p>this is test answer body</p>
              </div>
            </div>
          </div>
          <div className="author">
            <div className="author-details">
              <Avatar />
              <p>name</p>
            </div>
            <small>Timestamp</small>
          </div>
        </div>
        <div className="title">
          <h3>Your answer</h3>
          <ReactQuill className='react-quill' theme='snow' />
        </div>
        <button className='quill-btn'>Post answer</button>
      </div>
    </ViewQuesStyled>
  )
}

const ViewQuesStyled = styled.div`
  display: flex;
  padding: 30px 10px;
  flex: 0.75;
  flex-direction: column;
  align-items: center;

  .main-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 800px;
  }
  
  .main-top{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .main-top h2{
    color: #fff;
    font-weight: 500;
    font-size: 25px;
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
  
  .main-desc{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 1.1rem;
    color: #fff;
    padding-bottom: 20px;
    margin-top: 10px;
    opacity: 0.8;
    border-bottom: 1px solid #fff;
  }
  
  .info {
    display: flex;
    align-items: center;
    font-size: small;
  }
  
  .info p {
    font-size: 15px;
    color: #fff;
    margin: 0 20px;
  }
  
  .info p span {
    color: #eee;
    margin: 0 5px;
  }
  
  .all-question{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    border-bottom: 1px solid #fff;
  }
  
  .all-question-container{
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: 800px;
  }
  
  .all-question-left{
    display: flex;
  }
  
  .question-answer{
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
  }

  .arrow {
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    color: #fff;
  }
  
  .all-options  .MuiSvgIcon-root {
    color: rgba(0, 0, 0, 0.25);
    font-size: large;
    margin: 5px 0;
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
  
  .answer-count{
    color: #fff;
  }
  
  .title {
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    font-size: 0.9rem;
  }
  
  .title  h3 {
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  } 
  
  .title  input {
    margin: 5px 0px;
    padding: 10px;
    background: transparent;
    border: 1px solid azure;
    border-radius: 3px;
    outline: none;
  }

  .title  input::placeholder {
    color: #ddd;
  }

  .title  input:focus {
    border: 1px solid #0054ff;
    box-shadow: 0 4px 8px 0 #0055ff23, 0 6px 20px 0 #0055ff11;
  }

  .quill {
    height: 100%;
  }

  .react-quill {
    margin: 10px 0;
    border-radius: 10px;
  }
  
  .ql-editor {
    height: 200px;
  }

  .quill-btn {
    max-width: fit-content;
    margin: 20px 0px;
    background-color: violet;
    padding: 10px;
  }

  .quill-brn:hover {
    background-color: #fff;
  }
    
  @media screen and (max-width: 768px){

    .all-question{
      margin: 0px;
    }

    .question-answer{
      margin-left:10px ;
    }
    .answer-count{
      margin-top: 20px;
    }
  }
`;

export default ViewQuestion
