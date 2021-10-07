 /*const checkValid=()=>{
    var pwd=document.getElementById("pwd").value;
    var confpwd=document.getElementById("conf-pwd").value;
    if(pwd===confpwd){
        console.log("match");
    }else{
        console.log("not a match");
    }
}*/

const signup=() => {

     
        return (
            <form class="signup-class">
            <table>
                <tr>
                    <td>
                        Name:
                    </td>
                    <td>
                        <input type="text" placeholder="First Name" />
                    </td>
                    <td>
                        <input type="text" placeholder="Last Name" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Email Address:
                    </td>
                    <td>
                        <input type="email" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Password:
                    </td>
                    <td>
                        <input id="pwd" type="password" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Confirm Password:
                    </td>
                    <td>
                        <input  id="conf-pwd"  type="password" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <button class="btn btn-primary">SignUp</button>
                    </td>
                    <td>
                        <a class="text-primary">Forgot Password</a>
                    </td>
                </tr>

            </table>
            </form>
        )
    
}
export default signup;