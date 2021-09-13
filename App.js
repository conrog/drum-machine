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

const DrumPad = (props) => {
  return props.drums.map((drum, index) => (
    <div key={`drum-${index}`}>
      <h2>{drum.name}</h2>
      <audio id={drum.name}>
        <source src={drum.src} type="audio/mpeg"></source>
      </audio>
    </div>
  ));
};

//App holds state for volume of drum machine
class App extends React.Component {
  constructor(props) {
    super(props);
    this.playDrum = this.playDrum.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    document.addEventListener("keydown", this.handleKeyPress);
  }
  playDrum({ name }) {
    document.getElementById(name).currentTime = 0;
    document.getElementById(name).play();
  }
  handleKeyPress(event) {
    drums.map((drum) => {
      if (drum.hotkey === event.key.toUpperCase()) {
        this.playDrum(drum);
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Drum Machine React App</h1>
        <DrumPad drums={drums} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
