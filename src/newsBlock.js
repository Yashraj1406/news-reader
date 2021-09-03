import axios from 'axios'
import React, {useState,useEffect} from 'react'
import NewsCardList from './newsCardList.js'
import './newsBlock.css'
import NewsCardGrid from './newsCardGrid.js'
import {selectUser, viewToggle, changeLayout} from "./features/userSlice";
import {useDispatch,useSelector} from "react-redux";

function NewsBlock() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [view, setView] = useState(true);

    const dispatch = useDispatch();
	const user = useSelector(selectUser);

    useEffect(() => {

        axios.get(`https://api.first.org/data/v1/news`)
        .then((response) => {
            setData(response.data.data)
            setLoading(false)
            console.log(data)
            console.log(user.feedback)
        })
        .catch((error) => {
            console.error('Error fetching data:',error)
        })

    },[data])

    return (<>
        { loading
            ?
            <div><h2>loading</h2>
            <h2>{user.toggle}</h2></div>
            : user.toggle==='' || user.toggle==='list'?
            <div>
            <div className="newsBlockList">
            {data.slice(9,13).map((data)=>{
                return<>
                <NewsCardList title={data.title} summary={data.summary.slice(0,50)+"..."} published={data.published} link={data.link}/>
            </>})}</div>   
            <div className="navi">
                    <button className="num">1</button>
                    <button className="num">2</button>
                    <button className="num">3</button>
                    <button className="next"><span>&gt;&gt;</span></button>
            </div>
        </div>:
        <div>
            <div className="newsBlockGrid">
            {data.slice(9,13).map((data)=>{
                return<>
                <NewsCardGrid title={data.title.slice(0,50)+'...'} summary={data.summary.slice(0,50)+"..."} published={data.published} link={data.link}/>
            </>})}</div>
            <div className="navi">
                    <button className="num">1</button>
                    <button className="num">2</button>
                    <button className="num">3</button>
                    <button className="next"><span>&gt;&gt;</span></button>
            </div>
        </div>  }</>
    )
}

export default NewsBlock;
