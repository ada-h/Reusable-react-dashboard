import React from 'react'
import SmallStats from './smallStats'
import UserStats from './userStats'
import DeviceStats from './deviceStats'
import Draft from './draft'
import Discussions from './discussions'
import Referals from './referals'

const Dashboard = () =>{
    return (
        <div>
            <SmallStats/>
            <div className = 'row'>
                <UserStats/>
                <DeviceStats/>
                <Draft/>
                <Discussions/>
                <Referals/>
            </div>
        </div>
    )
}

export default Dashboard