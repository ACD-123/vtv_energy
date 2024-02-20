import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export const Inquiries = () => {
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
    <section className="InquiriesSection">
        <div className='container'>
            <div className='contactUs border-gradient inputBg border-gradient-purple'>
               <div>
                <div className='contactUsTitle'>
               <h2>For inquiries, Have our sales engineers call you</h2>
                <p>Kindly fill out the following form</p>
                </div>
            <div className='row'>
                <div className='col-lg-6 oursolarworker'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label className='text-white'>First Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label className='text-white'>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustomPhone">
          <Form.Label className='text-white'>Phone</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
                type="text"
                placeholder="Phone"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
                Please choose a phone number.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label className='text-white'>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="E-mail"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a E-mail.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label className='text-white'>Message</Form.Label>
            <Form.Control as="textarea" placeholder="Message" required />
            <Form.Control.Feedback type="invalid">
              Please provide a message.
            </Form.Control.Feedback>
            </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
                </div>
                <div className='col-lg-6 oursolarwork-right'>

                </div>
            </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
