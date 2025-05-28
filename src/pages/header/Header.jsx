import './Header.css';

function Header({ cardDetails }) {


  return (
    <>
      <div className="header-container">
        <div>
          <h1>Hunger Box</h1>
        </div>
        <div className='cart-container'>
          {/* <Link to="/cart"> */}
          <button onClick={() => window.location.href = "/cart"}>🛒{cardDetails.length}</button>
          {/* </Link> */}
        </div>
      </div>
    </>
  )
}

export default Header;