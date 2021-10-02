import { NavLink } from "react-router-dom";

function Home(){
    return (
        <>
            <h2 className="title">Welcome to Visioned Kreations!</h2>
            <h3>Custom Cups, Shoes, Shirts, and Controllers!</h3>
            <NavLink to="/catalog">Come Shop!</NavLink>
        </>
    )
}

export default Home