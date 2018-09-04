import React, { Fragment } from "react";
import history from "client/history";
import { Icon, Menu, Popup } from "semantic-ui-react";
import "./index.scss";

export default class UserPopup extends React.Component {
    handleItemClick = (e, { name }) => {
        console.log(name);
        let tabIndex;
        switch (name) {
            case "bookings":
                tabIndex = 0;
                break;
            case "settings":
                tabIndex = 1;
                break;
            case "reviews":
                tabIndex = 2;
                break;
            case "properties":
                tabIndex = 3;
                break;
            default: {
                return null;
            }
        }
        history.push({
            pathname: "/user-cabinet",
            search: `?tab=${tabIndex}`
        });
    };

    render() {
        const { currentUser } = this.props;
        return (
            <Popup
                trigger={
                    <span
                        style={{
                            fontSize: 16,
                            opacity: 0.8,
                            cursor: "pointer"
                        }}
                    >
                        {currentUser.fullName}
                    </span>
                }
                content={
                    <Menu
                        vertical
                        fluid
                        compact
                        onItemClick={this.handleItemClick}
                        style={{
                            fontSize: 13,
                            opacity: 0.8,
                            cursor: "pointer"
                        }}
                    >
                        <Menu.Item
                            name="bookings"
                            onClick={this.handleItemClick}
                        >
                            Bookings
                        </Menu.Item>
                        <Menu.Item
                            name="settings"
                            onClick={this.handleItemClick}
                        >
                            Settings
                        </Menu.Item>
                        <Menu.Item
                            name="reviews"
                            onClick={this.handleItemClick}
                        >
                            Reviews
                        </Menu.Item>
                        <Menu.Item
                            name="properties"
                            onClick={this.handleItemClick}
                        >
                            Properties
                        </Menu.Item>
                        <Menu.Item
                            name="properties"
                            onClick={this.props.addPropertyClicked}
                        >
                            Add property
                        </Menu.Item>
                        <Menu.Item
                            style={{
                                textAlign: "right"
                            }}
                            position="right"
                            name="log-out"
                            onClick={this.props.logoutClicked}
                        >
                            Log out
                        </Menu.Item>
                    </Menu>
                }
                on="click"
                position="bottom right"
            />
        );
    }
}
