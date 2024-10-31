import './App.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Profile from './Componets/Profile';
function App() {
  return (
      <div class="d-flex justify-content-center">
        <Profile/>
        <Card style={{ width: '18rem',border:'2px'}}>
          <Card.Body>
            <Button variant="primary">Hi Ank</Button>
          </Card.Body>
        </Card>
      </div>
  );
}

export default App;
