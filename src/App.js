import './App.css';
import Card from './Card'
import userData from './userData.json'

function App() {
  return (
    <div className="App">
      {userData.map(
        user => {
          return <Card key={user._id} user={user} />
        }
      )}
    </div>
  );
}

export default App;
