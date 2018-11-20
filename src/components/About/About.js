import React, { Component } from 'react';
import myHOC from './HOC';
import architecture from './architecture.jpg';
import './About.scss';


class About extends Component {
  render() {
    console.log('hoc stufff', this.props.data)

    let weatherIcon = this.props.data.weather[0].icon
    let weatherTemp = this.props.data.main.temp
    let weatherDesc = this.props.data.weather[0].main

    return (
      <div className="big-div">
        <div  className="about-container">
            <img className="about-img" src="https://ihg.scene7.com/is/image/ihg/Kimpton-Sacramento-hero" alt="city"/>
            <div class="text-block"> 
              <p>XXXX Layton Dr</p>
              <p>North Highlands, CA 95660</p>
                <div className="temps">
                  <p>{Math.floor(weatherTemp)} F</p>
                  <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt=""/>
                  <p>{weatherDesc}</p>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default myHOC(About,"http://api.openweathermap.org/data/2.5/weather?q=Sacramento&units=imperial&appid=ab0d4292fe5b4b465853465333dafca7");
