class MyApp extends React.Component {
  render() {
    return (
      <div>
        <Student
          name="Ravi"
          age={20}
          subjects={["phy", "chem", "Math"]}
          marks={[85, 55, 68]}
          isPass={true}
          address={{ city: "Rewa", pincode: 486441 }}
        />
      </div>
    );
  }
}
let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);
