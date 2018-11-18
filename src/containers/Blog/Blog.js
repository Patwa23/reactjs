import React,{Component} from 'react';
//import axios from 'axios';
import axios from '../../axios-orders';

import Post from '../../components/Post/Post';
import classes from './Blog.module.css';
import FullPost from '../../components/Post/FullPost/FullPost';
import NewPost from '../../components/Post/NewPost/NewPost';

class Blog extends Component {

    state ={
        posts:[],
        selectedPostId:null,
        error: false
    }
    componentDidMount(){    
        axios.get('/posts')
             .then(response=>{
                 const posts= response.data.slice(0,4); //first 4 data
                 const updatedPosts = posts.map(post =>{
                     return {
                         ...post,
                         author:'Patwa'
                     }
                 })
                 this.setState({posts:updatedPosts});
                // this.setState({posts:response.data})
                 //console.log(response);
             })
             .catch((error)=>{
                // console.log(error);
                this.setState({error:true});
             });
    }

    postSelectedHandler = (id) =>{
        this.setState({selectedPostId:id});
    }


    render(){
        let posts =<p style={{textAlign: 'center'}}>Something went wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post =>{
                return <Post 
                            key={post.id} 
                            title={post.title} 
                            author={post.author}
                            clicked={()=> this.postSelectedHandler(post.id)}/>
            });
        }
        
        return (
            <div>
                <section className={classes.Post}>
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        )
    }
}

export default  Blog;