import React, { Component } from 'react';
import View from "./scene.tab.place-map.view"

export default class PlaceMap extends Component {
    constructor(){
        super();
        this.region = {
            latitude: 38.541524,
            longitude: -0.123661,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
            title: "Benidorm"
        }
    }

    render() { return View(this) }
}
