import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';
import './login.scss'



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }
  render() {
    return (
      
        <div className="col-lg-10 mx-auto">
          <div className="row">
            <div className="col-lg-7">
              <img src='../../../nasfat.jpg' alt="nasfat"></img>
            </div>
            <div className="col-lg-5 my-auto">
              <form>
                {/* {this.state.email} */}
                <h5 className="mb-5">Login</h5>
                <p className="m-0 logininput">Email address</p>
                <input type='email' name='email' onChange={this.myChangeHandler} />
                <br /><br />
                <p className="m-0 logininput">Password</p>
                <input type='password' name='password' onChange={this.myChangeHandler} />
                <br /><br />
                <button className="loginsubmit"><Link to="/dashboard">Login to your account.</Link></button>
                <br/>
                <div className="Loginradio">
                  <div className="float-left">
                    <input type="checkbox"  name="" value=""/>
                    <label for="" className="pl-1">Keep me sign in</label>
                  </div>
                  <div className="float-right"><Link to="/signup">Forgot password?</Link></div>
                </div>
                <br/>
                <br/><br/><br/>
                <div className="Loginradio">
                  <button className=""><Link to="/signup">Signup with Google</Link></button>
                  <br/><br/>
                  <p className="text-center"><Link to="/signup" className="text-danger">I don't have an account</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      
    );
  }
}


export default Login;
