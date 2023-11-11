import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleCard({image}) {
  return (
    <Card style={{ width: '18rem' }} className="single">
        <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">Read more</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleCard;