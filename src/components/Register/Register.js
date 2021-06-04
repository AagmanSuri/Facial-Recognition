import React,{Component} from 'react';

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            name:''
        }
    }

onNamechange = (event) =>{
    this.setState({name : event.target.value})
}
onEmailchange = (event) =>{
    this.setState({email : event.target.value})
}
onPasswordchange = (event) =>{
this.setState({password : event.target.value})
} 
render(){
    const {onRouteChange} = this.props
    return (
        <article className="mw5 center  br3 pa3 pa4-ns mv3 mw6  shadow-5 ba b--black-10"> 
        <main className="pa4 black-80">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="email-address"/>
                    </div>
                    <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                </fieldset>
                <div className="">
                    <input onClick={()=>onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
                </div>
                <div className="lh-copy mt3">
        
                </div>
            </div>
        </main>
        </article>
    );
}   
}
export default Register;