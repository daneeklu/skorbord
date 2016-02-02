
App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      scores: Scores.find({}).fetch()
    };
  },

  renderScores() {
    return this.data.scores.map((score) => {
      return <Score key={score._id} score={score} />;
    });
  },
  addPlayer(event) {
    event.preventDefault();
    let text = React.findDOMNode(this.refs.textInput).value.trim();

    Scores.insert({
      name: text,
      score: 0,
      createdAt: new Date()
    });
    React.findDOMNode(this.refs.textInput).value="";
  },
  render() {
    return (
      <div className="container">
        <h1>Scores</h1>
        <ul>
          {this.renderScores()}
        </ul>
        <form className="new-player" onSubmit={this.addPlayer} >
          <input type="text" ref="textInput" />
          <input type="submit" value="Add player" />
        </form>
      </div>
    );
  }
});
