import React from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import { trailData } from '../data/data.js';
// import styled from 'styled-components';
import '../index.css';

// const Wrapper = styled.div`
//   width: ${props => props.width};
//   height: ${props => props.height};
// `;

export default function TrailMap() {

  // const [activeTrail, setActiveTrail] = useState(null);

  const featureStyle = {
    color: '#749774'
  }

  const onEachFeature = (feature, layer) => {
    const popupContent = `
      <h4>${feature.properties.Name}</h4>
      <p>${feature.properties.Miles} miles<p>
      <p>${feature.properties.Type}<p>
      <p>surface: ${feature.properties.Surface}<p>
    `;
    layer.bindPopup(popupContent);
};

  return (
    <Map center={[45.5252, -122.7163]} zoom={13}>
      <TileLayer 
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        maxZoom={20}
      />
      <GeoJSON data={trailData} style={featureStyle} onEachFeature={onEachFeature} />
    </Map>
  );
}