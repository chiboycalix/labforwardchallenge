import './App.css';
import Home from './modules/app/components/home.component';
import RealTimeDataProvider from './store/RealTimeDataProvider';
import ErrorBoundary from './hoc/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <RealTimeDataProvider>
        <Home />
      </RealTimeDataProvider>
    </ErrorBoundary>
  );
}

export default App;
