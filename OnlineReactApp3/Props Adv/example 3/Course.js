class Course extends React.Component {
  render() {
    let { name, titles } = this.props;
    return (
      <div>
        <h2>Course Name : {name}</h2>
        <section>
          Titles :
          <ul>
            {titles.map((s) => (
              <li>{s}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
