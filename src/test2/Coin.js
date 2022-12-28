import { useEffect, useState } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => 
      setUserData(data));
      
    console.log("API");
  }, []);
  console.log("123");
  return (
    <>
      <h1>User List</h1>
      {loading ? <p>Loading....</p> : ""}
      {userData.map(item =>{
        // return  <li key={Math.random()}>{item.email}</li>
            return <User key={Math.random()} name={item.name} username={item.username} email ={item.email} />})}

        {/* <User newUser={userData}/> */}
    </>
  );
}

// const User = (props) =>{
//     return(
//         <div>
//          <div>
//          {props.newUser[0].email}
//             </div>   
//         </div>
//     );
// }
const User = (props) =>{
    return(<>
        <li>name : {props.name} / username : {props.username} / email : {props.email}</li>
        </>
    )

}

export default Coin;