import React, { useState, useRef} from 'react'
import './sidebar.css'
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import {useDispatch,useSelector} from "react-redux";
import {selectUser, viewToggle, changeLayout} from "./features/userSlice";
import { CountryDropdown} from 'react-country-region-selector';
import validator from 'validator'
import PhoneInput from 'react-phone-number-input'

function Sidebar() {
    const [country, setCountry] = useState();
    const dispatch = useDispatch();
	const user = useSelector(selectUser);
    const refList = useRef();
    const refGrid = useRef();
    const [emailError, setEmailError] = useState('')
    const [pho,setPho] = useState()

    const validateEmail = (e) => {
        var email = e.target.value
  
        if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
        } else {
        setEmailError('Enter valid Email!')
        }
    }

    function handleChange(e){
        // e.target.classList.toggle('onclick')
        if(e.target.id === 'list'){
            if(user.toggle==='') {
                e.target.classList.toggle('onclick') 
                dispatch(viewToggle('list'))
            }
            else if(user.toggle ==='list'){
                e.target.classList.toggle('onclick') 
                dispatch(viewToggle(''))
            }
            else{
                e.target.classList.toggle('onclick')
                refGrid.current.classList.toggle('onclick')
                dispatch(viewToggle('list'))
            }
        }
        else{
            if(user.toggle===''){
                e.target.classList.toggle('onclick')
                dispatch(viewToggle('grid'))
            }
            else if(user.toggle==='list'){
                refList.current.classList.toggle('onclick')
                e.target.classList.toggle('onclick')
                dispatch(viewToggle('grid'))
            }
            else{
                e.target.classList.toggle('onclick')
                dispatch(viewToggle(''))
            }
        }
    }

    function setChange(val) {
        setCountry(val)
    }

    function feedbackForm(e) {
        dispatch(changeLayout())
        e.target.classList.toggle('onFeed')
        // var mid_div = document.getElementById("mid_div");
        // mid_div.parentNode.removeChild(mid_div);
        // console.log("hi I was clicked");
    }

    return (
        <div className={user.feedback?"outer-sidebar":"sidebar"}>
        <div className='minn'>
            <div id="fir_div" style={{marginTop:'80px',marginBottom:'20px'}} className="user padd">
                <div className="user_details">
                    <img className='user_img' src='https://i.pinimg.com/originals/c5/68/3a/c5683a88f3d5a8708208e4ccd694bf50.jpg' alt='User' />
                    <div className="user_name">
                        <h3>Hi Reader,</h3>
                        <p>Here's your News!</p>
                    </div>
                </div>
            </div>{ user.feedback ? null :
            <div id='mid_div' className="toggle padd">
                <div className="title">
                    <h1 style={{paddingTop:'10px'}}>View Toggle</h1> 
                    <div className="icons">
                        <SubjectOutlinedIcon ref={refGrid} style={{marginRight:'0',borderRight:'none',borderTopRightRadius:'0',borderBottomRightRadius:'0'}} id="grid" onClick={handleChange}/>
                        <FormatListBulletedOutlinedIcon ref={refList} style={{marginLeft:'-10px',borderLeft:'none',borderTopLeftRadius:'0',borderBottomLeftRadius:'0'}} id="list" onClick={handleChange}/>
                    </div>
                </div>
                
            </div>}
            <div className="feedback padd">
                <h1 className="head">Have a Feedback?</h1>
                <button className="btn" onClick={feedbackForm} id="feedback"><b>We're Listening!</b></button>
            </div>
            </div>
        {user.feedback ?
        <div className="form">
            <div className="form-group">
            <h3>Thank you so much for taking time!</h3>
            <p>Please provide the below details!</p>

            <form className="elem">
                <p className="para">First Name:</p>
                <input 
                type="text"
                />
                <p className="para">Last Name:</p>
                <input
                type="text"
                />
                <p className="para">Address:</p>
                <textarea
                type="text"
                />
                <p className="para">Country:</p>
                <CountryDropdown className="countryDropdown"
                    value={country}
                    onChange={(val) => setChange(val)}
                />
                <p className="para">Email:</p>
                <input type="text" id="userEmail" 
                    onChange={(e) => validateEmail(e)}>
                </input>
                <br />
                <span style={{
                    fontWeight: 'bold',
                    color: 'red',
                    }}>{emailError}
                </span>
                <p className="para">Phone:</p>
                <PhoneInput
                    placeholder="Enter phone number"
                    value={pho}
                    onChange={(val) => setPho(val)}
                />
                <button className="chan-button" onClick={() => 
                    {dispatch(changeLayout());
                    document.getElementById('feedback').classList.toggle('onFeed')}}>
                    <b>Submit</b></button>
            </form>
            </div>
        </div>
        : null}
        
        </div>

    )
}

export default Sidebar
