class MyApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Courses Details</h1>
        <Course name="JAVA" titles={["Java SE", "Jakarta EE", "Android"]} />
        <Course
          name="Frontend App Devlopment"
          titles={["HTML", "CSS", "JavaScript", "React JS"]}
        />
      </div>
    );
  }
}
let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);
