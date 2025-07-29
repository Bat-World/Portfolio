type User = {
  id: number;
  name: string;
  email: string;
};

const UserList = ({ users }: {users: User[]}) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Users:</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-2 rounded">
            <p>{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default UserList;