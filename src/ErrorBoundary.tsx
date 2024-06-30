import React, { Component, ErrorInfo } from 'react';

type State = {
  hasError: boolean;
};

type Props = {
  children: React.ReactNode;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>Что-то пошло не так.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

