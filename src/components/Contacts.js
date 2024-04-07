import UserCardClass from "./UserCardClass";
import UserFunctionalComponent from "./UserFunctionalComponent";

const Contacts=()=>{
    return (
        <div>
            <h1>Contact Page</h1>
            <UserCardClass 
                gitURL={"https://api.github.com/users/dev-lsi"}
            />
        </div>
    )
}

export default Contacts;