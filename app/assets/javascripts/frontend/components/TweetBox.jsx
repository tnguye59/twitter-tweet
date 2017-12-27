export default class TweetBox extends React.Component {
  sendTweet(event) {
    event.preventDefault();
    this.props.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value = '';
  }
  render() {
    return (
      <form className="row" onSubmit={this.sendTweet.bind(this)}>
        <div className="input-field">
          <textarea className="materialize-textarea" ref="tweetTextArea" />
          <label>Whats happening</label>
          <button className="btn right" type="submit">
            Tweet
          </button>
        </div>
      </form>
    );
  }
}
