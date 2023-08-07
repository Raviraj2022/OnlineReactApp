class Course extends React.Component {
  render() {
    let { name, titles } = this.props;
    let subjects = [];
    titles.forEach((s) => {
      subjects.push(<li>{s}</li>);
    });
    return (
      <div>
        <h2>Course Name :{name}</h2>
        <section>
          Titles :<ul>{subjects}</ul>
        </section>
      </div>
    );
  }
}
