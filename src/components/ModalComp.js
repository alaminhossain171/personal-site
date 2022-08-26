import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default function ModalComp(props) {
  const { name, brief, tech, live, git, img } = props;
  return (
    <>
      <Modal
        className="CardBg"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{ backgroundColor: "#203757" }} closeButton>
          <Modal.Title id="contained-modal-title-vcenter text-light">
            <p className="text-light"> {name}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ backgroundColor: "#203757" }}
          className="text-light"
        >
          <div className="my-1">
            <small>{brief}</small>
          </div>
          <div>
            <img
              src={img}
              style={{ height: 290, width: "100%" }}
              className="img-fluid"
              alt=""
            />
          </div>
          <div>
            <u>Technology</u>
            <ul style={{ fontSize: 13 }} className="d-flex ">
              {tech.map((i) => {
                return <li className="mx-3">{i}</li>;
              })}
            </ul>
          </div>
          <div className="my-1">
            {live && (
              <a href={live} target={'_blank'} className="btn btn-primary btn-sm mx-1" rel="noreferrer">
                Live Link
              </a>
            )}
            {git && (
              <a href={git}  target={'_blank'} className="btn btn-primary btn-sm mx-1"  rel="noreferrer">
                Git Link
              </a>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#203757" }}>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
