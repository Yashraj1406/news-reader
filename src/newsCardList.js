import React, { useState } from 'react'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import './newsCardList.css'
import {useDispatch,useSelector} from "react-redux";
import {selectUser, viewToggle, changeLayout} from "./features/userSlice";
import { Modal, Button } from "react-bootstrap";

function NewsCardList(props) {
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();
	const user = useSelector(selectUser);

    return (
        <>
        <div className="card-outer">
            <div className="newsCardList" onClick={() => setModalShow(true)}>
                <img className="newsImg" src="https://s01.sgp1.cdn.digitaloceanspaces.com/article/144768-abgxzmkkwn-1598264215.jpg" alt="info"/>
                <div className="newsInfo">
                    <h3>{props.title}</h3>
                    <p>{props.summary}</p>
                    <p>{props.published}</p>
                </div>
            </div>
            <div className="cross">
                <CloseRoundedIcon />
            </div>
        </div>
        {setModalShow?
        <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ReadingPopUp
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <iframe src={props.link} style={{width:'100%',height:'400px'}}/>
        </Modal.Body>
        {/* <Modal.Footer>
            <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer> */}
        </Modal>
        :null}

        </>
    )
}

export default NewsCardList
