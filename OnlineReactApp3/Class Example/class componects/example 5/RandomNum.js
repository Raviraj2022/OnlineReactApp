function getNumber() {
  const myNums = [10, 5, 3, 1, 11, 6, 8, 21, 7];
  const num = myNums[Math.floor(Math.random() * myNums.length)];
  return num;
}
class RandomNum extends React.Component {
  render() {
    let num = getNumber();
    let msg = 6;
    if (num == 6) {
      msg = (
        <p>
          <h3>Congratulation !! You Won</h3>
          <img src="../../images/gilhar.jpeg" />
        </p>
      );
    } else {
      msg = <small>Sorry !! Better luck Next time</small>;
    }
    return (
      <div>
        <p>You got the num {num}</p>
        {msg}
      </div>
    );
  }
}
