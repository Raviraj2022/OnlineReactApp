class MyApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Course Details :</h1>
        <Course name=" Java" titles={["Java SE", "Jakarta EE", "Android"]} />
        <Course
          name=" Frontend App Development"
          titles={["HTML", "CSS", "JAVASCRIPT", "React JS"]}
        />
      </div>
    );
  }
}
let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);
