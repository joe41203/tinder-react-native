// 参考
// https://qiita.com/Yorinton/items/b029df0713a471d4569a
import React, {Component} from 'react';
import { GiftedChat　} from 'react-native-gifted-chat';

export default class Chat extends Component {

  //メッセージ内容をstateで管理
  state = {
    messages:[],
  };
  //「Send」ボタンが押された時に実行されるメソッド
  onSend = (messages = []) => {
    this.setState((previousState) => ({
      //stateで管理しているmessagesに送信されたメッセージを追加
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      //react-native-gifted-chatが提供するコンポーネント
      <GiftedChat
        messages={this.state.messages}//stateで管理しているメッセージ
        onSend={(messages) => this.onSend(messages)}//送信ボタン押した時の動作
        user={{
        _id: 1,
        }}
      />
    )
  }
}