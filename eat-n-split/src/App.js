import { useState } from "react";

const initialFriends = [
  {
    id: 118006,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const Button = ({ onClick, children }) => {
  return(
    <button className="button" onClick={onClick}>{children}</button>
  )
}

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    return(
      setShowAddFriend((show) => !show)
    )
  }

  const handleAddFriend = ( friend ) => {
      setFriends((friends) => [...friends, friend]);
      setShowAddFriend(false)
  }
 
 const handleSelection = (friend) => {
  setSelectedFriend((cur) => cur?.id === friend.id ? null : friend)
  setShowAddFriend(false);
 }

  return(
    <div className="app">
    <div className="sidebar">
    <FriendsList 
      friends={friends}
      onSeletion={handleSelection}
      selectedFriend={selectedFriend}
    />

    {showAddFriend ? <FormAddFreind onAddFriend={handleAddFriend}/> : null}
    
    <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add Friend"}</Button>
    </div>
      
      {selectedFriend === null ? null : <FormSplitBill 
        selectedFriend={selectedFriend}
      />}

    </div>
  )
}

const FriendsList = ({ onSeletion, friends, selectedFriend }) => {
  return(
    <div>
      <ul>{friends.map((friend) => {
        return(
          <Friend 
            friend={friend}
            key={friend.id}
            onSeletion={onSeletion}
            selectedFriend={selectedFriend}
          />
        )
      })
      }</ul>
    </div>
  )
}

const Friend = ({ friend, onSeletion, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;
  
  return(
    <li className={isSelected ? "selected" : ""}>
    <img 
      src={friend.image} alt={friend.name}
    />
    <h3>{friend.name}</h3>

    {friend.balance < 0 ? 
    <p className="red">You owe Clark ${Math.abs(friend.balance)}</p> 
    :  friend.balance === 0 ?
    <p>You and {friend.name} are even</p> 
    : <p className="green">{friend.name} owes you ${friend.balance}</p> 
    }
    
    <Button onClick={() => onSeletion(friend)} >{isSelected ? "Close" : "Select"}</Button>
    </li>
  )
}

const FormAddFreind = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
 
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = { 
      name, 
      image: `${image}?=${id}`, 
      balance: 0,
      id 
    }

    onAddFriend(newFriend); //pass obj as arg

    setName("");
    setImage("https://i.pravatar.cc/48")
  }

  return(
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑 Friend's name</label>
      <input type="text" value={name} onChange={(e) =>setName(e.target.value)}/>

      <label>🌃 Image URL</label>
      <input type="text" value={image} onChange={(e) =>setImage(e.target.value)}/>

      <Button>Add</Button>
    </form>
  )
}


const FormSplitBill = ({ selectedFriend }) => {
  return(
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💵 Bill Value</label>
      <input type="text" />

      <label>🕴️ Your expense</label>
      <input type="text" />

      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
      <input type="text" disabled/>

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  )
}
export default App;