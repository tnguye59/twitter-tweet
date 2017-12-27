import serverActions from './actions/serverActions';

export default {
  getAllTweets() {
    $.get('/tweets')
      .success(rawTweets => serverActions.receivedTweets(rawTweets))
      .error(error => console.log(error));
  }
};

