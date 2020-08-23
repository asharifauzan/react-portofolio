import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = ({
      name: "Fauzan",
      desc: "Fauzan Ashari WebBlog",
      class: 'menu',
      navClass: ''
    });
  }

  render() {

    return (
      <header onScroll={()=> {
          this.setState({navClass: 'navbar-colored'});
        }}>
        <nav className={this.state.navClass}>
          <div className="logo">
            <h1>{this.props.logo}</h1>
          </div>
          <ul className={this.state.class}>
            <li><a href="#about">{this.props.about}</a></li>
            <li><a href="#contact">{this.props.contact}</a></li>
            <li><a href="#skill">{this.props.skill}</a></li>
            <li><a href="#portofolio">{this.props.portofolio}</a></li>
          </ul>
          <div className='hamburger' onClick={()=>{this.handleClick()}}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
    )
  }

  handleClick() {
    if(this.state.class === 'menu') {
      this.setState({class: this.state.class + ' show-menu'});
    } else {
      this.setState({class: 'menu'});
    }
  }
}

export default Header;
