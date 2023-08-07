class MyApp extends React.Component {
  render() {
    return (
      <div>
        <Student
          name="Ravi"
          age={20}
          subjects={["Math", "Phy", "Chem"]}
          marks={[70, 85, 69]}
        />
      </div>
    );
  }
}
let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);
