import './App.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
function App() {
  return (
      <div class="d-flex justify-content-center">
        <Card style={{ width: '18rem',border:'2px'}}>
          <Card.Body>
            <Button variant="primary">Blinks GM</Button>
          </Card.Body>
        </Card>
      </div>
  );
}

export default App;
