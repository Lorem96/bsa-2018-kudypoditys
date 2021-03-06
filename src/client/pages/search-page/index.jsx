import React from "react";
import "./index.scss";
import { Container, Segment, Icon, Button, Image } from "semantic-ui-react";
import SearchSummary from "client/components/search-summary";
import RankingBar from "client/components/ranking-bar";
import PropertyListItem from "client/components/property-list-item";
import Pagination from "client/components/pagination";
import Header from "client/components/header";
import QuickFilter from "client/components/quick-filter";
import MapGlobalWidget from "client/components/map-global-widget";
import { connect } from "react-redux";
import { mapStateToProps } from "./container";
import sorry from "./img/nothing.png";
class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapProp: [],
            switch:
                localStorage.getItem("switch") === null
                    ? "list"
                    : localStorage.getItem("switch"),
            listItems: [],
            itemCount: 0,
            showEmptyList: false,
            showLoading: true,
            searchRequest: {},
            selectedPage: 1,
            properties: [
                {
                    coordinates: {
                        lat: 49.837089,
                        lng: 24.021161
                    }
                }
            ]
        };
    }

    handleSearchResults = searchData => {
        let properties = [];
        if (searchData.searchResults.properties) {
            properties = searchData.searchResults.properties.filter(
                property => property !== null
            );
        }
        const listItems = properties.map(property => (
            <PropertyListItem
                key={property.id}
                propertyItemData={property}
                itemIndex={properties.indexOf(property)}
            />
        ));

        this.setState({
            listItems: listItems,
            itemCount: searchData.searchResults.propertiesCount,
            searchRequest: searchData.searchRequest,
            properties: searchData.searchResults.properties,
            showLoading: false,
            showEmptyList: searchData.searchResults.propertiesCount === 0
        });

        let tempArr = [];

        properties.forEach(i => {
            tempArr.push({
                id: i.id,
                price: i.rooms[0].price,
                name: i.name,
                currency: i.currency,
                coordinates: {
                    lat: i.coordinates.lat,
                    lng: i.coordinates.lng
                },
                latitude: i.coordinates.lat,
                longitude: i.coordinates.lng,
                imageSrc: i.images[0].url,
                address: i.address,
                rating: i.rating
            });
        });

        if (properties) {
            localStorage.setItem(
                "lastPositionLat",
                properties[0] ? properties[0].coordinates.lat : 0
            );
            localStorage.setItem(
                "lastPositionLng",
                properties[0] ? properties[0].coordinates.lng : 0
            );
        }

        this.setState({ mapProp: tempArr });
    };
    handleList_Map = (e, data) => {
        this.setState({
            switch: data.value
        });
        localStorage.setItem("switch", data.value);
    };
    render() {
        const active = this.state.switch;
        const LastStartPosition = {
            latitude: JSON.parse(localStorage.getItem("lastPositionLat")),
            longitude: JSON.parse(localStorage.getItem("lastPositionLng"))
        };
        console.log("this.state.showLoading = " + this.state.showLoading);
        return (
            <div className="mock">
                <Header
                    handleSearchResults={this.handleSearchResults}
                    showSearch={true}
                />
                {this.state.showLoading ? (
                    <div className="centeredqqq" >
                        <div class="lds-spinner">
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                        </div>
                    </div>
                ) : (
                        <div className="search-page__wrapper">
                            <div className="breadcrumb_wrapper">
                                <Segment className="breadcrumb__segment" />
                            </div>

                            <Container className="search-page__wrapper-left_side">
                                <QuickFilter />

                                <div
                                    style={{
                                        marginTop: "4%"
                                    }}
                                />
                            </Container>
                            <Container className="search-page__wrapper-right_side">
                                <div className="search-page__row">
                                    <SearchSummary
                                        totalCount={this.state.itemCount}
                                        destination={this.state.searchRequest.query}
                                    />

                                    <div className="switch">
                                        <Button
                                            icon
                                            className="list_btn"
                                            toggle
                                            active={active === LIST}
                                            value={LIST}
                                            onClick={this.handleList_Map}
                                        >
                                            <Icon name="list ul" />
                                            List
                                    </Button>
                                        <Button
                                            icon
                                            disabled={!this.state.mapProp.length}
                                            className="map_btn"
                                            toggle
                                            active={active === MAP}
                                            value={MAP}
                                            onClick={this.handleList_Map}
                                        >
                                            <Icon name="world" />
                                            Map
                                    </Button>
                                    </div>
                                </div>
                                {this.state.showEmptyList ? (
                                    <div>
                                        <Image
                                            style={{ paddingTop: 50 }}
                                            src={sorry}
                                            size="medium"
                                            centered
                                        />{" "}
                                        <div className="sorry">
                                            Sorry, no properties found
                                    </div>{" "}
                                    </div>
                                ) : (
                                        <div>
                                            {this.state.switch === LIST ? (
                                                <div>
                                                    <RankingBar
                                                        key="RankingBar"
                                                        searchRequest={
                                                            this.state.searchRequest
                                                        }
                                                        onSortingSelected={
                                                            this.onSortingSelected
                                                        }
                                                    />
                                                    {this.state.listItems}
                                                </div>
                                            ) : (
                                                    <div
                                                        className="search_page__globalMap"
                                                        style={{ marginTop: 20 }}
                                                    >
                                                        <MapGlobalWidget
                                                            properties={this.state.mapProp}
                                                            startPosition={
                                                                this.state.mapProp.length
                                                                    ? {
                                                                        latitude: this
                                                                            .state
                                                                            .mapProp[0]
                                                                            .coordinates
                                                                            .lat,
                                                                        longitude: this
                                                                            .state
                                                                            .mapProp[0]
                                                                            .coordinates
                                                                            .lng
                                                                    }
                                                                    : LastStartPosition
                                                            }
                                                            zoom={13}
                                                            controlEnable={true}
                                                        />
                                                    </div>
                                                )}
                                            {this.state.switch === LIST ? (
                                                <div className="search-page__pagination">
                                                    <Pagination
                                                        pagesCount={
                                                            this.state.itemCount / 5
                                                        }
                                                    />
                                                </div>
                                            ) : null}
                                        </div>
                                    )}
                            </Container>
                        </div>
                    )}
            </div>
        );
    }
}

const SWITCH_VALUE = {
    LIST: "list",
    MAP: "map"
};
const { LIST, MAP } = SWITCH_VALUE;

export default connect(mapStateToProps)(SearchPage);
