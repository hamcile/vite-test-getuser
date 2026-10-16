import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state to track whether an error occurred
    this.state = { hasError: false, error: null };
  }

  // 1. Update state so the next render shows the fallback UI
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // 2. Use this lifecycle method to log the error to a service
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // You can call your error reporting services here (e.g., Sentry, LogRocket)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI here
      return (
        <h2>Something went wrong.</h2>
      );
    }

    // If there is no error, render the children components normally
    return this.props.children;
  }
}

export default ErrorBoundary;
