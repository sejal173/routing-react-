import "./Contact.css" 
import Navbar from "../../components/Navbar/Navbar" ;
import Buttons from "../../components/Buttons/Buttons";
 
export default function Contact(){
    return(
        <>
            <Navbar/>
            <h1>Contact</h1>
            <Buttons text="contact btn"/>
        </>
    )
}