import Result from "./Result";
import React, { Component } from "react";
import "./Card.css";
const axios = require("axios");

class Card extends Component {
  constructor() {
    super();
    this.state = {
      Ra: 1200,
      Rb: 1200,
      Rc: 1200,
      Rd: 1200,
      Re: 1200,
      Rf: 1200,
      Rg: 1200,
      Rh: 1200,
      Ri: 1200,
      Rj: 1200,
      card: 1,
      storeRank: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.getMax = this.getMax.bind(this);
  }

  handleClick(ev) {
    var option = -1;
    this.setState({ card: this.state.card + 1 });
    if (ev.target.id === "steve1" || ev.target.id === "elon1") {
      if (ev.target.id === "steve1") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Ra,
          Rb: this.state.Rb,
          option: option
        })
        .then(res => this.setState({ Ra: res.data.Ra, Rb: res.data.Rb }));
    }

    if (ev.target.id === "elon2" || ev.target.id === "bill1") {
      if (ev.target.id === "elon2") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Rb,
          Rb: this.state.Rc,
          option: option
        })
        .then(res => this.setState({ Rb: res.data.Ra, Rc: res.data.Rb }));
    }

    if (ev.target.id === "mark1" || ev.target.id === "steve2") {
      if (ev.target.id === "mark1") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Rd,
          Rb: this.state.Ra,
          option: option
        })
        .then(res => this.setState({ Ra: res.data.Ra, Rd: res.data.Rb }));
    }

    if (ev.target.id === "mark2" || ev.target.id === "bill2") {
      if (ev.target.id === "mark2") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Rd,
          Rb: this.state.Rc,
          option: option
        })
        .then(res => this.setState({ Rd: res.data.Ra, Rc: res.data.Rb }));
    }

    if (ev.target.id === "sundar1" || ev.target.id === "satya1") {
      if (ev.target.id === "sundar1") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Re,
          Rb: this.state.Rf,
          option: option
        })
        .then(res => this.setState({ Re: res.data.Ra, Rf: res.data.Rb }));
    }

    if (ev.target.id === "tim1" || ev.target.id === "sundar1") {
      if (ev.target.id === "tim1") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Rg,
          Rb: this.state.Re,
          option: option
        })
        .then(res => this.setState({ Rg: res.data.Ra, Re: res.data.Rb }));
    }

    if (ev.target.id === "tim2" || ev.target.id === "satya2") {
      if (ev.target.id === "tim2") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Rg,
          Rb: this.state.Rf,
          option: option
        })
        .then(res => this.setState({ Rg: res.data.Ra, Rf: res.data.Rb }));
    }

    if (ev.target.id === "jeff1" || ev.target.id === "larry1") {
      if (ev.target.id === "jeff1") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Rh,
          Rb: this.state.Ri,
          option: option
        })
        .then(res => this.setState({ Rh: res.data.Ra, Ri: res.data.Rb }));
    }

    if (ev.target.id === "larry2" || ev.target.id === "jack1") {
      if (ev.target.id === "larry2") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Ri,
          Rb: this.state.Rj,
          option: option
        })
        .then(res => this.setState({ Ri: res.data.Ra, Rj: res.data.Rb }));
    }

    if (ev.target.id === "jeff2" || ev.target.id === "jack2") {
      if (ev.target.id === "jeff2") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Rh,
          Rb: this.state.Rj,
          option: option
        })
        .then(res => this.setState({ Rh: res.data.Ra, Rj: res.data.Rb }));
    }
  }

  getMax() {
    var data = {
      "Steve Jobs": this.state.Ra,
      "Elon Musk": this.state.Rb,
      "Bill Gates": this.state.Rc,
      "Mark Zuckerberg": this.state.Rd,
      "Sundar Pichai": this.state.Re,
      "Satya Nadella": this.state.Rf,
      "Tim Cook": this.state.Rg,
      "Jeff Bezoz": this.state.Rh,
      "Larry Page": this.state.Ri,
      "Jack Ma": this.state.Rj
    };
    var storeRank = [];

    for (var rank in data) {
      storeRank.push([rank, data[rank]]);
    }

    storeRank.sort((a, b) => {
      return a[1] - b[1];
    });

    storeRank.reverse();

    return storeRank;
  }

  render() {
    if (this.state.card === 1) {
      return (
        <div id="comb">
          <div className="imgContainer">
            <img
              alt="Image Not Found!"
              src="https://s.ebiografia.com/assets/img/authors/st/ev/steve-jobs-2-l.jpg"
              height="400"
              width="300"
              id="left"
              onClick={this.handleClick}
            />
          </div>
          <hr />
          <div className="imgContainer1">
            <img
              src="https://s.yimg.com/ny/api/res/1.2/lseK7hX2FbGJM94BuezbHg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/businessinsider.com/9ea607142652ea3bbd2f0792b3f6b821"
              className="middle-img"
              height="400"
              width="300"
              id="right"
              onClick={this.handleClick}
            />
          </div>
        </div>
      );
      // </div>
    }
    if (this.state.card === 2) {
      return (
        <div id="comb">
          <div class="imgContainer">
            <img
              src="https://s.yimg.com/ny/api/res/1.2/lseK7hX2FbGJM94BuezbHg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/businessinsider.com/9ea607142652ea3bbd2f0792b3f6b821"
              height="400"
              width="300"
              onClick={this.handleClick}
              id="elon2"
            />
          </div>
          <hr />
          <div class="imgContainer1">
            <img
              src="https://collectionimages.npg.org.uk/large/mw82857/Bill-Gates.jpg"
              className="middle-img"
              height="400"
              width="300"
              onClick={this.handleClick}
              id="bill1"
            />
          </div>
        </div>
      );
    }

    if (this.state.card === 3) {
      return (
        <div id="comb">
          <div class="imgContainer">
            <img
              src="https://the-hollywood-gossip-res.cloudinary.com/iu/s--33NNfBAs--/t_xlarge_p/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1532023485/mark-zuckerberg-speaks.png"
              height="400"
              width="300"
              onClick={this.handleClick}
              id=""
              alt="Image Not Found!"
            />
          </div>
          <hr />
          <div class="imgContainer1">
            <img
              src="https://s.ebiografia.com/assets/img/authors/st/ev/steve-jobs-2-l.jpg"
              class="middle-img"
              height="400"
              width="300"
              onClick={this.handleClick}
              alt="Image Not Found!"
            />
          </div>
        </div>
      );
    }

    if (this.state.card === 4) {
      return (
        <div id="comb">
          <div class="imgContainer">
            <img
              src="https://the-hollywood-gossip-res.cloudinary.com/iu/s--33NNfBAs--/t_xlarge_p/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1532023485/mark-zuckerberg-speaks.png"
              height="400"
              width="300"
              onClick={this.handleClick}
              alt="Image Not Found!"
            />
          </div>
          <hr />
          <div class="imgContainer1">
            <img
              src="https://collectionimages.npg.org.uk/large/mw82857/Bill-Gates.jpg"
              class="middle-img"
              height="400"
              width="300"
              onClick={this.handleClick}
              alt="Image Not Found!"
            />
          </div>
        </div>
      );
    }

    if (this.state.card === 5) {
      return (
        <div id="comb">
          <div class="imgContainer">
            <img
              src="https://img.etimg.com/thumb/msid-50318943,width-643,imgsize-337990,resizemode-4/four-things-even-google-doesnt-know-about-its-ceo-sundar-pichai.jpg"
              height="400"
              width="300"
              onClick={this.handleClick}
              alt="Image Not Found!"
            />
          </div>
          <hr />
          <div class="imgContainer1">
            <img
              src="https://amp.businessinsider.com/images/55ae61f22acae76e098b70fa-750-546.jpg"
              class="middle-img"
              height="400"
              width="300"
              onClick={this.handleClick}
              alt="Image Not Found!"
            />
          </div>
        </div>
      );
    }

    if (this.state.card === 6) {
      return (
        <div id="comb">
          <div class="imgContainer">
            <img
              src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Tim_Cook_4.jpg"
              height="400"
              width="300"
              onClick={this.handleClick}
              alt="Image Not Found!"
            />
          </div>
          <hr />
          <div class="imgContainer1">
            <img
              src="https://img.etimg.com/thumb/msid-50318943,width-643,imgsize-337990,resizemode-4/four-things-even-google-doesnt-know-about-its-ceo-sundar-pichai.jpg"
              class="middle-img"
              height="400"
              width="300"
              onClick={this.handleClick}
              alt="Image Not Found!"
            />
          </div>
        </div>
      );
    }

    if (this.state.card === 7) {
      return (
        <div id="comb">
          <div class="imgContainer">
            <img
              src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Tim_Cook_4.jpg"
              height="400"
              width="300"
              onClick={this.handleClick}
              alt="Image Not Found!"
            />
          </div>
          <hr />
          <div class="imgContainer1">
            <img
              src="https://amp.businessinsider.com/images/55ae61f22acae76e098b70fa-750-546.jpg"
              class="middle-img"
              height="400"
              width="300"
              onClick={this.handleClick}
              alt="Image Not Found!"
            />
          </div>
        </div>
      );
    }

    if (this.state.card === 8) {
      return (
        <div id="comb">
          <div class="imgContainer">
            <img
              src="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2018/04/Jeff-Bezos-Re.jpg"
              height="400"
              width="300"
              onClick={this.handleClick}
              alt="Image Not Found!"
            />
          </div>
          <hr />
          <div class="imgContainer1">
            <img
              src="https://s.abcnews.com/images/Technology/gty_larry_page_google_tk_130514_wmain.jpg"
              class="middle-img"
              height="400"
              width="300"
              onClick={this.handleClick}
              alt="Image Not Found!"
            />
          </div>
        </div>
      );
    }

    if (this.state.card === 9) {
      return (
        <div id="comb">
          <div class="imgContainer">
            <img
              src="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2018/04/Jeff-Bezos-Re.jpg"
              height="400"
              width="300"
              onClick={this.handleClick}
              alt="Image Not Found!"
            />
          </div>
          <hr />
          <div class="imgContainer1">
            <img
              src="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/01/18/104225995-_95A5004.1910x1000.jpg?v=1540458420"
              class="middle-img"
              height="400"
              width="300"
              onClick={this.handleClick}
              alt="Image Not Found!"
            />
          </div>
        </div>
      );
    }

    if (this.state.card === 10) {
      return (
        <div id="comb">
          <div class="imgContainer">
            <img
              src="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2018/04/Jeff-Bezos-Re.jpg"
              alt="Image Not Found!"
              height="400"
              width="300"
              onClick={this.handleClick}
            />
          </div>
          <hr />
          <div class="imgContainer1">
            <img
              src="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/01/18/104225995-_95A5004.1910x1000.jpg?v=1540458420"
              class="middle-img"
              height="400"
              width="300"
              onClick={this.handleClick}
              alt="Image Not Found!"
            />
          </div>
        </div>
      );
    }

    if (this.state.card > 10) {
      var getData = [];
      getData.push(this.getMax());
      return (
        <Result
          data={getData}
          scores={[
            this.state.Ra,
            this.state.Rb,
            this.state.Rc,
            this.state.Rd,
            this.state.Re,
            this.state.Rf,
            this.state.Rg,
            this.state.Rh,
            this.state.Ri,
            this.state.Rj
          ]}
        />
      );
    }
  }
}
export default Card;
