import { Component } from "react";
import { Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("에러바운더리로부터 에러를 잡았습니다.", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <Navigate to="/error" replace />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
