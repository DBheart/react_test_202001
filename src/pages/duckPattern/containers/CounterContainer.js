import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../Counter';
import { increment, decrement } from '../modules/counter';

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };
  render() {
    const { color, number } = this.props;
    return (
      <Counter
        color={color}
        value={number}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    );
  }
}

// state가 아니라 counter라는 비할당구조로 내용을 조금더 줄였다.
const mapStateToProps = ({ counter }) => ({
  color: counter.color,
  number: counter.number,
});

// **** 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
const mapDispatchToProps = { increment, decrement };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);