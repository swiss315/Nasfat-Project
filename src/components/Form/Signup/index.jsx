import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './signup.scss'



class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }

    // handleSubmit (e) {
    //     e.preventDefault()
    //     this.props.history.push('/dashboard'); // <--- The page you want to redirect your user to.
    //   }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
            console.log(this.state);

            // let input = {};
            // input["email"] = "";
            // input["password"] = "";
            // input["confirm_password"] = "";
            // this.setState({ input: input });

            this.props.history.push('/dashboard');
        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (typeof input["email"] !== "undefined") {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }

        if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Please enter your confirm password.";
        }

        if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

            if (input["password"] !== input["confirm_password"]) {
                isValid = false;
                errors["password"] = "Passwords don't match.";
            }
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {
        return (

            <div className="col-lg-10 mx-auto">
                <div className="row">
                    <div className="col-lg-7">
                        <img src='../../../nasfat.jpg' alt="nasfat"></img>
                    </div>
                    <div className="col-lg-5 my-auto">
                        <form onSubmit={this.handleSubmit}>
                            {/* {this.state.email} */}
                            <h5 className="mb-5">Create account</h5>
                            <p className="m-0 logininput">Email address</p>
                            <input type='email' name='email' value={this.state.input.email} onChange={this.handleChange} />
                            <div className="text-danger">{this.state.errors.email}</div>
                            <br />
                            <p className="m-0 logininput">Password</p>
                            <input type='password' name='password' value={this.state.input.password} onChange={this.handleChange} />
                            <div className="text-danger">{this.state.errors.password}</div>
                            <br />
                            <p className="m-0 logininput">Confirm Password</p>
                            <input type='password' name='confirm_password' value={this.state.input.confirm_password} onChange={this.handleChange} />
                            <div className="text-danger">{this.state.errors.confirm_password}</div>
                            <br />
                            <div className="signupbutton">
                                <Link to="/" className="float-left"><div >Back</div></Link>
                                <button className="float-right signupnext" type="submit" value="Submit" to="/dashboard"><Link to="/dashboard" className="text-light">Next</Link></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}


export default Signup;
