import React, {Component} from 'react'
import {FormInput} from '../Reusables/inputs/FormInput'
import Button from '../Reusables/buttons/Button'
import { CheckBox } from '../Reusables';

class Forms extends Component{

  constructor(props){
    super(props);
    this.state = {
      adaobi: true
    }
  }
    render() {
      return (
        <div>
          <div className="row mb-2">
            <div className="col-12">
              <span style={{fontSize: '16px'}} className="d-block mb-2 text-muted">
                <strong>Colors</strong>
              </span>
            </div>
            <div className="col mb-4">
              <div className="bg-primary rounded text-white text-center p-3" style={{boxShadow: 'inset 0 0 5px rgba(0,0,0,.2)'}}>Primary</div>
            </div>
            <div className="col mb-4">
              <div className="bg-secondary rounded text-white text-center p-3" style={{boxShadow: 'inset 0 0 5px rgba(0,0,0,.2)'}}>Secondary</div>
            </div>
            <div className="col mb-4">
              <div className="bg-success rounded text-white text-center p-3" style={{boxShadow: 'inset 0 0 5px rgba(0,0,0,.2)'}}>Success</div>
            </div>
            <div className="col mb-4">
              <div className="bg-info rounded text-white text-center p-3" style={{boxShadow: 'inset 0 0 5px rgba(0,0,0,.2)'}}>Info</div>
            </div>
            <div className="col mb-4">
              <div className="bg-warning rounded text-white text-center p-3" style={{boxShadow: 'inset 0 0 5px rgba(0,0,0,.2)'}}>Warning</div>
            </div>
            <div className="col mb-4">
              <div className="bg-danger rounded text-white text-center p-3" style={{boxShadow: 'inset 0 0 5px rgba(0,0,0,.2)'}}>Danger</div>
            </div>
            <div className="col mb-4">
              <div className="bg-dark rounded text-white text-center p-3" style={{boxShadow: 'inset 0 0 5px rgba(0,0,0,.2)'}}>Dark</div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mb-4">
              <div className="card card-small mb-4">
                <div className="card-header border-bottom">
                  <h6 className="m-0">Form Inputs</h6>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item p-0 px-3 pt-3">
                    <div className="row">
                      <div className="col-sm-12 col-md-4 mb-3">
                        {/* Checkboxes */}
                        <strong className="text-muted d-block mb-2">Checkboxes</strong>
                        <fieldset>
                          <CheckBox type={'checkbox'} checked={!this.state.adaobi} label={'Default'} onClick={() => this.setState({adaobi: !this.state.adaobi})}/>
                          <CheckBox type={'checkbox'} checked={this.state.adaobi} label={'Adaobi'} onClick={() => this.setState({adaobi: !this.state.adaobi})}/>
                          <CheckBox type={'checkbox'} disabled = {true} label={'Disabled'}/>
                          <CheckBox type={'checkbox'} checked= {this.state.adaobi} disabled = {true} label={'Disabled'} defaultChecked/>
                        </fieldset>
                        {/* / Checkboxes */}
                      </div>
                      <div className="col-sm-12 col-md-4 mb-3">
                        {/* Radios */}
                        <strong className="text-muted d-block mb-2">Radio Buttons</strong>
                        <fieldset>
                          <CheckBox type={'radio'} checked={!this.state.adaobi} label={'Default'} onClick={() => this.setState({adaobi: !this.state.adaobi})}/>
                          <CheckBox type={'radio'} checked={this.state.adaobi} label={'Adaobi'} onClick={() => this.setState({adaobi: !this.state.adaobi})}/>
                          <CheckBox type={'radio'} disabled = {true} label={'Disabled'}/>
                          <CheckBox type={'radio'} checked= {this.state.adaobi} disabled = {true} label={'Disabled Checked'} defaultChecked/>
                        </fieldset>
                        {/* / Radios */}
                      </div>
                      <div className="col-sm-12 col-md-4 mb-3">
                        {/* Toggles */}
                        <fieldset>
                          <strong className="text-muted d-block mb-2">Toggle Switches</strong>
                          <div className="custom-control custom-toggle custom-toggle-sm mb-1">
                            <input type="checkbox" id="customToggle1" name="customToggle1" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="customToggle1">Default</label>
                          </div>
                          <div className="custom-control custom-toggle custom-toggle-sm mb-1">
                            <input type="checkbox" id="customToggle2" name="customToggle2" className="custom-control-input" defaultChecked="checked" />
                            <label className="custom-control-label" htmlFor="customToggle2">Checked</label>
                          </div>
                          <div className="custom-control custom-toggle custom-toggle-sm mb-1">
                            <input type="checkbox" id="customToggle3" name="customToggle3" className="custom-control-input" disabled="disabled" />
                            <label className="custom-control-label" htmlFor="customToggle3">Disabled</label>
                          </div>
                          <div className="custom-control custom-toggle custom-toggle-sm mb-1">
                            <input type="checkbox" id="customToggle4" name="customToggle4" className="custom-control-input" defaultChecked="checked" disabled="disabled" />
                            <label className="custom-control-label" htmlFor="customToggle4">Disabled Checked</label>
                          </div>
                        </fieldset>
                        {/* / Toggles */}
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item p-3">
                    {/* Small Buttons */}
                    <strong className="text-muted d-block my-2">Small Buttons</strong>
                    <div className="row mb-3">
                      <div className="col">
                        <Button theme="btn-primary btn-sm" > <span>Primary</span> </Button>
                        <Button theme="btn-secondary btn-sm" > <span>Secondary</span> </Button>
                        <Button theme="btn-success btn-sm"  > <span>Success</span> </Button>
                        <Button theme="btn-danger btn-sm" > <span>Danger</span> </Button>
                        <Button theme="btn-warning btn-sm" > <span>Warning</span> </Button>
                        <Button theme="btn-info btn-sm" > <span>Info</span> </Button>
                        <Button theme="btn-dark btn-sm" > <span>Dark</span> </Button>
                        <Button theme="btn-white btn-sm" > <span>White</span> </Button>
                      </div>
                    </div>
                    {/* / Small Buttons */}
                    {/* Small Outline Buttons */}
                    <strong className="text-muted d-block mb-2">Small Outline Buttons</strong>
                    <div className="row">
                      <div className="col">
                        <Button theme="btn-outline-primary btn-sm" > <span>Primary</span> </Button>
                        <Button theme="btn-outline-secondary btn-sm" > <span>Secondary</span> </Button>
                        <Button theme="btn-outline-success btn-sm"  > <span>Success</span> </Button>
                        <Button theme="btn-outline-danger btn-sm" > <span>Danger</span> </Button>
                        <Button theme="btn-outline-warning btn-sm" > <span>Warning</span> </Button>
                        <Button theme="btn-outline-info btn-sm" > <span>Info</span> </Button>
                        <Button theme="btn-outline-dark btn-sm" > <span>Dark</span> </Button>
                        <Button theme="btn-outline-light btn-sm" > <span>Light</span> </Button>
                      </div>
                    </div>
                    {/* / Small Outline Buttons */}
                  </li>
                  <li className="list-group-item p-3">
                    {/* Normal Buttons */}
                    <strong className="text-muted d-block my-2">Normal Buttons</strong>
                    <div className="row mb-3">
                      <div className="col">
                        <button type="button" className="mb-2 btn btn-primary mr-2">Primary</button>
                        <button type="button" className="mb-2 btn btn-secondary mr-2">Secondary</button>
                        <button type="button" className="mb-2 btn btn-success mr-2">Success</button>
                        <button type="button" className="mb-2 btn btn-danger mr-2">Danger</button>
                        <button type="button" className="mb-2 btn btn-warning mr-2">Warning</button>
                        <button type="button" className="mb-2 btn btn-info mr-2">Info</button>
                        <button type="button" className="mb-2 btn btn-dark mr-2">Dark</button>
                        <button type="button" className="mb-2 btn btn-white mr-2">White</button>
                      </div>
                    </div>
                    {/* / Normal Buttons */}
                    {/* Normal Outline Buttons */}
                    <strong className="text-muted d-block mb-2">Normal Outline Buttons</strong>
                    <div className="row">
                      <div className="col">
                        <button type="button" className="mb-2 btn btn-outline-primary mr-2">Primary</button>
                        <button type="button" className="mb-2 btn btn-outline-secondary mr-2">Secondary</button>
                        <button type="button" className="mb-2 btn btn-outline-success mr-2">Success</button>
                        <button type="button" className="mb-2 btn btn-outline-danger mr-2">Danger</button>
                        <button type="button" className="mb-2 btn btn-outline-warning mr-2">Warning</button>
                        <button type="button" className="mb-2 btn btn-outline-info mr-2">Info</button>
                        <button type="button" className="mb-2 btn btn-outline-dark mr-2">Dark</button>
                        <button type="button" className="mb-2 btn btn-outline-light mr-2">Light</button>
                      </div>
                    </div>
                    {/* / Normal Outline Buttons */}
                  </li>
                  <li className="list-group-item p-3">
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <strong className="text-muted d-block mb-2">Forms</strong>
                        <form>
                          <div className="form-group">
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                              </div>
                              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" /> </div>
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" defaultValue="myCoolPassword" /> </div>
                          <div className="form-group">
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" defaultValue="7898 Kensington Junction, New York, USA" /> </div>
                          <div className="form-row">
                            <div className="form-group col-md-7">
                              <input type="text" className="form-control" id="inputCity" defaultValue="New York" /> </div>
                            <div className="form-group col-md-5">
                              <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                              </select>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <strong className="text-muted d-block mb-2">Form Validation</strong>
                        <form>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <FormInput 
                                type = 'text' 
                                id="validationServer01" 
                                placeholder="First name" 
                                defaultValue="Catalin" 
                                required 
                                error = 'The first name looks good!'
                                className = 'valid-feedback'
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <FormInput 
                                type = 'text' 
                                placeholder="Last name" 
                                defaultValue="Valise" 
                                required 
                                error = 'The last name looks good!'
                                className = 'valid-feedback'
                              />                            
                            </div>
                          </div>
                          <div className="form-group">
                            <FormInput 
                              type = 'text' 
                              id="validationServer03" 
                              placeholder= "Username"
                              defaultValue="catalin.vasile"
                              required 
                              error = "This username is taken."
                              className = 'invalid-feedback'
                            />           
                          </div>
                          <div className="form-group">
                            <select className="form-control is-invalid">
                              <option selected>Choose...</option>
                              <option>...</option>
                            </select>
                            <div className="invalid-feedback">Please select your state.</div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              {/* Sliders & Progress Bars */}
              <div className="card card-small mb-4">
                <div className="card-header border-bottom">
                  <h6 className="m-0">Sliders &amp; Progress Bars</h6>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-3">
                    {/* Progress Bars */}
                    <div className="mb-2">
                      <strong className="text-muted d-block mb-3">Progress Bars</strong>
                      <div className="progress progress-sm mb-3">
                        <div id="progress-bar-example-1" className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-sm mb-3">
                        <div id="progress-bar-example-2" className="progress-bar bg-info" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-sm mb-3">
                        <div id="progress-bar-example-3" className="progress-bar bg-danger" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-sm">
                        <div id="progress-bar-example-4" className="progress-bar bg-warning" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    {/* / Progress Bars */}
                  </li>
                  <li className="list-group-item px-3">
                    {/* Sliders */}
                    <div className="mb-2">
                      <strong className="text-muted d-block">Custom Sliders</strong>
                      <div id="slider-example-1" className="slider-success my-4">
                        <input type="hidden" className="custom-slider-input" />
                        <input type="hidden" className="custom-slider-input" /> </div>
                      <div id="slider-example-2" className="slider-info my-4">
                        <input type="hidden" className="custom-slider-input" />
                        <input type="hidden" className="custom-slider-input" /> </div>
                      <div id="slider-example-3" className="mt-4">
                        <input type="hidden" className="custom-slider-input" />
                        <input type="hidden" className="custom-slider-input" /> </div>
                    </div>
                    {/* / Sliders */}
                  </li>
                </ul>
              </div>
              {/* / Sliders & Progress Bars */}
              {/* Input & Button Groups */}
              <div className="card card-small mb-4">
                <div className="card-header border-bottom">
                  <h6 className="m-0">Groups</h6>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-3">
                    <form>
                      {/* Button Groups */}
                      <strong className="text-muted d-block mb-2">Button Groups</strong>
                      <div className="btn-group btn-group-toggle mb-3" data-toggle="buttons">
                        <label className="btn btn-white active">
                          <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Fizz </label>
                        <label className="btn btn-white">
                          <input type="radio" name="options" id="option2" autoComplete="off" /> Buzz </label>
                        <label className="btn btn-white">
                          <input type="radio" name="options" id="option3" autoComplete="off" /> Foo </label>
                        <label className="btn btn-white">
                          <input type="radio" name="options" id="option4" autoComplete="off" /> Bar </label>
                      </div>
                      {/* / Button Groups */}
                      {/* Input Groups */}
                      <strong className="text-muted d-block mb-2">Input Groups</strong>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">@</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" /> </div>
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder aria-describedby="basic-addon2" defaultValue="contact" />
                        <div className="input-group-append">
                          <span className="input-group-text">@designrevision.com</span>
                        </div>
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">$</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" defaultValue={1000} />
                        <div className="input-group-append">
                          <span className="input-group-text">.00</span>
                        </div>
                      </div>
                      {/* Input Groups */}
                      {/* Seamless Input Groups */}
                      <strong className="text-muted d-block mb-2">Seamless Input Groups</strong>
                      <div className="input-group mb-3">
                        <div className="input-group input-group-seamless">
                          <span className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">person</i>
                            </span>
                          </span>
                          <input type="text" className="form-control" id="form1-username" placeholder="Username" defaultValue="design.revision" /> </div>
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group input-group-seamless">
                          <input type="password" className="form-control" id="form2-password" placeholder="Password" defaultValue="mySuperSecretPa$$word" />
                          <span className="input-group-append">
                            <span className="input-group-text">
                              <i className="material-icons">lock</i>
                            </span>
                          </span>
                        </div>
                      </div>
                      {/* / Seamless Input Groups */}
                      {/* Input/Button Group */}
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                          <button className="btn btn-white" type="button">Button</button>
                        </div>
                      </div>
                      {/* / Input/Button Group */}
                      {/* Input/Button Group */}
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <button className="btn btn-white" type="button">Button</button>
                        </div>
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" /> </div>
                      {/* / Input/Button Group */}
                    </form>
                  </li>
                </ul>
              </div>
              {/* / Input & Button Groups */}
            </div>
          </div>
        </div>
      );
    }
  }

  export default Forms