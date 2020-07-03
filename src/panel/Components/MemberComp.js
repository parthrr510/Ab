import React, { Component } from "react";
import {Form} from "react-bootstrap";
import "./MemberComp.css";

class MemberComp extends Component {
  render() {
    return (
      
              <Form id="form2">
                  <fieldset>

                <Form.Group className="form_field2" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control className="form_inpField2" type="text" />
                </Form.Group>

                <Form.Group className="form_field2" controlId="formBasicContact">
                  <Form.Label>Contact</Form.Label>
                  <Form.Control className="form_inpField2" type="number" />
                </Form.Group>

                <Form.Group className="form_field2" controlId="formBasicYear">
                  <Form.Label>Year</Form.Label>
                  <Form.Control className="form_inpField2" type="number" />
                </Form.Group>

                <Form.Group className="form_field2" controlId="formBasicUniversity">
                  <Form.Label>University</Form.Label>
                  <Form.Control className="form_inpField2" type="text" />
                </Form.Group>

                </fieldset>
        
              </Form>
            
    );
  }
}

export default MemberComp;
