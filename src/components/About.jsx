import User from './User';
import Counter from './Counter';
import UserClass from './UserClass';

const About = () => {
    return (
    <div>
        <h1>About Us</h1>
        <User />
        <UserClass name="Damyant Jain"/>
        {/* <Counter /> */}
    </div>
    );
}

export default About;