import React from 'react';
import Carousel from '../components/carousel';
import LoadingModal from '../components/loading-modal';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API_KEY}&number=10`)
      .then(res => res.json())
      .then(recipes => this.setState({ recipes }))
      .catch(err => console.error({ error: err }));
  }

  render() {
    const { recipes } = this.state;

    if (!recipes.recipes) {
      return <LoadingModal />;
    }

    return (
      <Carousel recipes={ recipes.recipes } />
    );
  }
}
