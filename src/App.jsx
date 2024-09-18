import Todo from "./Component/Todo";
import ErrorBoundary from "./errorBoundary/errorBoundary";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Todo />
      </ErrorBoundary>
    </>
  );
};

export default App;
