const drums = [
  {
    name: "snare",
    hotkey: "Q",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20TD%207/47[kb]BRUSH_SLAP_5.wav.mp3",
  },
  {
    name: "hiHatClosed",
    hotkey: "W",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20TD%207/27[kb]HH%20ACOUSTIC_CLOSED_OUTER.wav.mp3",
  },
  {
    name: "hiHatOpen",
    hotkey: "E",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20TD%207/159[kb]HH%20ACOUSTIC_OPEN_OUTER.wav.mp3",
  },
  {
    name: "bass",
    hotkey: "A",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-8000/15[kb]8000bd-14.wav.mp3",
  },
  {
    name: "splash1",
    hotkey: "S",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20TD%207/62[kb]SPLASH%20TD_1.wav.mp3",
  },
  {
    name: "splash2",
    hotkey: "D",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20TD%207/62[kb]SPLASH%20TD_2.wav.mp3",
  },
  {
    name: "orchestra",
    hotkey: "Z",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20TD%207/76[kb]ORCHESTRA_HIT.wav.mp3",
  },
  {
    name: "zap",
    hotkey: "X",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20TD%207/38[kb]Q%20HiFi%20TD.wav.mp3",
  },
  {
    name: "snap",
    hotkey: "C",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20TD%207/25[kb]SNAPS%20Real.wav.mp3",
  },
];

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playDrum = this.playDrum.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    document.addEventListener("keydown", this.handleKeyPress);
  }
  playDrum() {
    let drum = document.getElementById(this.props.drum.name);
    drum.currentTime = 0;
    drum.play();
  }
  handleKeyPress(event) {
    if (this.props.drum.hotkey === event.key.toUpperCase()) {
      this.playDrum(this.props.drum.name);
    }
  }
  render() {
    return (
      <div onClick={this.playDrum}>
        <h2>{this.props.drum.name}</h2>
        <audio id={this.props.drum.name}>
          <source src={this.props.drum.src} type="audio/mpeg"></source>
        </audio>
        {this.props.drum.hotkey}
      </div>
    );
  }
}

//App holds state for volume of drum machine
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Drum Machine React App</h1>
        {drums.map((drum) => {
          return <DrumPad key={drum.name} drum={drum} />;
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
