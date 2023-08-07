class Student extends React.Component {
  render() {
    let { subjects, marks } = this.props;
    let total = 0;

    let arr = marks.map((m) => {
      total += m;
      return <li>{m}</li>;
    });
    let studentStyle = {
      backgroundColor: "skyBlue",
      borderRadius: "20px",
      border: "dashed 2px Black",
      FontFamily: "'Macondo',cursive",
    };
    let passStyle = { backgroundColor: "limeGreen" };
    let failStyle = { backgroundColor: "Brown" };
    let isPass = total >= 150;
    return (
      <div style={studentStyle}>
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
          <span style={isPass ? passStyle : failStyle}>
            Result :<b>{isPass ? "Pass" : "Fail"}</b>
          </span>
        </p>
      </div>
    );
  }
}
