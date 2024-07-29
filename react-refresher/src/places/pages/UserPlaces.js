import React from "react"

import PLaceList from '../../places/components/PlaceList'
import {} from 'react-router-dom'
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

const DUMMY_PLACES = [
    {
        id: 'p1',
        description: 'One of the most famous sky acraper in the world', 
        title: 'Empire State Buiulding',
        imageUrl: `https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/crm/newyorkstate/GettyImages-486334510_CC36FC20-0DCE-7408-77C72CD93ED4A476-cc36f9e70fc9b45_cc36fc73-07dd-b6b3-09b619cd4694393e.jpg`,
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.748817,
            lng: -73.985428
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        description: 'One of the most famous sky acraper in the world', 
        title: 'Empire State Buiulding',
        imageUrl: `https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/crm/newyorkstate/GettyImages-486334510_CC36FC20-0DCE-7408-77C72CD93ED4A476-cc36f9e70fc9b45_cc36fc73-07dd-b6b3-09b619cd4694393e.jpg`,
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.748817,
            lng: -73.985428
        },
        creator: 'u2'
    }
]
const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return (
        <PLaceList 
        items={loadedPlaces}
        />
    )
} 
export default UserPlaces;