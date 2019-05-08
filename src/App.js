import React from 'react';
import './App.scss';
import data from './data.json';
import slide from './slider.json';
import boyImg from './assets/boy.png';
import cdImg from './assets/cd.png';
import playBtn from './assets/play-button.svg';
import emptyPlayIcon from './assets/play-button empty.svg';
import leftArrow from './assets/back.svg';
import rightArrow from './assets/right-arrow.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: data[0].songs[0].song,
      playList: data[0],
      currentSelectedPlayList: data[0].playlist,
      currentSongPLayList: data[0].playlist,
      count: 0,
      playSong : "autoPlay",
      animation: true
    }
  }
  currentSongplay(e, d) {
    console.log("e", e.playlist, d.song);
    this.setState({
      currentSong: d.song,
      currentSongPLayList: e.playlist
    })
  }
  changePlayList(e) {
    console.log(e);
    this.setState({
      currentSelectedPlayList: e.playlist,
      playList: e
    })
  }
  slideContent(e) {
    // document.getElementById("animate").classList.remove ("animation");
    let id = e.target.id;
    if (id == "leftShift") {
      if (this.state.count > 0) {
        // document.getElementById("animate").classList.add ("animation");
        this.setState({
          count: this.state.count - 1
        })
      }
    } else {
      if (this.state.count < slide.length - 1){

        this.setState({
          count: this.state.count + 1
        })
      }
    }
  }
 
  render() {
    var play = this.state.playSong
    console.log(play);
    return (
      <div>
        {/* <audio src={takiTaki} controls/> */}
        {/* <Sound url={takiTaki} /> */}
        <div className="slider">
          <div className="sliderContent">
            <div className="col-md-6">
              <div className="leftArrow">
                <img src={leftArrow} id="leftShift" onClick={(e) => this.slideContent(e)} />
              </div>
              <img src={slide[0].img} alt="boy"/>
              <h1>CURT<br /><span>SHEARD</span></h1>
            </div>
            <div className="col-md-6 sliderRight">
              <div className={this.state.animation ? "text animation" : "text animation"} id="animate">
                <h2>{slide[this.state.count].Heading} </h2>
                <p>{slide[this.state.count].Content}</p>
                <div className="rightArrow">
                  <img src={rightArrow} id="rightShift" onClick={(e) => this.slideContent(e)} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="bottomApp">
            <div className="col-md-12">
              <div className="songPlaying">
                <div className="col-md-6 textCenter">
                  <img src={cdImg} alt="icon" />
                </div>
                <div className="col-md-6 nowPlaying m-top-25">
                  <h2>Now playing</h2>
                  <h3>{this.state.currentSongPLayList}</h3>
                  <p>{this.state.currentSong}</p>
                </div>
              </div>
            </div>
            <div className="playList m-top-20">
              <div className="col-md-6">
                <div className="playListmain">
                  <h4 className="m-top-0">Discography</h4>
                  {data.map((data, key) => (<p key={key} ><h4 className={this.state.currentSelectedPlayList === data.playlist ? "fontW600 playListName" : "playListName"} onClick={() => this.changePlayList(data)}>{data.playlist}</h4><div className="playListinfo"><span>{data.year}</span><button className="listenBtn">Listen</button><button className="buyBtn">BUY</button></div></p>))}
                </div>
              </div>
              <div className="col-md-6">
                <div className="songs">
                  <h3 className="m-top-0">{this.state.currentSelectedPlayList}</h3>
                  {this.state.playList.songs.map((d, key) => (<p key={key} className="cursorPointer" onClick={() => this.currentSongplay(this.state.playList, d)}>{this.state.currentSong === d.song && this.state.playList.playlist === this.state.currentSongPLayList ? <img src={playBtn} alt="icon" /> : <img src={emptyPlayIcon} alt="icon" />}{d.song}<span>{d.duration}</span></p>))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
