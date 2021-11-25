import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import BasketScreen from '../basket-screen/basket-screen';
import {AppRoute} from '../../const';
import {loadGuitars} from '../../store/actions';
import {guitarPropType} from '../guitar-props/guitar-props';


const App = (props) => {
  const {guitars} = props;

  const dispatch = useDispatch();
  dispatch(loadGuitars(guitars));

  return (
    <Switch>
      <Route exact path={AppRoute.MAIN}>
        <MainScreen />
      </Route>

      <Route exact path={AppRoute.BASKET}>
        <BasketScreen />
      </Route>
    </Switch>
  );
};

App.propTypes = {
  guitars: PropTypes.arrayOf(guitarPropType).isRequired,
};

export default App;
