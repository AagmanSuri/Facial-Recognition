import React ,{Component} from 'react'

class Signin extends Component{
constructor(props){
    super(props);
    this.state={
        signInEmail:'',
        signInPassword:''
    }
}

onEmailchange = (event) =>{
        this.setState({signInEmail: event.target.value})
}
onPasswordchange = (event) =>{
    this.setState({signInPassword: event.target.value})
}
onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            email:this.state.signInEmail,
            password:this.state.signInPassword
        })
    })
    .then(resp=>resp.json())
    .then(data=>{
        if(data==='success'){
            this.props.onRouteChange('home')
        }
    })
    
}



   
render(){
        const {onRouteChange} = this.props;
        return (
            <article className="mw5 center  br3 pa3 pa4-ns mv3 mw6  shadow-5 ba b--black-10"> 
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input onChange ={this.onEmailchange}className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input onChange ={this.onPasswordchange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                    </fieldset>
                    <div className="">
                        <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick={()=>onRouteChange('Register')} className="f6 link dim black db pointer">Register</p>
                    </div>
                </div>
            </main>
            </article>
        );
    }
}
export default Signin;