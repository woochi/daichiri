// @flow

import React from 'react';
import {makepuzzle, solvepuzzle} from 'sudoku';
import './Hack.css';
import classnames from 'classnames';
import TypeWriter from 'react-typewriter';
import Paragraph from './Paragraph';

function incrementByOne(value) {
  if (value === null || isNaN(value)) {
    return value;
  }

  return value + 1;
}

const original = makepuzzle();
const puzzle = original.map(incrementByOne);
const solution = solvepuzzle(original).map(incrementByOne);

class Cell extends React.PureComponent {
  static defaultProps = {
    value: '',
    solution: null
  }

  render() {
    const {index, onChange, value, solution, ...otherProps} = this.props;
    const solved = value === solution;
    const className = classnames('Cell', {
      'Cell-solved': solved
    });

    return (
      <input
        {...otherProps}
        disabled={solved}
        value={value || ''}
        type="text"
        pattern="\d"
        className={className}
        onFocus={this.onFocus}
        onKeyPress={this.onChange}/>
    );
  }

  onFocus = event => event.target.select()

  onChange = event => {
    event.preventDefault();

    const {key} = event;
    const value = parseInt(key, 10);

    if (isNaN(value) || value === 0) {
      return;
    }

    this.props.onChange(value, this.props.index);
    this.onFocus(event);
  }
}

class Puzzle extends React.PureComponent {
  render() {
    const {value} = this.props;
    const rows = [];

    for (let row = 0; row < 9; row++) {
      const rowCells = [];

      for (let col = 0; col < 9; col++) {
        const cellIndex = row * 9 + col;

        rowCells.push(
          <Cell
            key={cellIndex}
            index={cellIndex}
            value={value[cellIndex]}
            onChange={this.onChangeCell}
            solution={solution[cellIndex]}/>
        );
      }

      rows.push(<div className="Row" key={`row${row}`}>{rowCells}</div>);
    }

    return <div className="Puzzle">{rows}</div>;
  }

  onChangeCell = (value, index) => {
    const newValue = this.props.value.slice(0);

    newValue[index] = value;
    this.props.onChange(newValue);
  }
}

function isComplete(puzzle, solution) {
  for (let i = puzzle.length - 1; i >= 0; i--) {
    if (puzzle[i] !== solution[i]) {
      return false;
    }
  }

  return true;
}

class Hack extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      puzzle: puzzle,
      completed: false
    };
    window.solve = () => this.setState({completed: true});
  }

  render() {
    if (this.state.completed) {
      return (
        <div>
          <Paragraph>
            <TypeWriter typing={1}>
              Access granted. Signing in to private.daichiri.com . . . <br/>
              Scanning databases . . . Connected to secure cache . . .<br/>
              Scanning for authentication credentials . . . Found 1 item(s) . . . <br/><br/>
              <span className="TextGreen">X1082C</span><br/><br/>
              Security protocol bot connection detected. Forcing disconnect NOW!<br/><br/>
              <span className="TextRed">CONNECTION CLOSED</span>
            </TypeWriter>
          </Paragraph>
        </div>
      );
    } else {
      return (
        <Puzzle value={this.state.puzzle} onChange={this.onChangePuzzle}/>
      );
    }
  }

  onChangePuzzle = (newPuzzle) => {
    if (isComplete(newPuzzle, solution)) {
      this.setState({puzzle: newPuzzle, completed: true})
    }

    this.setState({puzzle: newPuzzle});
  }
}

export default Hack;
