import React from 'react'
import styled from 'styled-components'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import TagsInput from './TagsInput'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Question = () => {
  const [title, setTitle] = React.useState("")
  const [body, setBody] = React.useState("")
  const [tags, setTags] = React.useState([])
  const location = useLocation();
  const navigateTo = useNavigate();

  const handleQuill = (value) => {
    setBody(value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title !== "" && body !== "") {
      const quesJson = {
        "user_id": location.state.user_id,
        "title": title,
        "tags": tags,
        "body": body
      }
      console.log(quesJson)

      await axios.post("http://127.0.0.1:5000/post/create", JSON.stringify(quesJson), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        alert("Quesiton added succesfully")
        navigateTo('/home',{state:{user_id :location.state.user_id, user_name : location.state.user_name }})
      }).catch((err) => {
        console.log(err)
      })
    }

  }

  return (
    <QuestionStyled>
      <div className="add-question-container">
        <div className="head-title">
          <h2>Ask a Question</h2>
        </div>
        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="title">
                <h3>Title</h3>
                <small>Enter the title of the question</small>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Question title...' />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Body</h3>
                <small>Enter the body of the question</small>
                <ReactQuill value={body} onChange={handleQuill} className='react-quill' theme='snow' />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Tags</h3>
                <small>Add upto 10 tags</small>
                <TagsInput value={tags} onChange={(e) => setTags(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <button type='submit' onClick={handleSubmit}>Add Question</button>
      </div>
    </QuestionStyled>
  )
}

const QuestionStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;

  .add-question-container {
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: 800px;
  }

  .head-title {
    display: flex;
    width: 100%;
  }

  .head-title  h2 {
    color: #fff;
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 26px;
  }

  .question-container {
    display: flex;
    padding: 15px;
    background: transparent;
    backdrop-filter: blur(15px);
    border: 1px solid #eee;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(66, 42, 42, 0.19);
  }

  .question-options {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .question-option {
    flex-direction: column;
    width: 100%;
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
  
  .title  small {
    color: #fff;
    font-size: 14px;
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

  button {
    max-width: fit-content;
    margin: 20px 0px;
    background-color: violet;
    padding: 10px;
  }

  button:hover {
    background-color: #fff;
  }

`;

export default Question
