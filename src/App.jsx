import './App.css'

function App() {

  const userData = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
    { id: 3, name: 'Peter Pan', email: 'peter.pan@example.com' },
    { id: 4, name: 'Alice Wonderland', email: 'alice@example.com' },
    { id: 5, name: 'Bob Builder', email: 'bob@example.com' },
    { id: 6, name: 'Dora Explorer', email: 'dora@example.com' },
    { id: 7, name: 'Sponge Bob', email: 'sponge@example.com' },
    { id: 8, name: 'Patrick Star', email: 'patrick@example.com' },
    { id: 9, name: 'Sandy Cheeks', email: 'sandy@example.com' },
    { id: 10, name: 'Squidward Tentacles', email: 'squidward@example.com' },
  ];

  return (
    <div className="responsive-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
