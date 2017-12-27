import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';
import { EventEmitter } from 'events';
let _tweets = [];

const CHANGE_EVENT = 'CHANGE';

class TweetEventEmitter extends EventEmitter {
  getAll() {
    return _tweets.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    });
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener() {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener() {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register(action => {
  switch (action.ActionTypes) {
    case ActionTypes.RECEIVED_TWEETS:
      _tweets = action.rawTweets;
      TweetStore.emitChange();
      break;
    default:
  }
});

export default TweetStore;
