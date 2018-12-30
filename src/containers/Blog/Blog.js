import React,{ Component,Suspense } from 'react';
//import axios from 'axios';
import  { Route , NavLink ,Switch } from 'react-router-dom';


//import Post from '../../components/Post/Post';
import './Blog.css';
// import FullPost from '../../components/Post/FullPost/FullPost';
// import NewPost from '../../components/Post/NewPost/NewPost';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';
//import asyncComponent from '../../hoc/asyncComponent';

// const AsyncNewPost = asyncComponent(()=> {
//     return import('./NewPost/NewPost');
// });

const NewPost=React.lazy(()=> import('./NewPost/NewPost'));

class Blog extends Component {
    state= {
        auth:false,
    }
   
    render(){     
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                    to="/posts/" 
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color:'#fa923f',
                                        textDecoration:'underline'
                                    }}>Home</NavLink></li>
                            <li><NavLink to={{ 
                                pathname:'/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>Home2</h1>}/> */}
                <Switch>
                    {/* {this.state.auth ? <Route path="/new-post" component= {AsyncNewPost}/> : null} */}
                    <Route 
                        path="/new-post"
                        render={()=>(
                            <Suspense fallback = {<div>Loading....</div>}>
                                <NewPost/>
                            </Suspense>
                        )}
                    />
                    <Route path="/posts"  component= {Posts}/>   
                    {/* <Redirect from="/" to="/posts" />  */}
                    {/* <Route render= {()=> <h1>Not Found</h1>}/>*/}
                </Switch>
               
              
                {/* <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost/>
                </section> */}
            </div>
        )
    }
}

export default  Blog;