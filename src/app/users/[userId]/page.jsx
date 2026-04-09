export const metadata = {
  title: "User Details Page",
  description: "User Details Page",
}
const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold"> this is user details page</h1>
      <div className="card bg-base-100 shadow-sm p-10">
        <div className="card-body">
          <h2 className="card-title">{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>Address: {user.address.city}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;