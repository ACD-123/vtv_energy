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
                <h2 className="text-white">Contact us for your inquiry</h2>
                {/* <p className="text-white px-6">
                Contact us for your inquiry
                </p> */}
              </div>
              <Form noValidate validated={validated} onSubmit={handleSubmit} style={{width:'50%'}}>
              <Row style={{alignItems:'end',borderBottom:'1px solid white', paddingBottom:'9px'}} className="mb-3 name">
                      <div className="col-lg-10 col-9">
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
                        </div>
                        <div className="col-lg-2 col-3">
                        <Button className="btn btn-primary" style={{background:'none', border:'none'}}>
                            <img src={require("../assets/images/Arrow.png")} alt="arrow" />
                            </Button>
                        </div>

                    </Row>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
