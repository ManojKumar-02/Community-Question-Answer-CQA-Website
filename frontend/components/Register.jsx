import { Lock, Person } from '@mui/icons-material'
import React ,{useState} from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [getauthdetails, setAuthdetails] = useState({})
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("")
    setLoading(true)
    if(username === ''|| password===''){
      setError("Enter username and password")
      setLoading(false)
    } else{
      try {
        var registerRoute = 'http://127.0.0.1:5000/register?'
        axios.post(registerRoute+'username=' + username + '&password=' + password).then(response => {
          setAuthdetails(response)
          if(!getauthdetails.data['register_status']){
            setError("User already exist try different username")
          } else{
            setError("Please login to continue")
            setTimeout(()=> {
              navigate('/');
             }, 3000);
          }
          setLoading(false)
        }).catch(err => {
          console.log(err)
          setLoading(false)
        })
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }
  }

  const handleInput1Change = (event) => {
    const newValue = event.target.value;
    setUsername(newValue);
    setPassword(newValue);
  };

  return (
    <SectionStyled>
      <div className="form-box">
        <div className="form-value">
          <form method='POST'>
            <h2>Register</h2>
            <div className="inputbox">
              <Person />
              <input type="text"  value={username} onChange={handleInput1Change} required />
              <label className='label' htmlFor="">User Name</label>
            </div>
            <div className="inputbox">
              <Lock />
              <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <label className='label' htmlFor="">Password</label>
            </div>
            <button disabled={loading} onClick={handleSubmit}>{loading? "Creating account....": "Register"}</button>
            <div className="register">
              <p>Already have an account <Link className='a' to='/'>Login</Link></p>
            </div>
          </form>
        </div>
      </div>
      {
          error !== '' && (<p style={{
            color: 'white',
            fontSize: '18px'
          }}>{error}</p>)
        }
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 95vh;
    width: 100%;

    .form-box{
      position: relative;
      width: 450px;
      height: 500px;
      background: transparent;
      border: 2px solid #eee;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;
    }

    h2{
      font-size: 2rem;
      color: #fff;
      text-align: center;
    }

    .inputbox{
      position: relative;
      margin: 30px 0;
      width: 360px;
      border-bottom: 2px solid #fff;
    }

    .inputbox label{
      position: absolute;
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
      color: #fff;
      font-size: 1em;
      pointer-events: none;
      transition: 0.5s;
    }

    input:focus ~ label,
    input:valid ~ label{
      top: -5px;
    }

    .inputbox  .MuiSvgIcon-root {
      position: absolute;
      right: 8px;
      color: #fff;
      font-size: 1.5rem;
    }

    .inputbox input{
      width: 100%;
      height: 50px;
      background: transparent;
      border: none;
      outline: none;
      font-size: 1em;
      padding: 0 35px 0 5px;
      color: #fff;
    }

    button{
      width: 100%;
      height: 40px;
      border-radius: 40px;
      background: #fff;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1em;
      font-weight: 600;
    }

    .register{
      font-size: 1.1rem;
      color: #fff;
      text-align: center;
      margin:  25px  0 10px;
    }

    .register p .a{
      text-decoration: none;
      color: #fff;
      font-weight: 600;
    }

    .register p .a:hover{
      text-decoration: underline;
    }

    @media screen and (max-width: 768px){
      .form-box{
        width: 300px;
        height: 350px;
      }

      .inputbox{
        margin: 30px 0;
        width: 280px;
      }
    }
`;
export default Register
