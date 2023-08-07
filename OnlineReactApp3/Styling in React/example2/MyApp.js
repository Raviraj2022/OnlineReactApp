class MyApp extends React.Component {
  render() {
    return (
      <div>
        <Student
          name="Ravi"
          age={20}
          subjects={["Math", "Phy", "Chem"]}
          marks={[50, 60, 40]}
        />
      </div>
    );
  }
}
let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);
