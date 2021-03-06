import React, { Component, Fragment } from 'react';
import { Segment, Grid, Button, Container, Divider, Popup } from 'semantic-ui-react';

class RoomItems extends Component {

  renderBed(bed) {
    return (
      <Fragment>
        <Grid.Row columns={2}>
          <Grid.Column>
            {bed.bedType.name}
          </Grid.Column>
          <Grid.Column>
            {bed.count}
          </Grid.Column>
        </Grid.Row>
        <Divider />
      </Fragment>
    );
  }

  renderItem(room, index) {
    const { handleDelete, handleEdit } = this.props;

    return (
      <Segment>
        <Grid centered >
          <Grid.Row columns={5} inverted style={{ background: 'aliceblue' }}>
            <Grid.Column>
              Room Type
            </Grid.Column>
            <Grid.Column>
              Amount
            </Grid.Column>
            <Grid.Column>
              Price
            </Grid.Column>
            <Grid.Column>
              Area
            </Grid.Column>
            <Grid.Column>
              Description
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={5}>
            <Grid.Column>
              {room.roomType && room.roomType.name}
            </Grid.Column>
            <Grid.Column>
              {room.amount}
            </Grid.Column>
            <Grid.Column>
              {room.price}
            </Grid.Column>
            <Grid.Column>
              {room.area}
            </Grid.Column>
            <Grid.Column>
              <Popup trigger={<Button icon='info' />} >
                {room.description}
              </Popup>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2} style={{ background: 'whitesmoke' }}>
            <Grid.Column>
              Bed Type
            </Grid.Column>
            <Grid.Column>
              Total
            </Grid.Column>
          </Grid.Row>
          {room.bedInRooms && room.bedInRooms.map(x => this.renderBed(x))}

          <Grid.Row>
            <Button floated='right' type="button"
              basic color="teal"
              icon={'edit'}
              onClick={() => handleEdit(index)} />
            <Button floated='right' type="button"
              basic color="teal"
              icon={'trash'}
              onClick={() => handleDelete(index)} />
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }

  render() {
    const { rooms } = this.props;

    return (rooms && rooms.length !== 0 ?
      <Container style={{ margin: "15px", padding: "15px" }} >
        <Grid columns='equal'>
          <Grid.Column width={12}>
            {rooms.map((x, index) => this.renderItem(x, index))}
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment secondary >
              After you complete registration you'll be able to make changes to your listing before it goes live
            </Segment>
          </Grid.Column>
        </Grid>
      </Container> :
      <Container style={{ padding: '1rem 0' }}>
        <p className='default-text'>
          You have not added any room to your property. Please, add rooms with bed description and other info
        </p>
      </Container>
    );
  }
}

export default RoomItems;
