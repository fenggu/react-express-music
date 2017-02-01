import React, { Component, Children } from 'react';
import { TopBar, Player } from '../components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'  
import { Menu, Dropdown, Icon } from 'antd';
import { autoLoginAction, loginAction ,autoLoginAjax} from '../Redux/actions.js'
class RootDeskTop extends Component {
    constructor(props) {
        super(props);
    } 

    componentWillMount() {
      var { autoLogin, handleajax } = this.props
      autoLogin()
    }

    render() {
        if (this.props.params) {
            var pid = this.props.params.pid 
        }
        return (
            <div> 
              { this.props.children }
            <Player />
            </div>
      );
    }
}


function mapStateToProps(state) { 
    return { 
      user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  
      autoLogin: autoLoginAction,
      handleajax: autoLoginAjax
    }, dispatch)
}

let DeskTop = connect(
    mapStateToProps,
    mapDispatchToProps
)(RootDeskTop);
export { RootDeskTop }
export default  DeskTop 