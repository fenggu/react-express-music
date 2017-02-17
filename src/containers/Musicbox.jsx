import React, { Component } from 'react'; 
import { MineBtn, TopBtn, PlayList } from '../components'
import { Input } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'   
import { Link } from 'react-router'; 
import { Menu, Dropdown, Icon } from 'antd'; 
import { getmusiclistActionClick } from '../Redux/actions'
const Search = Input.Search;

class RootMusicBox extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
      const { getmusiclist } = this.props
      getmusiclist() 

    }
    render() {

        function filtertime (element, index, array) {
          return (index < 6)
        }

        function filterAcg (element, index, array) {
          return (element.type == 'acg' && index < 6)
        }

        function filterPop (element, index, array) {
          return (element.type == 'popular' && index < 6)
        }

        function filterClass (element, index, array) {
          return (element.type == 'classic' && index < 6)
        }

        function filterAbs (element, index, array) {
          return (element.type == 'absolute' && index < 6)
        }

        const { user, musiclist } = this.props 
        return ( 
          <div>
            <TopBtn user = {user}/> 
            <div className="music-list">  
              <div>
                  <h3 className="list-title">
                    <span>新单速递</span>
                  </h3>
                  {
                    musiclist.list.filter(filtertime).map( (s, index) => {
                      return ( 
                        <Link to={"/list/" + s._id}  key={s._id}>
                          <div className="list-child" >
                            <img src={s.pic} alt=""/>
                            <h3>{s.title}</h3>
                          </div>
                        </Link> 
                        )
                    })
                  }
              </div>
              
              <div>
                  <h3 className="list-title">
                    <span>ACG</span>
                  </h3>
                  {
                    musiclist.list.filter(filterAcg).map( (s, index) => {
                      return ( 
                        <Link to={"/list/" + s._id}  key={s._id}>
                          <div className="list-child" >
                            <img src={s.pic} alt=""/>
                            <h3>{s.title}</h3>
                          </div>
                        </Link> 
                        )
                    })
                  }
              </div>
              
              
              <div>
                  <h3 className="list-title">
                    <span>流行音乐</span>
                  </h3>
                  {
                    musiclist.list.filter(filterPop).map( (s, index) => {
                      return ( 
                        <Link to={"/list/" + s._id}  key={s._id}>
                          <div className="list-child" >
                            <img src={s.pic} alt=""/>
                            <h3>{s.title}</h3>
                          </div>
                        </Link> 
                        )
                    })
                  }
              </div>


              <div>
                  <h3 className="list-title">
                    <span>纯音乐</span>
                  </h3>
                  {
                    musiclist.list.filter(filterAbs).map( (s, index) => {
                      return ( 
                        <Link to={"/list/" + s._id}  key={s._id}>
                          <div className="list-child" >
                            <img src={s.pic} alt=""/>
                            <h3>{s.title}</h3>
                          </div>
                        </Link> 
                        )
                    })
                  }
              </div> 

              <div>
                  <h3 className="list-title">
                    <span>古典乐</span>
                  </h3>
                  {
                    musiclist.list.filter(filterClass).map( (s, index) => {
                      return ( 
                        <Link to={"/list/" + s._id}  key={s._id}>
                          <div className="list-child" >
                            <img src={s.pic} alt=""/>
                            <h3>{s.title}</h3>
                          </div>
                        </Link> 
                        )
                    })
                  }
              </div>

            </div>
          </div>
      )
    }
}

function mapStateToProps(state) { 
    return { 
      user: state.user,
      musiclist: state.musiclist
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({   
      getmusiclist: getmusiclistActionClick
    }, dispatch)
}

let MusicBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(RootMusicBox);
export { RootMusicBox }
export default  MusicBox 
