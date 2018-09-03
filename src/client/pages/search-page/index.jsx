import React from "react";
import "./index.scss";
import { Container, Grid, Segment, Icon } from "semantic-ui-react";

import Breadcrumbs from "client/components/breadcrumbs";
import SearchSummary from "client/components/search-summary";
import RankingBar from "client/components/ranking-bar";
import PropertyListItem from "client/components/property-list-item";
import { Pagination } from "client/components/pagination";
import BasicMapWidget from "client/components/basic-map-widget";
import Header from "client/components/header";
import { Breadcrumb } from "semantic-ui-react";
import QuickFilter from "client/components/quick-filter";
import { connect } from "react-redux";
import { mapStateToProps } from "./container";
import history from "client/history";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: [],
            itemCount: 0,
            searchRequest: {}
        };

    }
    handleSearchResults = searchData => {
        history.push({
            pathname: '/search-page',
            search: `?query=${searchData.searchRequest.query}&rooms=${searchData.searchRequest.rooms}&adults=${searchData.searchRequest.adults}&children=${searchData.searchRequest.children}&startDate=${searchData.searchRequest.startDate}&endDate=${searchData.searchRequest.endDate}&sortBy=${searchData.searchRequest.sortBy}`
          })
        const listItems = searchData.searchResults.map(property => (
            <PropertyListItem key={property.id} propertyItemData={property} />
        ));
        this.setState({
            listItems: listItems,
            itemCount: searchData.searchResults.length,
            searchRequest: searchData.searchRequest
        });
    };
    onSortingSelected = value => {
        this.setState({ sortBy: value });
    };

    render() {
        return (
            <div className="mock">
                <Header
                    handleSearchResults={this.handleSearchResults}
                    showSearch={true}
                />
                <div className="search-page__wrapper">
                    <div className="breadcrumb_wrapper">
                        <Segment className="breadcrumb__segment">
                            {/* <Breadcrumb
                                icon="right angle"
                                sections={[
                                    { key: "Home", content: "Home", href: "#" },
                                    {
                                        key: "Ukraine",
                                        content: "Ukraine",
                                        href: "#"
                                    },
                                    { key: "Lviv", content: "Lviv", href: "#" },
                                    {
                                        key: "DREAM Hostel Lviv",
                                        content: "DREAM Hostel Lviv",
                                        href: "#"
                                    }
                                ]}
                            /> */}
                        </Segment>
                    </div>

                    <Container className="search-page__wrapper-left_side">
                        <QuickFilter />
                        <div
                            style={{
                                marginTop: "4%"
                            }}
                        >
                            <BasicMapWidget
                                key="BasicMapWidget"
                                coordinates={{ lat: 49.837089, lng: 24.021161 }}
                                rounded
                                centered
                            />
                        </div>
                    </Container>
                    <Container className="search-page__wrapper-right_side">
                        <div className="search-page__row">
                            <SearchSummary
                                totalCount={this.state.itemCount}
                                destination={this.state.searchRequest.query}
                            />
                            <div className="switch">
                                <div className="list_btn">
                                    <Icon name="list ul" color="white" />
                                    List
                                </div>
                                <div className="map_btn">
                                    <Icon name="world" />
                                    Map
                                </div>
                            </div>
                        </div>
                        <RankingBar
                            key="RankingBar"
                            searchRequest={this.state.searchRequest}
                        />
                        {this.state.listItems}
                        <div className="search-page__pagination">
                            <Pagination pagesCount={10} />
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}


export default connect(mapStateToProps)(SearchPage);
