import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './Profile.css';
import {Link} from 'react-router-dom';
import { userLogin , updateLoggin, updateLogout} from '../../ducks/reducer';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            error: null,
            favorites: [],
            name: ''
        };
    }



// componentDidUpdate(prevProps) {
//     if (prevProps !== this.props){
//         this.getTheUser();
//     }
// }
      





componentDidMount() {
    this.getTheUser();
 }

 getTheUser = ()=>{
    axios.get('/api/me').then(res => {
        this.props.userLogin(res.data);
        if(res.data.user){
            this.props.updateLoggin(true)
        }
    }).catch(error => {
        this.setState({error})
    }).then(() => {
        this.setState({loading: false})
    })
 }


 logIn = () => {
     const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback');
     const url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
     window.location = url;
 }

 logOut = () => {
     this.props.updateLoggin(false);
    axios.post('/api/logout').then(res => {
        console.log('logged out', res.data)
    })

 }

 handleNameChange = (val) => {
    this.setState({name: val})
 }

 editName = (id) => {
     axios.patch(`/api/me${id}`, {name: this.state.name}).then(res => {
         console.log('changed name', res.data)
     })
 }


  render() {
    console.log('profile props', this.props)
    const { loading, error} = this.state;
    const { user } = this.props;

    

    return (
        
      <div className="profile-container">
        <div>
        {console.log('in profile',this.props.user)}
            <h1>Profile</h1>
            {loading
                ? <div>Loading . . . </div>
                : error
                    ? <div>There was error loading</div>
                    : user
                    ? <div className="profile-container">
                        <div className="user-email-box">
                            <div className="username">Name: {user.name}</div>
                            <div className="email">Email: {user.email}</div>
                            <div><input type="text" onChange={(e) => this.handleNameChange(e.target.value)}/></div><button onClick={() => this.editName(user.id)}>change name</button>
                            <img className="user-pic" src={user.picture} alt=""/>
                            <button onClick={() => this.logOut()}><Link to="/">Log out</Link></button>
                        </div>
                    </div>
                    : <div>
                        <button className="login-button" onClick={this.logIn}>Login</button>
                    </div>
            }
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
    const {user} = state;
    return {user};
}

export default connect(mapStateToProps, {userLogin, updateLoggin, updateLogout})(Profile);