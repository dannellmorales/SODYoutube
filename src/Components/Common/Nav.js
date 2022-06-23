import React, { useState } from "react";
import "./Search.css";
import {Link} from "react-router-dom"
function Nav({ search, setSearch, submit, setSubmit }) {


    const handleChange = (event) => {
 
        setSearch(event.target.value)
        console.log(search)
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
      
        submit ? setSubmit(false) : setSubmit(true)
    
    }

    return (
        <header className="gridNav Nav">
            <div className="navWrap">
                <div>
                    <h5>
                        <Link to="/" className="links">Home</Link>
                <br/>
                        <Link to="/aboutpage" className="links">About</Link>
                    </h5>
                </div>
            
                <form onSubmit={handleSubmit}>
                    <input value={search} onChange={handleChange} />
                    <button>Search</button>
                </form>
            </div>
        </header>
    );
}
export default Nav;
