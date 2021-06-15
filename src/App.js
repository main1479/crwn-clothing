import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import HomePage from './pages/home/homePage';
import ShopPage from './pages/shop/shop';
import Navbar from './components/navbar/navbar';
import AuthPage from './pages/auth/authPage';
import Collections from './pages/collections/collections';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
	state = {
		currentUser: null,
	};

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
					console.log(this.state);
				});
			}
			this.setState({ currentUser: userAuth });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className="App">
				<ToastContainer />
				<Navbar currentUser={this.state.currentUser} />
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
