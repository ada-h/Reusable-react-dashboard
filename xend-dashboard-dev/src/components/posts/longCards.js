import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class LongCards extends Component{
    render(){
        const{posts} = this.props
        const MapPosts = posts.map(post =>{
            return(
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="card card-small card-post card-post--1">
                  <div className="card-post__image" style={{backgroundImage: 'url("images/content-management/1.jpeg")'}}>
                    <Link to= '' className="card-post__category badge badge-pill badge-dark">{post.badge}</Link>
                    <div className="card-post__author d-flex">
                      <Link to='' className="card-post__author-avatar card-post__author-avatar--small" style={{backgroundImage: 'url("images/avatars/0.jpg")'}}>{post.author}</Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to='' className="text-fiord-blue">{post.heading}</Link>
                    </h5>
                    <p className="card-text d-inline-block mb-3">{post.paragraph}</p>
                    <span className="text-muted">{post.date}</span>
                  </div>
                </div>
              </div>                
            )  
        })
        return(
            <div className="row">
                {MapPosts}
          </div>
        )
    }
}

const MapStateToProps = (state) =>{
   return {
      posts:  state.LongCardData.longCard
   }
}

export default connect(MapStateToProps)( LongCards)