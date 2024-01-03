import "./About.css"; 
import Navbar from "../../components/Navbar/Navbar";
import Buttons from "../../components/Buttons/Buttons";
 
export default function About(){
    return(
        <>
            <Navbar/>
            <h1>About</h1>
            <Buttons text="About btn"/>
        </>
    )
}