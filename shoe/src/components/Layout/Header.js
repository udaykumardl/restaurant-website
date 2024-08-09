import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className="header" >
        <h1>Shoe Mart</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
     </Fragment>
  );
};

export default Header;