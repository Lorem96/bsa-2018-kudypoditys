import React, { Component, Fragment } from "react";
import "./index.scss";
import Header from "client/components/header";
import Footer from "client/components/footer";

class Page extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                {this.props.children}
                <Footer />
            </Fragment>
        );
    }
}

export default Page;
