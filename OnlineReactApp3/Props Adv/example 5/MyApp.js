class MyApp extends React.Component {
  render() {
    return (
      <div>
        <Greetins who="Ravi" from="Shiv" />;
        <Greetins who="Ravi" />;
        <Greetins from="shiv" />;
        <Greetins />;
      </div>
    );
  }
}
let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);
