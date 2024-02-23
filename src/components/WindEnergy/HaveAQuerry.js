import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
export const HaveAQuerry = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <section className="oursolarworkWind">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 col-sm-12 oursolarwork-leftWind">
              <div className="oursolarworkfirst">
                <h2 className="text-white">Have a Querry?</h2>
                <p className="text-white px-6">
                  Drop your email & our engineers will reach out to you
                </p>
              </div>
              <Form noValidate validated={validated} onSubmit={handleSubmit} style={{width:'50%'}}>
              <Row style={{alignItems:'center',borderBottom:'1px solid white', paddingBottom:'9px'}} className="mb-3 name align-items-center">
                      <Col md={10}>
                      <Form.Group
                      className="formbutttontt"
                        controlId="validationCustom01"
                      >
                        <Form.Label className="text-white">
                        Email
                        </Form.Label>
                        <Form.Control
                        className="bordenonr"
                          required
                          type="text"
                          placeholder="JohnDoe@gmail.com"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                        </Col>
                        <Col md={2}>
                        <Button className="btn btn-primary" style={{background:'none', border:'none'}}>
                            <img src={require("../assets/images/Arrow.png")} alt="arrow" />
                            </Button>
                        </Col>

                    </Row>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
