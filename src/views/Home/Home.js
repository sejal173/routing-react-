import "./Home.css";
import Navbar from "./../../components/Navbar/Navbar";
import Buttons from "../../components/Buttons/Buttons";
 
export default function Home(){
    return(
        <>
            <Navbar/>
            <h1>Home</h1>
            <Buttons text="home btn"/>
        </>
    )
}