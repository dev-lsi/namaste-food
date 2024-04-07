import React from "react";

class UserCardClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            gitURL:this.props.gitURL,
            name:"N/A",
            location:"N/A",
            avatar_url:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        }
    }

    componentDidMount(){
        console.log("C Did Mount")
        this.timer=setTimeout(async()=>{
            const response = await fetch(this.state.gitURL);
            const userData = await response.json();
            const {name,location,avatar_url,}=userData;
            this.setState({
            gitURL:this.props.gitURL,
            name:name,
            location:location,
            avatar_url:avatar_url});
        },2000);
    }

    componentDidUpdate(){
        console.log("C Did Update")
    }

    componentWillUnmount(){
        clearTimeout(this.timer);
    }
    

    

    render(){
const {name,avatar_url,location} = this.state

        return (
        <div className="user-card">
            <h1>User Card by class</h1>
            <div className="user-image-container">
                <img src={avatar_url} 
                      alt="user image"></img>
                </div>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
        </div>
        )
    }
}       

export default UserCardClass;