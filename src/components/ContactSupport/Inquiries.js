import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { MapContainer, GeoJSON, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
export const Inquiries = () => {
  const [validated, setValidated] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [stateError, setStateError] = useState(false);

  // Event handler for state click
  const handleStateClick = (e) => {
    const { name } = e.target.feature.properties;
    setSelectedState(name || '');
    setStateError(false); // Reset the state error when the state is selected
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || selectedState === '') {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      setStateError(selectedState === ''); // Set the state error based on the selected state
    } else {
      // Handle form submission
    }
  };

  const [usStatesData, setUSStatesData] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);

  useEffect(() => {
    const fetchUSStatesData = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json'
        );
        setUSStatesData(response.data.features);
      } catch (error) {
        console.error('Error fetching US states data:', error);
      }
    };

    fetchUSStatesData();
  }, []);

  // Event handler for state hover
  const handleStateHover = (e) => {
    const { name } = e.target.feature.properties;
    setHoveredState(name || 'Unknown State');
  };

  // Event handler for mouseout
  const handleMouseOut = () => {
    setHoveredState(null);
  };

  return (
    <>
    <section className="InquiriesSectionSupport">
        <div className='container'>
            <div className='contactUsContact border-gradient inputBg border-gradient-purple'>
               <div>
                <div className='contactUsTitleContact'>
               <h2>For inquiries, Have our sales engineers call you</h2>
                <p>Kindly fill out the following form</p>
                </div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-lg-6 oursolarworker'>
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
            <Form.Control as="textarea" placeholder="Write your message.." cols={30} rows={5} required />
            <Form.Control.Feedback type="invalid">
              Please provide a message.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" style={{textAlign:'left'}}>
        <Form.Check
          required
          style={{color: 'white'}}
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      </Row>
                </div>
                <div className='col-lg-6 border-footer'>
<div className='mapSec'>
<h3>
Select Your State
</h3>
<div className='map'>
                        <MapContainer
                          center={[37.8, -96]}
                          zoom={4}
                          style={{ height: '500px', width: '100%' }}
                        >
                          {usStatesData &&
                            usStatesData.map((feature) => (
                              <GeoJSON
                                key={feature.id}
                                data={{
                                  type: 'FeatureCollection',
                                  features: [feature],
                                }}
                                style={(feature) => ({
                                  fill: feature.properties.name === hoveredState ? 'linear-gradient(98.82deg, #FFE600 -52.77%, #FF3D00 125.07%)' : 'linear-gradient(98.82deg, #FFE600 -52.77%, #FF3D00 125.07%)',
                                  weight: 1,
                                  color: 'black',
                                  fillOpacity: 0.7,
                                })}
                                onEachFeature={(feature, layer) => {
                                  layer.on({
                                    mouseover: handleStateHover,
                                    mouseout: handleMouseOut,
                                    click: handleStateClick,
                                  });
                                }}
                              >
                                <Tooltip className='opoppp'>{hoveredState}</Tooltip>
                              </GeoJSON>
                            ))}
                        </MapContainer>
                      </div>
                    </div>
                    <div style={{ textAlign: 'end' }}>
                      <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            placeholder="Selected State"
                            value={selectedState}
                            readOnly
                            style={{ marginBottom: '10px' }}
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please Select State.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      {stateError && (
                        <div style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>
                          Please select a state.
                        </div>
                      )}

                      <Button type="submit" style={{ background: 'white', color: 'black', border: 'none', borderRadius: '0px' }}>Submit form</Button>
                    </div>
                </div>
            </div>
    </Form>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
