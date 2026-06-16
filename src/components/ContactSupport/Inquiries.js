import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export const Inquiries = () => {
  const [validated, setValidated] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [stateError, setStateError] = useState(false);
  const [usStatesData, setUSStatesData] = useState(null);
  const [message, setMessage] = useState('');
  const location = useLocation();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || selectedState === '') {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      setStateError(selectedState === '');
    } else {
      // Handle form submission
    }
  };

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

  // Set message and scroll on location or state change
  useEffect(() => {
    if (location.state && location.state.subject) {
      setMessage(`Inquiry regarding: ${location.state.subject}\n\n`);
    }

    if (location.pathname === '/contact-us' || window.location.hash === '#Contactus' || (location.state && location.state.subject)) {
      setTimeout(() => {
        const element = document.getElementById('Contactus');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  // List of allowed states
  const allowedStates = ['Massachusetts', 'Colorado', 'California'];

  return (
    <>
      <section id="Contactus" className="InquiriesSectionSupport">
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
                      <Form.Group as={Col} md="12" controlId="validationCustomMessage">
                        <Form.Label className='text-white'>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="Write your message.."
                          cols={30}
                          rows={5}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a message.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3 mt-3" style={{ textAlign: 'left' }}>
                        <Form.Check
                          required
                          style={{ color: 'white' }}
                          label="Agree to terms and conditions"
                          feedback="You must agree before submitting."
                          feedbackType="invalid"
                        />
                      </Form.Group>
                    </Row>
                  </div>
                  <div className='col-lg-6 border-footer'>
                    <div className='mapSec'>
                      <h3>Select Your State (Massachusetts, Colorado, or California)</h3>
                      <div className='map'>
                        <MapContainer
                          center={[37.8, -96]}
                          zoom={4}
                          style={{ height: '500px', width: '100%' }}
                          zoomControl={false}
                          scrollWheelZoom={false}
                          doubleClickZoom={false}
                          touchZoom={false}
                          boxZoom={false}
                          dragging={false}
                        >
                          {usStatesData && (
                            <GeoJSON
                              key={selectedState}
                              data={{
                                type: 'FeatureCollection',
                                features: usStatesData,
                              }}
                              style={(feature) => {
                                const name = feature.properties.name;
                                const isSelected = selectedState === name;
                                const isAllowed = allowedStates.includes(name);
                                return {
                                  fillColor: isSelected ? '#00E5FF' : (isAllowed ? '#00E5FF' : '#4A4A4A'),
                                  weight: isSelected ? 2 : 1,
                                  color: isSelected ? '#FFFFFF' : 'black',
                                  fillOpacity: isSelected ? 0.9 : 0.6,
                                };
                              }}
                              onEachFeature={(feature, layer) => {
                                const name = feature.properties.name;
                                const isAllowed = allowedStates.includes(name);

                                layer.bindTooltip(name, {
                                  className: 'opoppp',
                                  sticky: true,
                                });

                                layer.on({
                                  mouseover: (e) => {
                                    e.target.setStyle({
                                      fillOpacity: 0.9,
                                      weight: 2,
                                      color: '#00E5FF',
                                    });
                                  },
                                  mouseout: (e) => {
                                    const isSelected = selectedState === name;
                                    e.target.setStyle({
                                      fillOpacity: isSelected ? 0.9 : 0.6,
                                      weight: isSelected ? 2 : 1,
                                      color: isSelected ? '#FFFFFF' : 'black',
                                    });
                                  },
                                  click: () => {
                                    if (isAllowed) {
                                      setSelectedState(name);
                                      setStateError(false);
                                    } else {
                                      alert(`Sorry, inquiries are not available for ${name}. Please select Massachusetts, Colorado, or California.`);
                                      setSelectedState('');
                                      setStateError(true);
                                    }
                                  },
                                });
                              }}
                            />
                          )}
                        </MapContainer>
                      </div>
                    </div>
                    <div style={{ textAlign: 'end' }}>
                      <Form.Group as={Col} md="12" controlId="validationCustomStateInput">
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
                          Please select a valid state on the map.
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
  );
};
