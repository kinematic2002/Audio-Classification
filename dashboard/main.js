// /*
// design by Voicu Apostol.
// design: https://dribbble.com/shots/3533847-Mini-Music-Player
// I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
// You can fork on github: https://github.com/muhammederdem/mini-player
// */

// new Vue({
//   el: "#app",
//   data() {
//     return {
//       audio: null,
//       circleLeft: null,
//       barWidth: null,
//       duration: null,
//       currentTime: null,
//       isTimerPlaying: false,
//       tracks: [
//         {
//           name: "Beneath The Tears",
//           artist: "Sober Ember",
//           cover: "https://i.pinimg.com/236x/e8/bb/10/e8bb108d1aab76692f6db2af816b8dec--album-cover-design-illustration-cover-album-design.jpg",
//           source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
//           url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
//           favorited: false
//         },
//         {
//           name: "Everybody Knows",
//           artist: "Leonard Cohen",
//           cover: "https://i.pinimg.com/236x/e8/bb/10/e8bb108d1aab76692f6db2af816b8dec--album-cover-design-illustration-cover-album-design.jpg",
//           source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
//           url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
//           favorited: true
//         },
//         {
//           name: "Extreme Ways",
//           artist: "Moby",
//           cover: "https://i.pinimg.com/236x/e8/bb/10/e8bb108d1aab76692f6db2af816b8dec--album-cover-design-illustration-cover-album-design.jpg",
//           source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
//           url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
//           favorited: false
//         },
//         {
//           name: "Butterflies",
//           artist: "Sia",
//           cover: "https://i.pinimg.com/236x/e8/bb/10/e8bb108d1aab76692f6db2af816b8dec--album-cover-design-illustration-cover-album-design.jpg",
//           source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
//           url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
//           favorited: false
//         },
//         {
//           name: "The Final Victory",
//           artist: "Haggard",
//           cover: "https://i.pinimg.com/236x/e8/bb/10/e8bb108d1aab76692f6db2af816b8dec--album-cover-design-illustration-cover-album-design.jpg",
//           source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3",
//           url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
//           favorited: true
//         },
//         {
//           name: "Genius ft. Sia, Diplo, Labrinth",
//           artist: "LSD",
//           cover: "https://i.pinimg.com/236x/e8/bb/10/e8bb108d1aab76692f6db2af816b8dec--album-cover-design-illustration-cover-album-design.jpg",
//           source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",
//           url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
//           favorited: false
//         },
//         {
//           name: "The Comeback Kid",
//           artist: "Lindi Ortega",
//           cover: "https://i.pinimg.com/236x/e8/bb/10/e8bb108d1aab76692f6db2af816b8dec--album-cover-design-illustration-cover-album-design.jpg",
//           source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",
//           url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
//           favorited: true
//         },
//         {
//           name: "Overdose",
//           artist: "Grandson",
//           cover: "https://i.pinimg.com/236x/e8/bb/10/e8bb108d1aab76692f6db2af816b8dec--album-cover-design-illustration-cover-album-design.jpg",
//           source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3",
//           url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
//           favorited: false
//         },
//         {
//           name: "Rag'n'Bone Man",
//           artist: "Human",
//           cover: "https://i.pinimg.com/236x/e8/bb/10/e8bb108d1aab76692f6db2af816b8dec--album-cover-design-illustration-cover-album-design.jpg",
//           source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
//           url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
//           favorited: false
//         }
//       ],
//       currentTrack: null,
//       currentTrackIndex: 0,
//       transitionName: null
//     };
//   },
//   methods: {
//     play() {
//       // check if context is in suspended state (autoplay policy)
//       if (this.audio.state === 'suspended') {
//         this.audio.resume();
//       }
//       this.audio.play();
//     //   if (this.dataset.playing === 'false') {
//     //     audioElement.play();
//     //     this.dataset.playing = 'true';
//     //     this.isTimerPlaying = true;
//     // } else if (this.dataset.playing === 'true') {
//     //     audioElement.pause();
//     //     this.dataset.playing = 'false';
//     //     this.isTimerPlaying = false;
//     // }
//       // if (this.audio.state==='suspended') {
//       //   this.audio.resume();
//       //   this.isTimerPlaying = true;
//       // } else {
//       //   this.audio.suspend();
//       //   this.isTimerPlaying = false;
//       // }
//     },
//     generateTime() {
//       let width = (100 / this.audio.duration) * this.audio.currentTime;
//       this.barWidth = width + "%";
//       this.circleLeft = width + "%";
//       let durmin = Math.floor(this.audio.duration / 60);
//       let dursec = Math.floor(this.audio.duration - durmin * 60);
//       let curmin = Math.floor(this.audio.currentTime / 60);
//       let cursec = Math.floor(this.audio.currentTime - curmin * 60);
//       if (durmin < 10) {
//         durmin = "0" + durmin;
//       }
//       if (dursec < 10) {
//         dursec = "0" + dursec;
//       }
//       if (curmin < 10) {
//         curmin = "0" + curmin;
//       }
//       if (cursec < 10) {
//         cursec = "0" + cursec;
//       }
//       this.duration = durmin + ":" + dursec;
//       this.currentTime = curmin + ":" + cursec;
//     },
//     updateBar(x) {
//       let progress = this.$refs.progress;
//       let maxduration = this.audio.duration;
//       let position = x - progress.offsetLeft;
//       let percentage = (100 * position) / progress.offsetWidth;
//       if (percentage > 100) {
//         percentage = 100;
//       }
//       if (percentage < 0) {
//         percentage = 0;
//       }
//       this.barWidth = percentage + "%";
//       this.circleLeft = percentage + "%";
//       this.audio.currentTime = (maxduration * percentage) / 100;
//       this.audio.resume();
//     },
//     clickProgress(e) {
//       this.isTimerPlaying = true;
//       this.audio.suspend();
//       this.updateBar(e.pageX);
//     },
//     prevTrack() {
//       this.transitionName = "scale-in";
//       this.isShowCover = false;
//       if (this.currentTrackIndex > 0) {
//         this.currentTrackIndex--;
//       } else {
//         this.currentTrackIndex = this.tracks.length - 1;
//       }
//       this.currentTrack = this.tracks[this.currentTrackIndex];
//       this.resetPlayer();
//     },
//     nextTrack() {
//       this.transitionName = "scale-out";
//       this.isShowCover = false;
//       if (this.currentTrackIndex < this.tracks.length - 1) {
//         this.currentTrackIndex++;
//       } else {
//         this.currentTrackIndex = 0;
//       }
//       this.currentTrack = this.tracks[this.currentTrackIndex];
//       this.resetPlayer();
//     },
//     resetPlayer() {
//       this.barWidth = 0;
//       this.circleLeft = 0;
//       this.audio.currentTime = 0;
//       this.audio.src = this.currentTrack.source;
//       setTimeout(() => {
//         if(this.isTimerPlaying) {
//           this.audio.play();
//         } else {
//           this.audio.play();
//         }
//       }, 300);
//     },
//     favorite() {
//       this.tracks[this.currentTrackIndex].favorited = !this.tracks[
//         this.currentTrackIndex
//       ].favorited;
//     }
//   },
//   created() {
//     let vm = this;
//     const audioElement = document.querySelector('audio');

//     this.currentTrack = this.tracks[0];
//     const AudioContext = window.AudioContext || window.webkitAudioContext;
//     const audioContext = new AudioContext();
//     this.audio = audioContext.createMediaElementSource(audioElement);
//     this.audio.src = this.currentTrack.source;
//     this.audio.connect(audioContext.destination);

//     this.audio.ontimeupdate = function() {
//       vm.generateTime();
//     };
//     this.audio.onloadedmetadata = function() {
//       vm.generateTime();
//     };
//     this.audio.onended = function() {
//       vm.nextTrack();
//       this.isTimerPlaying = true;
//     };

//     // this is optional (for preload covers)
//     for (let index = 0; index < this.tracks.length; index++) {
//       const element = this.tracks[index];
//       let link = document.createElement('link');
//       link.rel = "prefetch";
//       link.href = element.cover;
//       link.as = "image"
//       document.head.appendChild(link)
//     }
//   }
// });

// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

// get the audio element
const audioElement = document.querySelector('audio');
const playIcon = document.querySelector('#play');
const pauseIcon = document.querySelector('#pause');

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);

var filterNode = audioContext.createBiquadFilter();
filterNode.type = 'lowpass';

track.connect(audioContext.destination);
track.connect(filterNode);

filterNode.connect(audioContext.destination);

// select our play button
const playButton = document.querySelector('#button');

playButton.addEventListener('click', function() {
    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    // play or pause track depending on state
    if (this.dataset.playing === 'false') {
        audioElement.play();
        this.dataset.playing = 'true';
        setPause();
        y_start();
    } else if (this.dataset.playing === 'true') {
        audioElement.pause();
        this.dataset.playing = 'false';
        setPlay();
        y_stop();
    }
}, false);

audioElement.addEventListener('ended', () => {
  playButton.dataset.playing = 'false';
}, false);

const setPlay = (()=>{
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
})

const setPause = (()=>{
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
})

var biquadFilterFrequencySlider = document.querySelector('#biquadFilterFrequencySlider');
var biquadFilterDetuneSlider = document.querySelector('#biquadFilterDetuneSlider');
var biquadFilterQSlider = document.querySelector('#biquadFilterQSlider');

biquadFilterFrequencySlider.oninput = function(evt){
    filterNode.frequency.value = parseFloat(evt.target.value);
    console.log(evt.target.value)
};

biquadFilterDetuneSlider.oninput = function(evt){
    filterNode.detune.value = parseFloat(evt.target.value);
};

biquadFilterQSlider.oninput = function(evt){
    filterNode.Q.value = parseFloat(evt.target.value);
};

var do_this = null;

function y(){
   // what you wanna do
   console.log("Hello")
}

do_this = setInterval(y, 1000);

function y_start(){
    do_this = setInterval(y, 1000);
};
function y_stop(){
    do_this = clearInterval(do_this);
};