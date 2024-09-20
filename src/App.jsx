import Todo from "./Component/Todo";
import ErrorBoundary from "./errorBoundary/errorBoundary";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <h1> Hello Guys !</h1>
        <Todo />
      </ErrorBoundary>
    </>
  );
};

export default App;
