import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Login from './containers/Login/Login'
import FacultyRegister from './containers/FacultyRegistration/FacultyRegistration'
import StudentRegister from './containers/StudentRegister/StudentRegister'
class Ecircuit extends Component {
      render () {

            return (
                  <div>

                        <Route path = "/" exact component={Login} />
                        <Route path = "/Student-signup" exact component={StudentRegister} />
                        <Route path = "/Faculty-signup" exact component={FacultyRegister} />


                  </div>
            );


      }

}

export default Ecircuit;
