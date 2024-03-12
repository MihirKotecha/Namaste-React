import UserCard from "./UserClass";
const About = () => {
    return(
        <div>
            <h1>About</h1>
            <p>This is a simple app that shows a list of restraunts and their details</p>
            <UserCard name={"Mihir Kotecha"} location={"Ahmedabad"}/>
        </div>
    );
};

export default About;