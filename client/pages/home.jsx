import React from 'react';
import Carousel from '../components/carousel';
import LoadingModal from '../components/loading-modal';
import AppContext from '../lib/app-context';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealType: '',
      recipes: []
    };
  }

  componentDidMount() {
    const { params } = this.context.route;
    const mealType = () => {
      const date = new Date();
      const userTimeData = date.toLocaleString('en-GB').split(', ');
      const userHour = Number(userTimeData[1].split(':'));
      const mealType = userHour <= 9 ? 'breakfast' : userHour <= 15 ? 'lunch' : 'dinner';
      return mealType;
    };
    const query = mealType();
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${process.env.SPOONACULAR_API_KEY}&number=10&addRecipeNutrition=true`)
      .then(res => res.json())
      .then(result => this.setState({ recipes: result.results, mealType: query }))
      .catch(err => console.error({ error: err }));
    params.set('showMenu', 'false');
    window.location.hash = `home?${params.toString()}`;
  }
  // __componentDidMount() {
  //   const { params } = this.context.route;
  //   fetch(`/api/recipes/home/:mealType`)
  // }

  render() {
    const { recipes } = this.state;
    const { user } = this.context;
    // if (!recipes.recipes) {
    //   return <LoadingModal />;
    // }
    return (
      <>
        <div>
          <h1 className="text-align-center">Food Wizard</h1>
          <p className="text-align-center">{ user ? `Welcome ${user.username}!` : 'Welcome!' }</p>
          <p className="text-align-center">Here are some recommendations<br />from your local time zone!</p>
        </div>
        { !recipes ? <LoadingModal /> : <Carousel recipes={ recipes } /> }
      </>
    );
  }
}

Home.contextType = AppContext;
