import React,{Component} from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import { SplitButton,DropdownButton, MenuItem, Button, Image } from 'react-bootstrap';
//import { createUser } from "../../actions";
import { connect } from "react-redux";
import _ from "lodash";
import { loginUser } from "../../actions";
import { searchJobs } from "../../actions";
import { Field, reduxForm } from "redux-form";



//create the Navbar Component
class SearchBar extends Component {
    constructor(props){
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            // email : "",
            // password : "",
            // type : "",
            loginFlag : false,
            err : null //"Enter valid credentials"
        }
    }

    // componentDidMount(){
    // //    let signup_res= this.props.createUser();
    // //    console.log("signup response",signup_res)
                 
    // }
    
    //handle logout to destroy the cookie

    renderFieldTitle(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;
    
        return (
          <div className={className}>
            <label>{field.label}</label>
            <input style={{fontSize:"2.2rem",borderRadius:"15px"}} className="form-control" type="text" {...field.input}  placeholder={field.placeholder}/>
            <div className="text-help">
              {touched ? error : ""}
            </div>
          </div>
        );
      }

      renderFieldLocation(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;
    
        return (
          <div className={className}>
            <label>{field.label}</label>
            <input  style={{fontSize:"2.2rem",borderRadius:"15px"}} className="form-control" type="text" {...field.input}  placeholder={field.placeholder}/>
            <div className="text-help">
              {touched ? error : ""}
            </div>
          </div>
        );
      }


      onSubmit(values) {
        console.log("search data",values);
        this.props.searchJobs(values, () => {
           //this.props.history.push("/applicant/applicantHome");
         // this.props.history.push("/applicant/fetchJobs");
          window.location.href="/applicant/fetchJobs";
          // window.location.reload(1); //refreshes the page so redux state is lost
           console.log("tested")
         });
      }

      handleFocus = () => { 
        this.setState({err : null});
    }
    
    render(){

        const { handleSubmit } = this.props;
       // this.state.email=localStorage.getItem("email")
        //if Cookie is set render Logout and user Button
        //<li><Link to="/" onClick = {this.handleLogout}><span class="glyphicon glyphicon-user"></span>Logout</Link></li>
       
            //Else display login button
            

            let redirectVar = null;

        return(
            <div style={{backgroundColor:"#f0f5f5",marginTop:"55px",height:"10px"}}> 
            {redirectVar}  

                    <div className="navbar" style={{backgroundColor:"#f0f5f5"}} >

                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                    <div class="nav navbar-nav navbar-right navbar-brand" style={{marginRight:"22%",marginTop:"3px"}}>
                    <button class="btn1 btn-primary" style={{backgroundColor:"white",borderColor:"black",fontSize:"16px",borderRadius:"15px",padding:"7px",color:"black"}}>Search Jobs...</button>
                    </div>

                    <div class="col-sm-4" style={{borderRadius:"15px"}}>
                    <Field
                    name="location"
                    component={this.renderFieldLocation}
                    placeholder="Location"
                    />
                    </div>

                    <div class="col-sm-4" style={{borderRadius:"15px"}}>
                    <Field
                    name="jobTitle"
                    component={this.renderFieldTitle}
                    placeholder="Job Title"
                    />
                    </div>
                    </form>
                      
                </div>
                
            
    </div>
            
        )
    }
}

function validate(values) {

    const errors = {};
  
    // Validate the inputs from 'values'
    if (!values.location) {
      errors.location = "Enter Location";
    }
    if (!values.jobtitle) {
      errors.jobtitle = "Enter Job Title";
    }
    
  
    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
  }

  function mapStateToProps(state) {
    return { loginApplicant: state.loginApplicant };
  }


export default reduxForm({
    validate,
    form: "NewLoginForm"
  })(connect(mapStateToProps, { loginUser, searchJobs })(SearchBar));
 
  
//export default connect(mapStateToProps, { loginUser, logoutUser })(LoginNavbar);
//export default Navbar;