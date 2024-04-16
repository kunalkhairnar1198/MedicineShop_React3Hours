import React, { Fragment } from 'react'
import ReactDom from 'react-dom';


const BackDrop =(props)=>{
        return <div onClick={props.onCloseHandle}></div>
}

const ModalOverlay =(props)=>{
    return(
        <div>
            <div>{props.children}</div>
        </div>
    )
}

const protalElement = document.getElementById('overlays')

const ModalCompo = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<BackDrop/>, protalElement)}
      {ReactDom.createPortal(<ModalOverlay onClick={props.onCloseHandle}>
                                {props.children}
                              </ModalOverlay>,protalElement)}
    </Fragment>
  )
}

export default ModalCompo;
