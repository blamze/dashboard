import React, {useState, useEffect} from 'react'
import {Card} from '../..'

const pointsApiUrl = 'https://api.sheety.co/8900d1db-41d9-4c84-9102-57dc05f99177'

export const FrontendPoints = () => {
    const [pointsNodes, setPointsNodes] = useState([])
    useEffect(() => {

        const fetchPoints = () => {
            fetch(pointsApiUrl).then(response => response.json()
            ).then(data => setPointsNodes(data.map(person => <div key={person.vardas}>{person.vardas} {person.taskai}</div>)))
        };

        const refreshPointsInterval = 2 * 60 * 60 * 1000;
        fetchPoints()
        window.setInterval(fetchPoints, refreshPointsInterval);
    }, [])

    return (
        <Card title="Frontend points:">
            <div className="points-wrapper">{pointsNodes}</div>
        </Card>
    )
}

