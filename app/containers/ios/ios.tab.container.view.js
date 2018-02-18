import React from 'react';
import {
    TabBarIOS,
    Text,
    View
} from 'react-native';
import style from "./ios.tab.container.style"
import I18n from '../../I18n/index'
import pin from "../../assets/pin.png"
import PlaceMap from "../../scenes/tabs/place-map/scene.tab.place-map"
import AddMap from "../../scenes/tabs/add-place/scenes.tab.add-place"

export default renderView = (component) => {
    return (
        <TabBarIOS>
            <TabBarIOS.Item
                systemIcon="favorites"
                title={I18n.t('favorites')}
                selected={component.state.selectedTab === 0}
                onPress={component.handleTabPress.bind(component, 0)}>
                <PlaceMap annotations={component.state.annotations}/>
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title={I18n.t('place')}
                selected={component.state.selectedTab === 1}
                onPress={component.handleTabPress.bind(component, 1)}
                icon={pin}>
                <AddMap/>
            </TabBarIOS.Item>
        </TabBarIOS>
    )
}
