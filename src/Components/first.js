import React, {Component} from 'react'
import './styles.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accountNum: '',
            prize: 0
        }
    }

    render() {
        return (
    <body id="LoginForm">
              <div className="container">
              <h1 className="form-heading"></h1>
            <div className="login-form">
            <div className="main-div">
                <div className="panel">
                 <h2>Create account</h2>
       <p>Please enter your first and last name</p>
         <div id="Login">
         
                <div className="form-group">
                        <input className='form-control' placeholder={"First Name"} id='firstName' type='text' required/>

                                        </div>

                <div className="form-group">

                        <input className='form-control' placeholder={"Last Name"} id='lastName' type='text' required/>

                </div>

                    <button id="submitBtn" type="submit" className='btn btn-primary' onClick={this.props.theClick}>Submit</button>

                        </div>
        </div>
                </div>
                </div>
                </div>
               </body> 
        );
    }
}

export default Form;


