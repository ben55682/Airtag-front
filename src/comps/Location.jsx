import React, { useState, useEffect } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";

export default function Location({ location }) {
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState({ lat: 31, lng: 35 });

    useEffect(() => {
        let latitude = parseFloat(location.lat);
        let longitude = parseFloat(location.lng);
    
        // Check if latitude and longitude are valid numbers
        if (!isNaN(latitude) && !isNaN(longitude)) {
            setPosition({ lat: latitude, lng: longitude });
        } else {
            // Fallback to default position or handle invalid case
            console.error("Invalid latitude or longitude:", location.lat, location.lng);
            latitude = parseFloat(location.latitude);
            longitude = parseFloat(location.longitude);
    
            // Check if latitude and longitude are valid numbers again
            if (!isNaN(latitude) && !isNaN(longitude)) {
                setPosition({ lat: latitude, lng: longitude });
            } else {
                // Set default position or handle this case appropriately
                setPosition({ lat: 31, lng: 35 });
            }
        }
    }, [location]);

    return (
        <APIProvider apiKey={"AIzaSyBIa096Pw1E9EqNNfhmkn4gRCyeCJrVi3A"}>
            <Map
                defaultCenter={{ lat: 31, lng: 35 }}
                defaultZoom={3}
                gestureHandling={'greedy'}
                mapId={"d3cb439b75f40677"}
            >
                <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                    <Pin
                        background={"grey"}
                        borderColor={"black"}
                        glyphColor={"red"}
                    />
                </AdvancedMarker>

                {open && (
                    <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                        <p>Hello</p>
                    </InfoWindow>
                )}
            </Map>
        </APIProvider>
    );
}
