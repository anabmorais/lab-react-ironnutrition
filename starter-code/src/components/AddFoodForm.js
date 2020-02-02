import React, { Component } from "react";

class AddFoodForm extends Component {
  state = {
    name: "",
    calories: 0,
    image: ""
  };

  handleChangeName = event => {
    this.setState({
      name: event.target.value
    });
  };
 
  handleChangeCalories = event => {
    this.setState({
      calories: event.target.value
    });
  };

  handleChangeImage = event => {
    this.setState({
      image: event.target.value
    });
  };

  handleSubmit = () => {
    //new Food é uma cópia do state só para tornar o código mais legivel (e seguro :/)
    const newFood = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
    };
    //qdo carregas no submit, crias a newFood - cópia do state - e envias como argumento para a função onSubmit, função essa que existe no parent
    this.props.onSubmit(newFood);
    this.setState({
      name: "",
      calories: 0,
      image: ""
    });
  };

  handleCancel = () => {
    this.props.onCancel();
    this.setState({
      name: "",
      calories: 0,
      image: ""
    });
  };

  render() {
    return (
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add New Food</p>
            <button className="delete" aria-label="close" onClick={this.handleCancel}></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" value={this.state.name} onChange={this.handleChangeName} />
              </div>
            </div>
            <div className="field">
              <label className="label">Calories</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.calories}
                  onChange={this.handleChangeCalories}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input className="input" type="text" value={this.state.image} onChange={this.handleChangeImage} />
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button onClick={this.handleSubmit} className="button is-success">
              Submit
            </button>
            <button onClick={this.handleCancel} className="button">
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default AddFoodForm;
