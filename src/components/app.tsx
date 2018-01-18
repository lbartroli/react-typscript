import * as React from "react";
import 'typeface-roboto';

export default class App extends React.Component<IProps, IState> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

interface IProps { name: string; }
interface IState {}