  import React, {Component} from 'react'
  import {Link} from 'react-router-dom'
  import Editor from './../Reusables/editor/Quill'

class AddPost extends Component{
  constructor(){
    super();
    this.state = {
      text: ''
      
    }
    this.handleChange = this.handleChange.bind(this)
  }
    handleChange(value){
      this.setState({text : value})
    }
    
    render() {
      return (
        <div className="row">
          <div className="col-lg-9 col-md-12">
            {/* Add New Post Form */}
            <div className="card card-small mb-3">
              <div className="card-body">
                <form className="add-new-post">
                  <input className="form-control form-control-lg mb-3" type="text" placeholder="Your Post Title" />
                  <Editor onChange= {this.handleChange} value = {this.state.text}/>
                </form>
              </div>
            </div>
            {/* / Add New Post Form */}
          </div>
          <div className="col-lg-3 col-md-12">
            {/* Post Overview */}
            <div className="card card-small mb-3">
              <div className="card-header border-bottom">
                <h6 className="m-0">Actions</h6>
              </div>
              <div className="card-body p-0">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item p-3">
                    <span className="d-flex mb-2">
                      <i className="material-icons mr-1">flag</i>
                      <strong className="mr-1">Status:</strong> Draft
                      <Link to = '' className="ml-auto">Edit</Link>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="material-icons mr-1">visibility</i>
                      <strong className="mr-1">Visibility:</strong>
                      <strong className="text-success">Public</strong>
                      <Link to = '' className="ml-auto">Edit</Link>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="material-icons mr-1">calendar_today</i>
                      <strong className="mr-1">Schedule:</strong> Now
                      <Link to = '' className="ml-auto">Edit</Link>
                    </span>
                    <span className="d-flex">
                      <i className="material-icons mr-1">score</i>
                      <strong className="mr-1">Readability:</strong>
                      <strong className="text-warning">Ok</strong>
                    </span>
                  </li>
                  <li className="list-group-item d-flex px-3">
                    <button className="btn btn-sm btn-outline-accent">
                      <i className="material-icons">save</i> Save Draft</button>
                    <button className="btn btn-sm btn-accent ml-auto">
                      <i className="material-icons">file_copy</i> Publish</button>
                  </li>
                </ul>
              </div>
            </div>
            {/* / Post Overview */}
            {/* Post Overview */}
            <div className="card card-small mb-3">
              <div className="card-header border-bottom">
                <h6 className="m-0">Categories</h6>
              </div>
              <div className="card-body p-0">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-3 pb-2">
                    <div className="custom-control custom-checkbox mb-1">
                      <input type="checkbox" className="custom-control-input" id="category1" defaultChecked />
                      <label className="custom-control-label" htmlFor="category1">Uncategorized</label>
                    </div>
                    <div className="custom-control custom-checkbox mb-1">
                      <input type="checkbox" className="custom-control-input" id="category2" defaultChecked />
                      <label className="custom-control-label" htmlFor="category2">Design</label>
                    </div>
                    <div className="custom-control custom-checkbox mb-1">
                      <input type="checkbox" className="custom-control-input" id="category3" />
                      <label className="custom-control-label" htmlFor="category3">Development</label>
                    </div>
                    <div className="custom-control custom-checkbox mb-1">
                      <input type="checkbox" className="custom-control-input" id="category4" />
                      <label className="custom-control-label" htmlFor="category4">Writing</label>
                    </div>
                    <div className="custom-control custom-checkbox mb-1">
                      <input type="checkbox" className="custom-control-input" id="category5" />
                      <label className="custom-control-label" htmlFor="category5">Books</label>
                    </div>
                  </li>
                  <li className="list-group-item d-flex px-3">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="New category" aria-label="Add new category" aria-describedby="basic-addon2" />
                      <div className="input-group-append">
                        <button className="btn btn-white px-2" type="button">
                          <i className="material-icons">add</i>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* / Post Overview */}
          </div>
        </div>
      );
    }
  }

export default AddPost