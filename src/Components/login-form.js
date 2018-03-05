import React, { Component} from 'react';

class LoginForm extends Component{
    render(){
        return(
            <div>
                <form method="post" action="index.html">
                <div class="box">
                <h1>Edify Dashboard</h1>

                <input type="email" name="email" value="email" onFocus="field_focus(this, 'email');" onblur="field_blur(this, 'email');" className="email" />
                
                <input type="password" name="email" value="email" onFocus="field_focus(this, 'email');" onblur="field_blur(this, 'email');" className="email" />
                
                <a href="#"><div className="btn">Sign In</div></a> 

                <a href="#"><div id="btn2">Sign Up</div></a> 
                
                </div> 
                
                </form>

                <p>Forgot your password? <u style="color:#f1c40f;">Click Here!</u></p>
            </div>
        );
    }
}

            

export default LoginForm;