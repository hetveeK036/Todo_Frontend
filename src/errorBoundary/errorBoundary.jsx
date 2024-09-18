import { Component } from 'react';
import PropTypes from 'prop-types'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error)
    // Update state so the next render will show the fallback UI
    return { hasError: true };

  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught in Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when there's an error
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
// Define prop types
ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired, // Children prop is required
  };

export default ErrorBoundary;
