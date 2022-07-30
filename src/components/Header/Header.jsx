import Navbar from '../Navbar/Navbar';
import Search from './../Search/Search'
import "./header.css"

const Header = () => {

  return (
    <div>
      <div className="grid-container">

        <div className="grid-item grid-logo">H</div>
        <div className="grid-item grid-nav"><Navbar /></div>
        <div className="grid-item grid-blank"></div>
        <div className="grid-item grid-info"></div>
        <div className="grid-item grid-search"><div className="header-container">

          <div className="home-header">
            <h1 className="header-title">Find suitable <br /> room in Hotel, <br />Just search here...</h1>
          </div>

          <Search />
        </div></div>
      </div>


    </div>
  )
}

export default Header