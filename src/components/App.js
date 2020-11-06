import React from 'react';
import '../App.css';
import Display from './display';
import ButtonCont from './buttonCont';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const { total, next, operation } = this.state;
    const result = calculate({ total, next, operation }, btnName);
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="app">
        <Display result={total} next={next} />
        <ButtonCont clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
