import React, { useState } from 'react'
import styled from 'styled-components'

const TagsInput = () => {
  const [tags, setTags] = useState([])

  function handelKeyDown(e) {
    if (e.key !== 'Enter') return
    const value = e.target.value
    if (!value.trim()) return
    setTags([...tags, value])
    e.target.value = ''
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index))
  }

  return (
    <TagsStyled>
      {tags.map((tag, index) => (
        <div className="tag-item" key={index}>
          <span className="text">{tag}</span>
          <span className="close" onClick={() => removeTag(index)}>&times;</span>
        </div>
      ))}
      <input onKeyDown={handelKeyDown} type="text" className='tags-input' placeholder='Press enter to add new tag' />
    </TagsStyled>
  )
}

const TagsStyled = styled.div`
    border: 1px solid antiquewhite;
    padding: 0.5rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5em;

    .tag-item{
        background-color: violet;
        display: inline-block;
        padding: 0.5em 0.75em;
        border-radius: 20px;
    }

    .tag-item .close{
        height: 20px;
        width: 20px;
        background-color: #e64124;
        color: #fff;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-left: 0.5em;
        font-size: 15px;
        cursor: pointer;
    }

    .tags-input{
        flex-grow: 1;
        padding: 0.5em 0;
        outline: none;
        background: transparent;
        border: none;
        border-radius: 10px;
    }
`;
export default TagsInput
