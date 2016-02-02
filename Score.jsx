Score = React.createClass({
  propTypes: {
    score: React.PropTypes.object.isRequired
  },
  increaseOne() {
    let id = this.props.score._id;
    Scores.update(id, {
      $set: {score: this.props.score.score+1}
    });
  },
  decreaseOne() {
    let id = this.props.score._id;
    Scores.update(id, {
      $set: {score: this.props.score.score-1}
    });
  },
  deleteUser() {
    Scores.remove(this.props.score._id);
  },
  render() {
    return (
      <p> {this.props.score.name} : {this.props.score.score}
        <button className="decrease" onClick={this.decreaseOne}>-</button>
        <button className="increase" onClick={this.increaseOne}>+</button>
        <button className="Delete" onClick={this.deleteUser}>Delete</button>
      </p>
    );
  }
});
