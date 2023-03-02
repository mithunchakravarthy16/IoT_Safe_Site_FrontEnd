import {useState} from 'react';
import { GrokList } from 'elements';

const GrokEye = () => {
    return (
        <div style={{display: "flex", height: "100vh", width: "100vw"}} >
            <div style={{flex: 3}} ></div>
            <div style={{flex: 1}} >
                <GrokList />
            </div>
        </div>
    )
}

export default GrokEye;