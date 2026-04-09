const blogs = [
  {
    id: 1,
    title: 'Introduction to React',
    author: 'Mahmudul Hasan',
    date: '2026-04-09',
    category: 'Frontend',
    image: 'https://i.ibb.co/8d8KQ8S/react.png',
    description:
      'React is a popular JavaScript library used for building user interfaces, especially single-page applications. It allows developers to create reusable UI components.',
    tags: ['React', 'JavaScript', 'Frontend'],
  },
  {
    id: 2,
    title: 'Getting Started with Tailwind CSS',
    author: 'Mahmudul Hasan',
    date: '2026-04-05',
    category: 'CSS',
    image: 'https://i.ibb.co/9pG2KQn/tailwind.png',
    description:
      'Tailwind CSS is a utility-first CSS framework that helps developers build modern and responsive designs quickly without writing custom CSS.',
    tags: ['Tailwind', 'CSS', 'UI'],
  },
  {
    id: 3,
    title: 'What is TypeScript?',
    author: 'Mahmudul Hasan',
    date: '2026-04-02',
    category: 'Programming',
    image: 'https://i.ibb.co/2S8XkqV/typescript.png',
    description:
      'TypeScript is a superset of JavaScript that adds static typing. It helps developers catch errors early and build large-scale applications more efficiently.',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
  },
  {
    id: 4,
    title: 'How to Build a Modern UI with DaisyUI',
    author: 'Mahmudul Hasan',
    date: '2026-03-30',
    category: 'UI Design',
    image: 'https://i.ibb.co/0jqHpnp/daisyui.png',
    description:
      'DaisyUI is a component library built on top of Tailwind CSS that provides ready-to-use UI components like buttons, cards, modals, and more.',
    tags: ['DaisyUI', 'Tailwind', 'UI'],
  },
];

const BlogDetailsPage = async ({ params }) => {
  const { blogId } = await params;
    // console.log('Show me params:', blogId);
    const blog = blogs.find(blog => blog.id == blogId)
    console.log(blog)
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold mb-4 text-center mt-5">
        Blog Details comming sooon......
      </h1>
      {blog && (
        <div className=" w-3xl mx-auto border border-gray-200 p-4 rounded-lg">
          <h2 className="text-2xl font-bold">{blog.title}</h2>
          <p className="text-sm text-gray-500">
            {blog.description}{' '}
            <span className="text-primary opacity-50 cursor-pointer hover:opacity-100">
              more..
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogDetailsPage;
