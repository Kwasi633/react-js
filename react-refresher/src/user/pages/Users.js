import React from 'react'
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{
        id: 'u1',
        name: 'Ezra Asiedu',
        places: 3,
        image: 'https://prod-media.beinsports.com/image/1708124438618_8b0de833-9028-4f0b-bbcf-a246b0c20104.jpg'
    }]  
    return (
        
        <UsersList 
        items={USERS}
        />
    )
};

export default Users;