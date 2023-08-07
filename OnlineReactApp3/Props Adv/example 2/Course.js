class Course extends React.Component {
  render() {
    let { name, titles } = this.props;
    let subjects = titles.map((s) => <li>{s}</li>);
    return (
      <div>
        <h2>Courses Name : {name}</h2>
        <section>
          Titles :<ul>{subjects}</ul>
        </section>
      </div>
    );
  }
}
