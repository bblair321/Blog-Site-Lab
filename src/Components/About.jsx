function About({image, about}){
    return (
        <div>
            <aside>
                <img src={image} alt="blog logo"></img>
                <p>{about}</p>
            </aside>
        </div>
    );
}

export default About