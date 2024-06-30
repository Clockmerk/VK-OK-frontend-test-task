import ErrorBoundary from './ErrorBoundary';
import './assets/style/App.styl';
import { Button } from './components/ui/Button/button';
import { Counter } from './components/ui/Counter/counter';

function App() {
  return (
    <ErrorBoundary>
      <main>
        <div className='box-counters'>
          <Counter size='16' quantity='1' pulse />
          <Counter style='secondary' size='24' quantity='333' />
          <Counter size='8' quantity='333' />
          <Counter style='secondary' size='20' quantity='2' pulse />
          <Counter style='secondary' size='16' quantity='33' pulse />
        </div>
        <div className='box-buttons'>
          <Button label='Что сделать'>
            <Counter size='16' quantity='1' />
          </Button>
          <Button label='Что сделать' counter>
            <Counter size='16' quantity='1' />
          </Button>
          <Button state='disabled' label='Отключена' counter>
            <Counter style='secondary' size='20' quantity='2' pulse />
          </Button>
          <Button style='secondary' label='Серая и нажата' state='pressed' counter></Button>
          <Button style='secondary' label='Серая и нажата' state='loading' counter></Button>
        </div>
      </main>
    </ErrorBoundary>
  );
}

export default App;
