class Student extends React.Component {
  render() {
    let { subjects, marks } = this.props;
    let total = 0;
    let arr = marks.map((m) => {
      total += m;
      return <li>{m}</li>;
    });
    let studentStyle = {
      backgroundColor: "Crimson",
      borderRadius: "20px",
      border: "dashed 2px darkBlue",
      fontFamily: "Maconda ,cursive",
    };
    return (
      <div style={studentStyle}>
        {" "}
        <h2>Student Detail</h2>
        <p>Name :{this.props.name}</p>
        <p>Age :{this.props.age}</p>
        <p>Subjects :</p>
        <ul>
          {subjects.map((s) => (
            <li>{s}</li>
          ))}
        </ul>
        <p>Marks :</p>
        <ul>{arr}</ul>
        <p>
          Total :<b>{total}</b>
        </p>
        <p>
          Result :<b>{total >= 150 ? "Pass" : "Fail"}</b>
        </p>
      </div>
    );
  }
}
