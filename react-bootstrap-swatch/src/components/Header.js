import React,{Component} from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
            <a className="navbar-brand" href="#">Bootstrap Swatch</a>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                    
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>

                    <button className="btn btn-danger ml-4">
                        Logout
                    </button>
                    
                </div>
            </nav>
        )
    }

}

export default Header;