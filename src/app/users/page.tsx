import { User } from "@/common/types/User";
import { revalidatePath } from "next/cache";

async function fetchUsers(): Promise<User[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/users", {
   next:{revalidate:60}
     // что это значит
  });
  return res.json();
}

const UsersPage = async () => {
  const users = await fetchUsers();
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
