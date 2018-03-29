
import React, {Component} from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Form,Button,Container, Divider } from 'semantic-ui-react'
import { Responsive, Segment } from 'semantic-ui-react'
import { Input, Label } from 'semantic-ui-react'
import { Card, Feed } from 'semantic-ui-react'
import axios from 'axios';

import './StudentRegister.css'


class GridExampleDividedNumber extends Component {
  state = {
         firstName: '',
         lastName: '',
         regNo: ''
     }
     signupHandler = () => {
        const data = {
          Name: this.state.firstName + ' ' +this.state.lastName,
          regNo: this.state.regNo
        }
        axios.post('https://react-my-burger-4627c.firebaseio.com/new.json',data)
        .then(response => {
          console.log(response);
        });
     }

    render() {

      return (
        <Card fluid={true} centered={true}>
              <Card.Content textAlign={"center"}>
                <Card.Header>
                  Sign Up
                </Card.Header>
              </Card.Content>
          <Card.Content textAlign={"center"}>
          <Feed>


            <Grid columns={3} divided>
              <Grid.Row centered={true} >
                <Grid.Column textAlign={"center"}>
             <Form>


                  <datalist id='Department-List'>
                    <option value='Electrical & Electroncis' />

                    <option value='Computer Science Engineering' />

                    <option value='Electronics & Instrumental' />
                  </datalist>


                  <Input className="input" icon='id card' iconPosition='left' placeholder='Registration No.'
                        value={this.state.regNo}  onChange={(event) => this.setState({regNo: event.target.value})} />

                  <Input className="input" icon='university' iconPosition='left' list='Department-List' placeholder='Select Department' />


                  <Input className="input" icon='user circle' iconPosition='left' placeholder='First Name'
                    value={this.state.firstName}  onChange={(event) => this.setState({firstName: event.target.value})}   />
                  <Input className="input" icon='user circle' iconPosition='left' placeholder='Last Name'
                    value={this.state.lastName}  onChange={(event) => this.setState({lastName: event.target.value})} />



                  <Input className="input" icon='key' iconPosition='left' placeholder='Password' type='password' />
                  <Input className="input" icon='key' iconPosition='left' placeholder='Confirm Password' type='password' />
                  <Input className="input" icon='mail' iconPosition='left' placeholder='Email' type='email' />
                  <Input className="input" icon='calendar' iconPosition='left' placeholder='Date of Birth' />
                  <Input className="input" icon='phone square' iconPosition='left' placeholder='Contact No.' />
                  <Button type='submit' onClick={this.signupHandler} >Submit</Button>
            </Form>
                </Grid.Column>


          </Grid.Row>

        </Grid>
        </Feed>
          </Card.Content>
        </Card>

      );
    }

}



export default GridExampleDividedNumber
