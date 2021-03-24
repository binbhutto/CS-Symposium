import React from 'react';
import Navbar from '../components/Navbar';
import BlogDetailsCard from '../components/BlogDetailsCard';
import {requests} from '../components/requests';

function BlogPage() {

  const[event,setEvent] = React.useState({});

  React.useEffect(() => {
    let event_num = JSON.parse(localStorage.getItem('blog_number'));
    function GetBlogDetails(e){
      const xhr = new XMLHttpRequest();
      xhr.open('GET',`${requests.fetchBlog}${e}`,true);
      xhr.responseType = 'json';
      xhr.addEventListener('load',() => {
        if(xhr.response.status === 200){
          setEvent(xhr.response.result);
        }
      });
      xhr.send();
    }
    GetBlogDetails(event_num);
  },[])

  return (
    <React.Fragment>
      <div className="blog-wrapper">
          <Navbar />
          <BlogDetailsCard event={event} />
      </div>
    </React.Fragment>
  );
}

export default BlogPage;
