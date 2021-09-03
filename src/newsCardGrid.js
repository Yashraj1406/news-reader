import React, { useState } from 'react'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import './newsCardGrid.css'
import {useDispatch,useSelector} from "react-redux";
import {selectUser, viewToggle, changeLayout} from "./features/userSlice";
import { Modal, Button} from "react-bootstrap";


function NewsCardGrid(props) {
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();
	const user = useSelector(selectUser);

    return (
    <>
        <div className="card-outer-grid">
            <div className="newsCardGrid" onClick={() => setModalShow(true)}>
                <div className="gridcross">
                    <CloseRoundedIcon />
                </div>
                <div className="newsInfoGrid">
                    <h3><b>{props.title}</b></h3>
                    <p>{props.summary}</p>
                    <p style={{color: 'grey',marginTop:"5px"}}>{props.published}</p>
                </div>
                <img className="newsImgGrid" src="https://s01.sgp1.cdn.digitaloceanspaces.com/article/144768-abgxzmkkwn-1598264215.jpg" alt="info"/>
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

export default NewsCardGrid
