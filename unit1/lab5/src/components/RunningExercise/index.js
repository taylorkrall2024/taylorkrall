class RunningExercise extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        lapTimes: [],
      };
    }
  
    // Function to record lap time
    recordLap = () => {
      const now = new Date(); // Capture current time
      this.setState(prevState => ({
        lapTimes: [...prevState.lapTimes, now],
      }));
    }
  
    render() {
      return (
        <div>
          <h2>Running Exercise</h2>
          <button onClick={this.recordLap}>Record Lap</button>
          <div>
            <h3>Laps:</h3>
            {this.state.lapTimes.map((time, index) => (
              <div key={index}>Lap {index + 1}: {time.toLocaleTimeString()}</div>
            ))}
          </div>
        </div>
      );
    }
  }
  
  export default RunningExercise;
  