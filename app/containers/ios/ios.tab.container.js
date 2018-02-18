import React, { Component } from 'react';
import View from "./ios.tab.container.view"

export default class Places extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 0,
            annotations: [
                {
                    title: 'Playa de Levante',
                    latitude: 38.534861,
                    longitude: -0.116762
                },
                {
                    title: 'Plaza Triangular',
                    latitude: 38.537118,
                    longitude: -0.126730
                }
            ]
        };
        console.log('test')
    }

    handleTabPress(tab) {
        this.setState({ selectedTab: tab })
    }

    render() {
        return View(this);
    }
}
