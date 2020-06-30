import jumpMP3 from "../src/media/jump.mp3"
import bumpMP3 from "../src/media/bump.mp3"
import music from "../src/media/bgm.mp3"

export default class Sfx{
  constructor(hero, input) {
    this.hero = hero;
    this.input = input
    this.jumpAudio = new Audio(jumpMP3);
    this.bump = new Audio(bumpMP3);
    this.music = new Audio(music);
    this.jumpPlay = false;
    this.bumpPlay = false;
    this.musicPlay = false;
  };

  gameSFX = () => {
    if (this.hero.jumpSpeed === -10 && this.input.muted === false){
      this.jumpAudio.play();
      this.jumpPlay = true;
    } else if (this.hero.position.x < 0 && this.input.muted === false){
      this.bump.play();
      this.bumpPlay = true;
    }
  };

  gameMusic = () => {
    if (this.input.muted === false){
    this.music.loop = true
    this.music.play();
    this.musicPlay = true;
  }else if (this.input.muted === true){
    this.music.pause()
    this.musicPlay = false;
  }
  };

}