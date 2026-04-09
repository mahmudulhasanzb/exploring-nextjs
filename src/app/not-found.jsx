import Link from "next/link";

export const metadata = {
  title: "Not Found Page",
  description: "Not Found Page",
}
const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h2 className="text-2xl font-bold text-primary">404 Not Found</h2>
      <p className="text-xl font-bold text-gray-500">The page you are looking for does not exist</p>
      <p className="text-xl font-bold text-gray-500">Please check the URL or try searching for something else</p>
      <Link href="/" className="btn btn-primary mt-2">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;