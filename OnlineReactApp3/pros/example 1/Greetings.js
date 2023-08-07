class Greetings extends React.Component {
  render() {
    //this.props.who = "Amit";
    let myHeading = (
      <h2>
        Happy Holi to {this.props.who} from {this.props.from}
      </h2>
    );
    return myHeading;
  }
}
