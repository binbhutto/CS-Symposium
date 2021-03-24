import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import '../styles/AddBlog.css';
import axios from 'axios';
import {requests} from '../components/requests';

let marked = require("marked");

function AddBlog(){
    const[markdown,setMarkdown] = useState("");
    const[title,setTitle] = useState("");
    const[show,setShow] = useState("none");
    const[borderBottom,setBorderBottom] = useState("edit");

    function updateMarkdown(markText){
        setMarkdown(markText);
    }
    function setStyle(el,st){
        setShow(el);
        setBorderBottom(st);
    }

    function onSubmitHandler(e){
        e.preventDefault();
        let arr = title.split(" ");
        let event_number = arr[0];
        arr.shift();
        let blog_title = arr.reduce((res,curr) => res + " " + curr).trim();

        let values = {
            "event_number" : event_number,
            "blog_title" : `# ${blog_title}`, 
            "blog_content" : markdown
        }

        axios.post(`${requests.newBlog}`,values)
        .then(response => {
            if(response.data.status == 200){
                localStorage.removeItem('blog_title');
                localStorage.removeItem('blog_content');
                window.location.replace("/new/blog/add");
                window.alert('Blog Published');
            }
        })
        .catch(error => console.log(error))
    }
    const SaveDraft = () => {
        localStorage.setItem('blog_title',JSON.stringify(title));
        localStorage.setItem('blog_content',JSON.stringify(markdown));
        window.alert('Draft Saved');
    }

    React.useEffect(() => {
        function GetSavedBlog(){
            let blog_title = JSON.parse(localStorage.getItem('blog_title'));
            let blog_content = JSON.parse(localStorage.getItem('blog_content'));
            if (blog_content) setMarkdown(blog_content);
            if (blog_title) setTitle(blog_title);
        }
        GetSavedBlog();
    },[])

    return(
        <React.Fragment>
        <section className="relative w-full mx-auto post-wrapper">
            <div className="container px-5 py-24 mx-auto post-inner-wrapper">
                <div className="flex flex-row items-center w-3/4 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="mb-4 post-page-header mx-auto">Write a post</h1>
                    </div>
                    <div className="flex flex-row justify-end w-full mb-12">
                        <button className="text-white
                        border-0 py-2 px-8 mr-4 focus:outline-none
                        rounded post-edit-btn" onClick={() => setStyle("none","edit")}
                        style={{borderBottomWidth: "3px", 
                        borderBottomColor : `${borderBottom}` === "edit" ? "#cc241d" : "transparent"}}
                        >
                        Edit
                        </button>
                        <button className="text-white
                        border-0 py-2 px-8 focus:outline-none
                        rounded post-preview-btn" onClick={() => setStyle("display","preview")}
                        style={{borderBottomWidth: "3px",borderBottomColor : `${borderBottom}` === "preview" ? "#cc241d" : "transparent"}}
                        >
                        Preview
                        </button>
                    </div> 
                </div>
                <div className="form-wrapper">
                    <form className="flex flex-wrap -m-2 md:w-3/4 mx-auto post-form"
                    onSubmit={onSubmitHandler}
                    >
                        <div className="post-form-fields-wrapper w-full mx-auto">
                            <div className="p-2 w-full">
                                <div className="relative" style={{display : `${show}` === "none" ? "block" : "none"}}>
                                    <textarea name="title" 
                                    className="w-full rounded border py-10 px-5 post-title"
                                    placeholder="<Event Number> <Blog Title>"
                                    onChange={e => setTitle(e.target.value)}
                                    value={title}
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative" style={{display : `${show}` === "none" ? "block" : "none"}}>
                                    <textarea name="description" 
                                    className="w-full rounded border py-10 px-5 post-description"
                                    placeholder="Write your blog content here ..."
                                    onChange={e => updateMarkdown(e.target.value)}
                                    value={markdown}
                                    ></textarea>
                                </div>
                                <div className="relative" style={{display : `${show}` === "none" ? "none" : "block"}}>
                                    <div className="w-full rounded border py-10 px-5 post-markdown-title"
                                    dangerouslySetInnerHTML={{__html : marked(title)}}
                                    ></div>
                                    <div className="w-full rounded border py-10 px-5 post-markdown"
                                    dangerouslySetInnerHTML={{__html : marked(markdown)}}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 w-full flex flex-row justify-start">
                            <button type="submit" className="border-0 py-2 px-8 focus:outline-none
                            rounded post-btn mr-4">
                                Publish
                            </button>
                            <button className="border-0 py-2 px-8 focus:outline-none
                            rounded post-btn" onClick={SaveDraft}>
                                Save Draft
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </React.Fragment>
    );
}

export default AddBlog;