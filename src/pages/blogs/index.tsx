import {useState, useEffect} from 'react';
import BlogsCard from './components/BlogsCard';

const BlogsPage =() => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        async function fetchData() {
          const res = await fetch("https://jsonplaceholder.typicode.com/posts")
          const data = await res.json();
          setBlogs(data)
          console.log(data);
        }
        fetchData();
        
      }, []);

      

    return (
        <div>
            
            <div className='grid grid-cols-3 gap-4'>
                {
                  blogs.map(blog => <BlogsCard key={blog.id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default BlogsPage;