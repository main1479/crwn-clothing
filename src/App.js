import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import HomePage from './pages/home/homePage';
import ShopPage from './pages/shop/shop';
import Navbar from './components/navbar/navbar';
import AuthPage from './pages/auth/authPage';
import Collections from './pages/collections/collections';

class App extends React.Component {
	state = {
		currentUser: null,
	};

	componentDidMount() {
		auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
			console.log(user);
		});
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/authentication" exact component={AuthPage} />
					<Route path="/shop/:collection" component={Collections} />
					<Route path="/shop" exact component={ShopPage} />
					<Route path="/" exact component={HomePage} />
				</Switch>
			</div>
		);
	}
}

export default App;
