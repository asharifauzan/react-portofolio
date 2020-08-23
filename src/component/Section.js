import React from 'react';

class Section extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <section id={this.props.link}>
        <h1 >Fauzan Hibatullah <span className='diffColor'>Ashari</span></h1>
        {this.props.link}
        <img src='wave.svg' className={this.props.wave}/>
      </section>
    );
  }

}

export default Section;
