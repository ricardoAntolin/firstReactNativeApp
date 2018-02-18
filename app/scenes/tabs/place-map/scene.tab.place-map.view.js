import React from 'react';

import style from "./scene.tab.place-map.style"
import MapView, { Marker} from "react-native-maps";

export default renderView = (component) => {
    return (
        <MapView
            style={style.map}
            region={component.region}>

            {component.props.annotations.map((marker, index)=> (
                <Marker
                    key={index}
                    coordinate={{
                        latitude: marker.latitude,
                        longitude: marker.longitude,
                    }}
                    title={marker.title}
                />
            ))}
        </MapView>
    )
}


