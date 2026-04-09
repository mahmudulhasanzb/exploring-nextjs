import Link from "next/link";
import { Poppins, Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata = {
  title: 'Blogs Page',
  description: 'Blogs Page',
}

const BlogsPage = () => {

const blogs = [
  {
    id: 1,
    title: "Introduction to React",
    author: "Mahmudul Hasan",
    date: "2026-04-09",
    category: "Frontend",
    image: "https://i.ibb.co/8d8KQ8S/react.png",
    description: "React is a popular JavaScript library used for building user interfaces, especially single-page applications. It allows developers to create reusable UI components.",
    tags: ["React", "JavaScript", "Frontend"]
  },
  {
    id: 2,
    title: "Getting Started with Tailwind CSS",
    author: "Mahmudul Hasan",
    date: "2026-04-05",
    category: "CSS",
    image: "https://i.ibb.co/9pG2KQn/tailwind.png",
    description: "Tailwind CSS is a utility-first CSS framework that helps developers build modern and responsive designs quickly without writing custom CSS.",
    tags: ["Tailwind", "CSS", "UI"]
  },
  {
    id: 3,
    title: "What is TypeScript?",
    author: "Mahmudul Hasan",
    date: "2026-04-02",
    category: "Programming",
    image: "https://i.ibb.co/2S8XkqV/typescript.png",
    description: "TypeScript is a superset of JavaScript that adds static typing. It helps developers catch errors early and build large-scale applications more efficiently.",
    tags: ["TypeScript", "JavaScript", "Programming"]
  },
  {
    id: 4,
    title: "How to Build a Modern UI with DaisyUI",
    author: "Mahmudul Hasan",
    date: "2026-03-30",
    category: "UI Design",
    image: "https://i.ibb.co/0jqHpnp/daisyui.png",
    description: "DaisyUI is a component library built on top of Tailwind CSS that provides ready-to-use UI components like buttons, cards, modals, and more.",
    tags: ["DaisyUI", "Tailwind", "UI"]
  }
];


  return (
    <div className={roboto.className + " container mx-auto mt-5"}>
      <h2 className="text-3xl font-bold mb-4 text-center">Blogs</h2>
      {blogs.map(blog => {
        return (
          <div className="border border-gray-200 p-4 rounded-lg max-w-2xl mx-auto mb-4" key={blog.id}>
            <h1 className="text-2xl font-bold">{blog.title}</h1>
            <h1 className="text-xl font-bold">{blog.author}</h1>
            <p className="text-sm text-gray-500">{blog.date} </p>
            <p className="text-sm text-gray-500">{blog.category} </p>
            <img src={blog.image} alt="demoImg" width={100} height={100} />
            <p className={poppins.className + " text-sm text-gray-500"}>{blog.description} </p>
            <p className="text-sm text-gray-500">{blog.tags.join(", ")} </p>
            <div>
              <Link href={`/blogs/${blog.id}`} className="btn btn-primary mt-2">Details</Link>
            </div>
            
          </div>
        )
      })}
    </div>
  );
};

export default BlogsPage;