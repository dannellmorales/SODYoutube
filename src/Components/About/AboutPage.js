import { Component } from "react";
import Member from "./Member";
import "./AboutPage.css";
import {Link} from "react-router-dom"


const AboutPage = () => {//Soma
    const team = [
    
        {
            id: "person1",
            firstName: "Soma",
            lastName: "Majumder",
            title: "Software Developer",
            description: "Hello everyone, my name is Soma Majumder, and I am a Pursuit Fellow.",
            profilePicture: "https://media-exp1.licdn.com/dms/image/C5603AQExFFmBxWMlNw/profile-displayphoto-shrink_800_800/0/1516998034985?e=1660780800&v=beta&t=5Z19w_Enf5awAW7mxluBHGYXR8GwpXRgneheScnEUYs",
           

        },
        {
            id: "person2",
            firstName: "Olayinka",
            lastName: "Fakanbi",
            title: "Software Developer",
            description: "Hello everyone, my name is Olayinka Fakanbi, and I am a Pursuit Fellow.",
            profilePicture: "https://avatars.githubusercontent.com/u/45779209?v=4"

        },
        {
            id: "person3",
            firstName: "Dan-ell",
            lastName: "Morales",
            title: "Software Developer",
            description: "Hello everyone, my name is Dan-ell Morales, and I am a Pursuit Fellow.",
            profilePicture: "https://live.staticflickr.com/65535/52165726387_08cedacaf6_n.jpg"
        }
     ];

     
  
        return(
            <section className="about-team">
            
            <h2 className="Desc"> Description</h2>
            <p className="Desc"> "In this Youtube project we all worked together seamlessly. It was a team effort and it was very fun to work on."</p><br></br>
             <h1 className="Desc">About Us</h1>
             <a className="gh" href="https://github.com/Sokairavi">Soma's Github</a><br></br><br></br>
             <a className="gh" href="https://github.com/Olayinka19">Ola's Github</a><br></br><br></br>
             <a className="gh"href="https://github.com/dannellmorales">Dan's Github</a>
                <p>{team.map((member) => (
            <Member key={member.id} id={member.id} firstName={member.firstName} lastName={member.lastName} title={member.title} description={member.description} profilePicture={member.profilePicture} />
        ))}</p>
            
            </section>
        )
    
}

export default AboutPage;