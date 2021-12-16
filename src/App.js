import './App.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
function App() {
  return (
      <div style={{border:'2rem'}}>
        <Card style={{ width: '18rem',border:'2px'}}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
  );
}

export default App;
