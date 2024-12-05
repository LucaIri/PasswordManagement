import './ListGroup.css'
import { useNavigate } from 'react-router-dom'

function ListGroup() {
  const navigate = useNavigate();

  return (
    <div className='sidebar'>
      <h1>My Credentials</h1>
      <ul className="list-group">
        <button className="list-group-item" onClick={() => navigate('/logincreds')}>Login</button>
        <button className="list-group-item" onClick={() => navigate('/identity')}>Identity</button>
        <button className="list-group-item" onClick={() => navigate('/creditcard')}>Credit Card</button>
        <button className="list-group-item" onClick={() => navigate('/securenotes')}>Secure Notes</button>
      </ul>
    </div>
  );
}

export default ListGroup;
