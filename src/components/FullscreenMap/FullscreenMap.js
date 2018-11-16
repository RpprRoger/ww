import React from 'react';

import Map from '../Map/Map';

import Control from 'react-leaflet-control';

const style = {
    position: 'absolute',
    zIndex: '1000',
    pointerEvents: 'none',
    top: '50%', /* possible because the placeholder's parent is the map */
    transform: 'translateY(-50%)', /* using the CSS3 Transform technique */
    paddingTop: '10px',
};

export default (props) => (
    <div style={{ width: '100%', height: '100%'}}>
        <Map {...props}>
            <Control position="bottomleft">
                <h1>asdjasd</h1>
            </Control>
        </Map>
    </div>
);
