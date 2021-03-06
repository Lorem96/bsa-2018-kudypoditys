import React, { Component, Fragment } from 'react';
import { Form, Button, Container, Card, Header } from 'semantic-ui-react';
import { required } from 'client/regexValidationService';
import { Field, reduxForm } from 'redux-form';

import CheckInCheckOut from 'client/components/checkin-checkout';
import renderDropdown from 'client/components/input-form/dropdown';

import './index.scss';

class PolicesPropertyRegistrationForm extends Component {

  renderCancellationCard() {
    const cancelOptions = [
      {
        key: 1,
        value: 'true',
        text: 'Yes, my guests can cancel their booking for free'
      },
      {
        key: 2,
        value: 'false',
        text: 'No, my guests will look the booking fee if they cancel'
      },
    ];

    return (
      <Fragment>
        <Header as="h2" style={{ fontSize: '18px' }} className="required">
          Cancellations. Can your guests cancel their booking for free?
          </Header>
        <br />
        <Field
          name="accommodationRule.cancelReservation"
          component={renderDropdown}
          icon="user cancel"
          options={cancelOptions}
          validate={[required]}
        />
      </Fragment>
    );
  }

  renderCheckInCheckOutCard() {
    return (
      <Field
        name="accommodationRule.checkInCheckOut"
        component={CheckInCheckOut}
      />
    );
  }

  render() {
    const {
      pristine, submitting, handleSubmit
    } = this.props;

    return (
      <Form id="policesPropertyRegistrationForm" onSubmit={handleSubmit}>
        <Container >
          {this.renderCancellationCard()}
        </Container>
        <Container >
          {this.renderCheckInCheckOutCard()}
        </Container>
        <Button
          color="teal"
          fluid
          disabled={pristine || submitting}
          type="submit"
        >Continue</Button>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'propertyRegistrationForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(PolicesPropertyRegistrationForm);
