import React, { Component } from "react";
import FoodBox from "./components/FoodBox";
import foods from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";

class App extends Component {
  state = {
    nameSearch: "",
    showAddFoodForm: false,
    foods //para poder modificar o foods e redesenhar a App. ele está importado mas sem estar no state não é possivel alterar
  };

  handleChangeOnSearchBox = event => {
    this.setState({
      nameSearch: event.target.value
    });
  };

  handleAddFoodSubmit = newAddedFood => {
    this.setState(stateCopy => {
      stateCopy.showAddFoodForm = false;
      stateCopy.foods.push({
        //...newAddedFood significa todas as propriedades de newAddedFood
        ...newAddedFood,
        quantity: 0
      });
      return stateCopy;
    });
  };

  handleClickAddFoodButton = () => {
    this.setState({
      showAddFoodForm: true
    });
  };

  handleAddFoodCancel = () => {
    this.setState({
      showAddFoodForm: false
    });
  };

  render() {
    return (
      <div className="App">
        <button className="button is-info" onClick={this.handleClickAddFoodButton}>
          Add New Food
        </button>
        {this.state.showAddFoodForm && (
          <AddFoodForm onSubmit={this.handleAddFoodSubmit} onCancel={this.handleAddFoodCancel} />
        )}

        {/*O input está controlado pq o value = nameSearch. se o sdtate não mudar o input não muda */}
        <input className="input" type="text" value={this.state.nameSearch} onChange={this.handleChangeOnSearchBox} />

        {/*Abaixo indico uma qlq posição e a indicar o nome da prop - food*/}
        {/* <FoodBox food={foods[15]}/> */}
        {/*No map entra "oneFood" e sai "FoodBox" */}
        {this.state.foods
          .filter(oneFood => oneFood.name.toUpperCase().startsWith(this.state.nameSearch.toUpperCase()))
          .map(oneFood => (
            <FoodBox food={oneFood} />
          ))}
      </div>
    );
  }
}

export default App;
