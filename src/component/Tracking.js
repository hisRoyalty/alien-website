import React from "react";
import GoogleMapReact from 'google-maps-react-markers';
import Header from "./Header";


export default function Tracking(){


function createMapOptions(maps) {

    return {
        zoomControlOptions: {
        position: maps.ControlPosition.RIGHT_CENTER,
        style: maps.ZoomControlStyle.SMALL
        },
        mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT
        },
        mapTypeControl: true
    };
    }
  const defaultProps = {
    center: {
      lat: 1.3521,
      lng: 103.8198
    },
    zoom: 11
  };

  const AlienHeadMarker = ({ lat, lng }) => (
    <div style={{ position: 'relative', width: '32px', height: '32px', transform: 'translate(-50%, -100%)' }}>
      <img src='https://media.discordapp.net/attachments/744120656278454274/1134486919653359657/alien.png?width=662&height=662' alt="Alien Head" style={{ width: '100%', height: '100%' }} />
    </div>
  );

  const AlienBunker = ({ lat, lng }) => (
    <div style={{ position: 'relative', width: '32px', height: '32px', transform: 'translate(-50%, -100%)' }}>
      <img src='https://media.discordapp.net/attachments/744120656278454274/1134709362481430548/pngtree-bunker-line-icon-vector-png-image_6677285.png?width=495&height=495' alt="Alien Head" style={{ width: '100%', height: '100%' }} />
    </div>
  );

  
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Header></Header>
      <div className="h-24">

        <img className='h-full' src='https://media.discordapp.net/attachments/744120656278454274/1134725830992466010/image.png?width=394&height=209'></img>


      </div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        
        options={createMapOptions}>
            
        // Singapore
        <AlienHeadMarker lat={1.4655} lng={103.7578}></AlienHeadMarker>
        // Munich
        <AlienHeadMarker lat={48.137154} lng={11.576124}></AlienHeadMarker>
        // Bhopal
        <AlienHeadMarker lat={23.259933} lng={77.412613}></AlienHeadMarker>
        // Mexico
        <AlienHeadMarker lat={19.432608} lng={-99.133209}></AlienHeadMarker>
        // Yorkshire
        <AlienHeadMarker lat={54.0000} lng={-1.5000}></AlienHeadMarker>
        // Greenland
        <AlienHeadMarker lat={71.706936} lng={-42.604303000000016}></AlienHeadMarker>
        // Leningrad
        <AlienHeadMarker lat={59.9386} lng={30.3141}></AlienHeadMarker>
        // Moscow
        <AlienHeadMarker lat={55.751244} lng={37.618423}></AlienHeadMarker>
        // California
        <AlienHeadMarker lat={36.778259} lng={-119.417931}></AlienHeadMarker>
        // Ohio
        <AlienHeadMarker lat={40.367474} lng={-82.996216}></AlienHeadMarker>
        // Antarctica
        <AlienHeadMarker lat={90} lng={0}></AlienHeadMarker>
        // Shenzhen
        <AlienHeadMarker lat={22.542883} lng={114.062996}></AlienHeadMarker>
        // Riyadh
        <AlienHeadMarker lat={24.774265} lng={46.738586}></AlienHeadMarker>
        // Bangui
        <AlienHeadMarker lat={4.3612} lng={18.5550}></AlienHeadMarker>
        //Reykjavik
        <AlienHeadMarker lat={64.128288} lng={-21.827774}></AlienHeadMarker>
        // Lima
        <AlienHeadMarker lat={-12.046374} lng={-77.042793}></AlienHeadMarker>
        // Adelaide
        <AlienHeadMarker lat={-34.9287} lng={138.5986}></AlienHeadMarker>
        // Chennai
        <AlienHeadMarker lat={13.067439} lng={80.237617}></AlienHeadMarker>
        
        //-----BUNKERS----

        //Singapore
        <AlienBunker lat={1.3521} lng={103.8198}></AlienBunker>
        //Ohio
        <AlienBunker lat={40.367474} lng={-82.996216}></AlienBunker>
        //Minnesotta
        <AlienBunker lat={46.392410} lng={-94.636230}></AlienBunker>
        //Brazil
        <AlienBunker lat={10.6500} lng={103.8198}></AlienBunker>
        //Amsterdam
        <AlienBunker lat={52.377956} lng={4.897070}></AlienBunker>
        //Zurich
        <AlienBunker lat={47.3667} lng={8.5500}></AlienBunker>
        //London
        <AlienBunker lat={51.509865} lng={-0.118092}></AlienBunker>
        //Sydney
        <AlienBunker lat={-33.865143} lng={151.209900}></AlienBunker>

      </GoogleMapReact>
    </div>
  );
}