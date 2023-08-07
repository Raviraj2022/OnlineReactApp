class MyApp extends React.Component {
  render() {
    return <Greetings who="Ravi" from="Shiv" />;
  }
}
let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);
