import React, { Component } from 'react';
import './App.css';
import image01 from "./images/01.jpg";
import image02 from "./images/02.jpg";
import image03 from "./images/03.jpg";
import image04 from "./images/04.jpg";
import image05 from "./images/10.jpg";
import image06 from "./images/11.jpg";
import image07 from "./images/12.jpg";
import image08 from "./images/13.jpg";
import image09 from "./images/15.jpg";
import image10 from "./images/16.jpg";
import avatar from "./images/Avatar.png";
import pause from "./images/pause.png";
import play from "./images/play.png";
import audioClip from "./sounds/end.mp3";
import introClip from "./sounds/intro.mp3";
import a1 from "./sounds/Media1.mp3";
import a2 from "./sounds/Media2.mp3";
import a3 from "./sounds/Media3.mp3";
import a4 from "./sounds/Media4.mp3";
import a5 from "./sounds/a5.mp3";
import a6 from "./sounds/Media6.mp3";
import a7 from "./sounds/a7.mp3";
import a8 from "./sounds/Media8.mp3";
import a9 from "./sounds/a9.mp3";
import a10 from "./sounds/a10.mp3";
import s1 from "./images/Picture1.png";
import s2 from "./images/Picture2.png";
import s3 from "./images/Picture3.png";
import s4 from "./images/Picture4.png";
import s5 from "./images/Picture5.jpg";
import s6 from "./images/Picture6.png";
import s7 from "./images/Picture7.png";
import s8 from "./images/Picture8.png";
import s9 from "./images/Picture9.png";
import s10 from "./images/Picture10.png";




var slideIndex = 1;
export class App extends Component {
  constructor(props){
    super();
    this.firstQ = React.createRef();
  }

  componentDidUpdate(){
    this.showSlides(slideIndex);
  }


  showSlides(n) {
    if(document.getElementById('book')){
      var i;
      var slides =  Array.from(document.getElementsByClassName("slide"));
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "flex";
    }
  }

  plusSlides(n) {
    if(document.getElementById("pageNum")){
      var sound = document.getElementById('intro-sound');
      if(!sound.paused){
        sound.pause();
      }
      this.showSlides(slideIndex += n);  
      document.getElementById("pageNum").innerHTML = String(slideIndex-1);
      if(slideIndex == 1){
          document.getElementById("pageNum").innerHTML = "";
      }
      if(n > 0){
        document.getElementById("n").style.display = "none";
      }
      else{
        document.getElementById("n").style.display = "block";
      }
      if(slideIndex >= 3){
          document.getElementById("p").style.display = "block";
      }
      else{
          document.getElementById("p").style.display = "none";
      }
    }
  }

  toggle(id){
    if(document.getElementById(id)){
      var text = document.getElementById(id).style.display;
      if(text == "flex"){
          document.getElementById(id).style.display = "none";
      }
      else{
          document.getElementById(id).style.display = "flex";
      }
    }
  }

  show(id){
    if(document.getElementById(id)){
      document.getElementById(id).style.display = "block";
    }
  }

  toggleSound(id){
    var sound = document.getElementById(id);
    if(sound.paused || sound.duration == 0){
      sound.play();
    }
    else{
      sound.pause();
    }
  }

  hide(id){
    if(document.getElementById(id)){
      document.getElementById(id).style.display = "none";
    }
  }

  showNext(){
    if(document.getElementById("n")){
      document.getElementById("n").style.display = "block";
    }
  }

  playQuestion(){
    if(document.getElementById("story-retel") && document.getElementById("pause") && document.getElementById("play")){
      var question = document.getElementById("story-retel");
      console.log(question.duration);
      document.getElementById("pause").style.display = "block";
      document.getElementById("play").style.display = "none";
      question.play();
    }
  }

  updateTime(){
    var question = document.getElementById("story-retel");
    document.getElementById("audio-time").innerHTML = question.currentTime
  }

  pauseQuestion(){
    if(document.getElementById("story-retel") && document.getElementById("pause") && document.getElementById("play")){
      var question = document.getElementById("story-retel");
      console.log(question.currentTime);
      document.getElementById("pause").style.display = "none";
      document.getElementById("play").style.display = "block";
      question.pause();
    }
  }

  selectOption(id, num){
    var options =  ["a", "b", "c", "d"];
    for(var i = 0; i < options.length; i++){
      var optionId = num + options[i];
      document.getElementById(optionId).style.fontWeight = "normal";
    }
    document.getElementById(id).style.fontWeight = "bold";
  }

  record(){
    if(document.getElementById("recordButton")){
      if(document.getElementById("recordButton").innerHTML == "ENREGISTRER"){
        document.getElementById("recordButton").innerHTML = "PAUSE"
      }
      else{
        document.getElementById("recordButton").innerHTML = "ENREGISTRER"
      }
    }
  }

  render() {
    return (
      <div id='book'>
        <audio id="a1">
          <source src={a1} type="audio/mpeg" />
        </audio>
        <audio id="a2">
          <source src={a2} type="audio/mpeg" />
        </audio>
        <audio id="a3">
          <source src={a3} type="audio/mpeg" />
        </audio>
        <audio id="a4">
          <source src={a4} type="audio/mpeg" />
        </audio>
        <audio id="a5">
          <source src={a5} type="audio/mpeg" />
        </audio>
        <audio id="a6">
          <source src={a6} type="audio/mpeg" />
        </audio>
        <audio id="a7">
          <source src={a7} type="audio/mpeg" />
        </audio>
        <audio id="a8">
          <source src={a8} type="audio/mpeg" />
        </audio>
        <audio id="a9">
          <source src={a9} type="audio/mpeg" />
        </audio>
        <audio id="a10">
          <source src={a10} type="audio/mpeg" />
        </audio>
        {/* Slideshow container */}
        <div className="phoneText">Not available on this device</div>

        <div className="slideshow-container">
            <div className="title">La d??cision</div>
            <div className="slide-container">
                <div className="arrow-container">
                    <div className="next" id="p" onClick={() => this.plusSlides(-1)}>&#10094;</div>
                </div>

                {/* Slides */}
                {/* Intro Slide */}
                <div className="slide fade" style={{display: "flex"}}>
                    <div className="image-container">
                        <img alt='' className="image" src={image01} alt="Intro page image"/>
                        <div className="avatar-container">
                          <div className="flex-row">
                            <img alt='' className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.show('intro'); this.toggleSound('intro-sound'); this.hide('click1'); this.showNext();}}/>
                            <i id="click1" class="fa fa-arrow-left">&larr;Appuie ici</i>
                          </div>
                        </div>
                        <audio id="intro-sound">
                            <source src={introClip} type="audio/mpeg" />
                        </audio>
                        <div id="intro" className="speech sb1">
                        Aujourd???hui, tu vas lire l???histoire ?? La d??cision ??.??Appuie sur la fl??che pour passer ?? la page suivante. Today you will read the story ???La d??cision.??? Click on the arrow to move to the next page.
                        </div>
                    </div>

                </div>
                {/* Slide 1 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img alt='' className="image" src={image02} alt="First page image"/>
                        <div className="avatar-container">
                          <div className="flex-row">
                            <img alt='' className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.toggle('s1'); this.hide('click2'); this.toggleSound('a1'); this.showNext()}}/>
                            <i id="click2" class="fa fa-arrow-left">&larr;Appuie ici</i>
                          </div>
                          <p>Mon village a beaucoup de probl??mes. <span className="highlight">Nous faisons la queue</span> pour aller chercher de l???eau d???un seul robinet.</p>
                          <div id="s1" className="speech2">
                            nous faisons la queue : nous nous mettons en ligne
                            <img alt='' className="popup-image" src={s1} alt="A group of children"/>
                          </div>
                        </div>
                    </div>



                </div>
                {/* Slide 2 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image03} alt="Second page image"/>
                        <div className="avatar-container">
                            <div className="flex-row">
                              <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.showNext(); this.hide('click3'); this.toggleSound('a2'); this.toggle('s2')}}/>
                              <i id="click3" class="fa fa-arrow-left">&larr;Appuie ici</i>
                            </div>
                            <p>Nous attendons <span className="highlight">la nourriture</span> donn??e par les autres.</p>
                            <div id="s2" className="speech2">
                              la nourriture : ce qu???on mange <br/>
                              <img className="popup-image" src={s2} alt="A group of colorful food items"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image04} alt="Third page image"/>
                        <div className="avatar-container">
                            <div className="flex-row">
                              <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.showNext(); this.hide('click4'); this.toggleSound('a3'); this.toggle('s3')}}/>
                              <i id="click4" class="fa fa-arrow-left">&larr;Appuie ici</i>
                            </div>
                            <p>Nous barrons nos maisons t??t ?? cause <span className="highlight">des voleurs</span>.
                            </p>
                            <div id="s3" className="speech2">
                              des voleurs : des gens qui prennent des choses qui ne sont pas ?? eux <br/>
                              <img className="popup-image" src={s3} alt="A group of robbers"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slide 4 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image05} alt="Fourth page image"/>
                        <div className="avatar-container">
                            <div className="flex-row">
                              <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.showNext(); this.hide('click5'); this.toggleSound('a4'); this.toggle('s4')}}/>
                              <i id="click5" class="fa fa-arrow-left">&larr;Appuie ici</i>
                            </div>
                            <p>Puis un jour, le robinet <span className="highlight">se tarit</span> et nos conteneurs sont rest??s vides et nous n???avons plus d???eau.
                            </p>
                            <div id="s4" className="speech2">
                              se tarit : arr??te de couler<br/>
                              <img className="popup-image" src={s4} alt="No water tap"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slide 5 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image06} alt="Fifth page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.showNext(); this.toggleSound('a5'); this.toggle('s5')}}/>
                            <p>Par la suite, mon p??re marche de maison en maison et demande aux gens de venir ?? <span className="highlight">une r??union</span> du village.
                            </p>
                            <div id="s5" className="speech2">
                              une r??union :  quand on se retrouve pour travailler ensemble<br/>
                              <img className="popup-image" src={s5} alt="A group of people sitting around a table with computers"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slide 6 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image07} alt="Sixth page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} alt="Owl avatar"  onClick={() => {this.showNext(); this.toggleSound('a6'); this.toggle('s6')}}/>
                            <p>Les gens <span className="highlight">se rassemblent</span> sous un grand arbre et ??coutent. 
                            </p>
                            <div id="s6" className="speech2">
                              se rassemblent : se mettent ensemble<br/>
                              <img className="popup-image" src={s6} alt="Sixth page image"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slide 7 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image08} alt="Seventh page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.showNext(); this.toggleSound('a7'); this.toggle('s7')}}/>
                            <p>Mon p??re se l??ve et dit, ?? Il faut travailler ensemble pour <span className="highlight">r??soudre</span> nos probl??mes ??. 
                            </p>
                            <div id="s7" className="speech2">
                              r??soudre : trouver une solution ?? un probl??me  <br/>
                              <img className="popup-image" src={s7} alt="Children trying to resolve a problem"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slide 8 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image09} alt="Eight page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.showNext(); this.toggleSound('a8'); this.toggle('s8')}}/>
                            <p>Une femme dit, ?? Les femmes peuvent m???aider ?? <span className="highlight">faire pousser</span> de la nourriture ??.
                            </p>
                            <div id="s8" className="speech2">
                              faire pousser : aider une plante ?? grandir <br/>
                              <img className="popup-image" src={s8} alt="Boy and girl gardening"/>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Slide 9 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image10} alt="Ninth page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.showNext(); this.toggleSound('a9'); this.toggle('s9')}}/>
                            <p>Un autre homme se l??ve et dit, ?? Les hommes vont <span className="highlight">creuser un puits</span> ??.
                            </p>
                            <div id="s9" className="speech2">
                              creuser un puits : faire un trou dans la terre pour aller chercher de l???eau<br/>
                              <img className="popup-image" src={s9} alt="person digging a hole"/>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Slide 10 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image01} alt="Tenth page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.showNext(); this.toggleSound('a10'); this.toggle('s10')}}/>
                            <p>Nous criions tous <span className="highlight">d???une seule voix</span>, ?? Nous devons changer nos vies ??. Depuis ce jour, nous travaillons ensemble pour r??soudre nos probl??mes.
                            </p>
                            <div id="s10" className="speech2">
                              d???une seule voix : ensemble <br/>
                              <img className="popup-image" src={s10} alt="People screaming together"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Question Slide Intro */}
                <div className="slide fade">
                    <div className="question-prompt-container">
                        <p>Tu as lu l???histoire ?? La d??cision. ?? Appuie sur le bouton vert ?? ENREGISTRER ?? et raconte-moi l???histoire du d??but ?? la fin. Dis-moi tous les ??v??nements et d??tails dont tu te souviens. You have read the story "La d??cision". Press the green "Enregistrer" button and tell us the story from the beginning to the end. Include all the events and details that you can remember. </p>
                    </div>
                    <div className="audio-controls-container">
                        <audio id="story-retel" onPlay={this.updateTime}>
                            <source src={audioClip} type="audio/mpeg" />
                        </audio>
                        <img className="audio-button" id="play" src={play} onClick={() => {this.playQuestion(); this.showNext()}}/>
                        <img className="audio-button" id="pause" style={{display: 'none'}} src={pause} onClick={this.pauseQuestion}/>
                        <div id='recordButton' onClick={this.record}>ENREGISTRER</div>
                    </div>
                </div>    
                <div className="slide fade">
                    <div className="linkContainer">
                    <a href='https://rotman.az1.qualtrics.com/jfe/form/SV_6g5m4RpwsIrAmMe'><button className='linkBox'>Click here for comprehension test</button></a>
                    </div>
                </div>  
                                {/*     
                <div className="slide fade">
                  <div className="question-container">
                    <div className='question-box'>
                      <div className="question-title">Questions litt??rales</div>
                      <p className="question">1. Qu???est-ce que le fr??re oiseau fait lorsque le soleil se l??ve?</p>
                      <p className="question-option" id="1a" onClick={() => this.selectOption("1a", "1")}>a) il fait un plan. </p>
                      <p className="question-option" id="1b" onClick={() => this.selectOption("1b", "1")}>b) il s???envole vers la lumi??re du matin </p>
                      <p className="question-option" id="1c" onClick={() => this.selectOption("1c", "1")}>c) il se prom??ne </p>
                      <p className="question-option" id="1d" onClick={() => this.selectOption("1d", "1")}>d) il aide ses parents </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">2. Pourquoi est-ce que les enfants de cire sont si tristes? </p>
                      <p className="question-option" id="2a" onClick={() => this.selectOption("2a", "2")}>a) parce qu???ils ont une famille bien heureuse.  </p>
                      <p className="question-option" id="2b" onClick={() => this.selectOption("2b", "2")}>b) parce qu???ils aident leurs parents ?? la maison.  </p>
                      <p className="question-option" id="2c" onClick={() => this.selectOption("2c", "2")}>c) parce que leur fr??re fond au soleil br??lant.</p>
                      <p className="question-option" id="2d" onClick={() => this.selectOption("2d", "2")}>d) parce que leur fr??re l???oiseau s???envole. </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">3. Que font les fr??res ?? la maison? </p>
                      <p className="question-option" id="3a" onClick={() => this.selectOption("3a", "3")}>a) ils font du feu. </p>
                      <p className="question-option" id="3b" onClick={() => this.selectOption("3b", "3")}>b) ils se disputent. </p>
                      <p className="question-option" id="3c" onClick={() => this.selectOption("3c", "3")}>c) ils aident leurs parents. </p>
                      <p className="question-option" id="3d" onClick={() => this.selectOption("3d", "3")}>d) ils se prom??nent au soleil. </p>
                    </div>
                  </div>
                </div>

                <div className="slide fade">
                  <div className="question-container">
                    <div className='question-box'>
                      <div className="question-title">Questions ?? inf??rences </div>
                      <p className="question">4. Pourquoi est-ce que les enfants ne peuvent pas s???approcher d???un feu?</p>
                      <p className="question-option" id="4a" onClick={() => this.selectOption("4a", "4")}>a) parce qu???ils travaillent la nuit. </p>
                      <p className="question-option" id="4b" onClick={() => this.selectOption("4b", "4")}>b) parce qu???ils sont heureux. </p>
                      <p className="question-option" id="4c" onClick={() => this.selectOption("4c", "4")}>c) parce qu???ils sont faits de cire. </p>
                      <p className="question-option" id="4d" onClick={() => this.selectOption("4d", "4")}>d) parce qu???ils aident leurs parents. </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">5. Quelle est la morale de l???histoire? </p>
                      <p className="question-option" id="5a" onClick={() => this.selectOption("5a", "5")}>a) que les enfants sont faits de cire. </p>
                      <p className="question-option" id="5b" onClick={() => this.selectOption("5b", "5")}>b) que les enfants doivent ??couter leurs parents. </p>
                      <p className="question-option" id="5c" onClick={() => this.selectOption("5c", "5")}>c) que les enfants n???aiment pas le soleil. </p>
                      <p className="question-option" id="5d" onClick={() => this.selectOption("5d", "5")}>d) que les enfants peuvent faire un oiseau avec de la cire. </p>
                    </div>
                    <div className='question-box'>
                    <p className="question">6. Pourquoi est-ce que les fr??res avertissent leur fr??re? </p>
                      <p className="question-option" id="6a" onClick={() => this.selectOption("6a", "6")}>a) parce qu???il va aider leurs parents dans les champs. </p>
                      <p className="question-option" id="6b" onClick={() => this.selectOption("6b", "6")}>b) parce qu???il va fondre  au soleil s???il sort. </p>
                      <p className="question-option" id="6c" onClick={() => this.selectOption("6c", "6")}>c) parce qu???il va manger. </p>
                      <p className="question-option" id="6d" onClick={() => this.selectOption("6d", "6")}>d) parce qu???il va faire un plan. </p>
                    </div>
                  </div>
                </div>
                <div className="slide fade">
                  <div className="question-container">
                    <div className='question-box'>
                      <div className="question-title">Questions de vocabulaire </div>
                      <p className="question">7. Que signifie cire dans le texte: Ils doivent faire tout leur travail pendant la nuit. Puisqu???ils sont faits de cire!</p>
                      <p className="question-option" id="7a" onClick={() => this.selectOption("7a", "7")}>a) cire signifie: de glace </p>
                      <p className="question-option" id="7b" onClick={() => this.selectOption("7b", "7")}>b) cire signifie: ce qu???on utilise pour cuisiner </p>
                      <p className="question-option" id="7c" onClick={() => this.selectOption("7c", "7")}>c) cire signifie: ce qu???on utilise pour faire une chandelle </p>
                      <p className="question-option" id="7d" onClick={() => this.selectOption("7d", "7")}>d) cire signifie: de gentillesse </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">8. Que signifie fondre dans le texte:  Les enfants de cire sont si tristes de voir leur fr??re fondre. </p>
                      <p className="question-option" id="8a" onClick={() => this.selectOption("8a", "8")}>a) fondre signifie: devenir solide </p>
                      <p className="question-option" id="8b" onClick={() => this.selectOption("8b", "8")}>b) fondre signifie: devenir froid </p>
                      <p className="question-option" id="8c" onClick={() => this.selectOption("8c", "8")}>c) fondre signifie: se perdre </p>
                      <p className="question-option" id="8d" onClick={() => this.selectOption("8d", "8")}>d) fondre signifie: devenir liquide </p>
                    </div>
                  </div>
                </div> */}

                <div className="arrow-container">
                    <div className="next" id="n" onClick={() => this.plusSlides(1)}>&#10095;</div>
                </div>
            </div>

            
            <div className="pageNum-container">
                <p id="pageNum"></p>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
