import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import LongCards from './longCards'


class Posts extends Component{
    render() {
      return (
        <div>
          <LongCards/>
          <div className="row">
            <div className="col-lg-6 col-sm-12 mb-4">
              <div className="card card-small card-post card-post--aside card-post--1">
                <div className="card-post__image" style={{backgroundImage: 'url("images/content-management/5.jpeg")'}}>
                  <Link to='' className="card-post__category badge badge-pill badge-info">Travel</Link>
                  <div className="card-post__author d-flex">
                    <Link to='' className="card-post__author-avatar card-post__author-avatar--small" style={{backgroundImage: 'url("images/avatars/0.jpg")'}}>Written by Anna Ken</Link>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to= '' className="text-fiord-blue">Attention he extremity unwilling on otherwise cars backwards yet</Link>
                  </h5>
                  <p className="card-text d-inline-block mb-3">Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...</p>
                  <span className="text-muted">29 February 2019</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 mb-4">
              <div className="card card-small card-post card-post--aside card-post--1">
                <div className="card-post__image" style={{backgroundImage: 'url("images/content-management/6.jpeg")'}}>
                  <Link to='' className="card-post__category badge badge-pill badge-dark">Business</Link>
                  <div className="card-post__author d-flex">
                    <Link to= '' className="card-post__author-avatar card-post__author-avatar--small" style={{backgroundImage: 'url("images/avatars/1.jpg")'}}>Written by Jamie James</Link>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to = '' className="text-fiord-blue">Totally words widow one downs few age every seven if miss part by fact</Link>
                  </h5>
                  <p className="card-text d-inline-block mb-3">Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...</p>
                  <span className="text-muted">29 February 2019</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card card-small card-post mb-4">
                <div className="card-body">
                  <h5 className="card-title">Had denoting properly jointure which well books beyond</h5>
                  <p className="card-text text-muted"> In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer...</p>
                </div>
                <div className="card-footer border-top d-flex">
                  <div className="card-post__author d-flex">
                    <Link to= '' className="card-post__author-avatar card-post__author-avatar--small" style={{backgroundImage: 'url("images/avatars/1.jpg")'}}>Written by James Khan</Link>
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">James Khan</span>
                      <small className="text-muted">21 March 2011</small>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                    <Link to='' className="btn btn-sm btn-white">
                      <i className="far fa-bookmark mr-1" /> Bookmark </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-small card-post mb-4">
                <div className="card-body">
                  <h5 className="card-title">Husbands ask repeated resolved but laughter debating</h5>
                  <p className="card-text text-muted">It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...</p>
                </div>
                <div className="card-footer border-top d-flex">
                  <div className="card-post__author d-flex">
                    <Link to= '' className="card-post__author-avatar card-post__author-avatar--small" style={{backgroundImage: 'url("images/avatars/2.jpg")'}}>Written by Anna Kunis</Link>
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">Chris Jones</span>
                      <small className="text-muted">21 March 2011</small>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                    <Link to='' className="btn btn-sm btn-white">
                      <i className="far fa-bookmark mr-1" /> Bookmark </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-small card-post mb-4">
                <div className="card-body">
                  <h5 className="card-title">Instantly gentleman contained belonging exquisite now direction</h5>
                  <p className="card-text text-muted">West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...</p>
                </div>
                <div className="card-footer border-top d-flex">
                  <div className="card-post__author d-flex">
                    <Link to='' className="card-post__author-avatar card-post__author-avatar--small" style={{backgroundImage: 'url("images/avatars/3.jpg")'}}>Written by Anna Kunis</Link>
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">Mark Jameson</span>
                      <small className="text-muted">21 March 2011</small>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                    <Link to = '' className="btn btn-sm btn-white">
                      <i className="far fa-bookmark mr-1" /> Bookmark </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card card-small card-post h-100">
                <div className="card-post__image" style={{backgroundImage: 'url("images/content-management/7.jpeg")'}} />
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to = '' className="text-fiord-blue">Extremity so attending objection as engrossed</Link>
                  </h5>
                  <p className="card-text">Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel not seeing...</p>
                </div>
                <div className="card-footer text-muted border-top py-3">
                  <span className="d-inline-block">By
                    <Link to = ''  className="text-fiord-blue">Alene Trenton</Link> in
                    <Link to = ''  className="text-fiord-blue">News</Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card card-small card-post h-100">
                <div className="card-post__image" style={{backgroundImage: 'url("images/content-management/8.jpeg")'}} />
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to = '' className="text-fiord-blue">Bed sincerity yet therefore forfeited his </Link>
                  </h5>
                  <p className="card-text">Pursuit chamber as elderly amongst on. Distant however warrant farther to of. My justice wishing prudent waiting in be...</p>
                </div>
                <div className="card-footer text-muted border-top py-3">
                  <span className="d-inline-block">By
                    <Link to = '' className="text-fiord-blue">Chris Jamie</Link> in
                    <Link to = '' className="text-fiord-blue">News</Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card card-small card-post h-100">
                <div className="card-post__image" style={{backgroundImage: 'url("images/content-management/9.jpeg")'}} />
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to='' className="text-fiord-blue">Object remark lively all did feebly excuse our</Link>
                  </h5>
                  <p className="card-text">Speaking throwing breeding betrayed children my to. Me marianne no he horrible produced ye. Sufficient unpleasing and...</p>
                </div>
                <div className="card-footer text-muted border-top py-3">
                  <span className="d-inline-block">By
                    <Link to='' className="text-fiord-blue">Monica Jordan</Link> in
                    <Link to='' className="text-fiord-blue">News</Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card card-small card-post h-100">
                <div className="card-post__image" style={{backgroundImage: 'url("images/content-management/10.jpeg")'}} />
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to='' className="text-fiord-blue">His followed carriage proposal entrance</Link>
                  </h5>
                  <p className="card-text">For county now sister engage had season better had waited. Occasional mrs interested far expression directly as regard...</p>
                </div>
                <div className="card-footer text-muted border-top py-3">
                  <span className="d-inline-block">By
                    <Link to='' className="text-fiord-blue">Monica Jordan</Link> in
                    <Link to='' className="text-fiord-blue">News</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default Posts