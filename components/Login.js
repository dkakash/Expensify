import React from 'react'
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth'
// export class Login extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return( 
//             <form>
//                 {/* <input type='text' placeholder='username'/>
//                 <input type='password' placeholder='password'/> */}
//                 <button onClick={this.props.startLogin}>Login</button>
//             </form>
//         )
//     }
// }
export const Login=({startLogin})=>(
    <div>
        <button onClick={startLogin}>Login</button>
    </div>
)
const mapDispatchToProps = (dispatch) =>({
    startLogin:()=>dispatch(startLogin())
})

export default connect(undefined,mapDispatchToProps)(Login);