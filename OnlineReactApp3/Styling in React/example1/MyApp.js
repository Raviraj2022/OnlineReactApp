class MyApp extends React.Component {
  render() {
    return (
      <div>
        <Student
          name="Raj"
          age={20}
          subjects={["Math", "Phy", "Chem"]}
          marks={[68, 85, 55]}
        />
      </div>
    );
  }
}
let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);
