class Greetins extends React.Component {
  static defaultProps = { who: "Everyone", from: "Team SCA" };
  render() {
    let myHeading = (
      <h1>
        Happy Holi to {this.props.who} from {this.props.from}
      </h1>
    );
    return myHeading;
  }
}
