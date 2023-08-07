class MyApp extends React.Component {
  render() {
    let myHeading = <h1>Hello UserJee!!!</h1>;
    return myHeading;
  }
}
let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);
