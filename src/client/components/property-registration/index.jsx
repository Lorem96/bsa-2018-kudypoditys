import './index.scss';
import React from 'react';
import { Tab, Container } from 'semantic-ui-react';
import { MenuItems } from "./config";
import { DrawTab } from "./DrawTab";
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from "./container";

import BasicInfoPropertyRegistrationForm from '../basic-info-property-registration-form';
import FacilitiesPropertyRegistrationForm from '../facilities-property-registration-form';
import PolicesPropertyRegistrationForm from '../polices-property-registration-form';
import PhotoRegistrationPropertyForm from '../photo-registration-property-form';
import PaymentPropertyRegistrationForm from '../payment-property-registration-form';

import RoomsPropertyRegistrationForm from '../no-rooms-component/addRoomForm';

export class PropertyRegistration extends React.Component {
    state = {
        activeIndex: 0
    };

    componentDidMount() {
        const { facilities } = this.props;
        if (!facilities || facilities.length === 0) {
            this.props.getFacilities();
        }
    }

    handleTabChange = (e, { activeIndex }) => {
        this.setState({ activeIndex });
    }

    nextTab = () => {
        const { activeIndex } = this.state;
        this.setState({
            activeIndex: activeIndex + 1
        });
    }

    normalizeFacilities(submitedFacilities) {
        if (!submitedFacilities) return;

        const { facilities } = this.props;
        let res = [];

        for (let i = 0; i < submitedFacilities.length; ++i) {
            if (submitedFacilities[i]) {
                res.push(facilities.find(x => x.id === i));
            }
        }

        return res
            .filter(x => x)
            .map(x => ({
                id: x.id,
                name: x.name,
                facilityCategoryId: x.facilityCategoryId
            }));
    }

    onFormSubmit = (data) => {
        data.facilities = this.normalizeFacilities(data.facilities)

        this.props.createProperty(data)
    }

    getWizardForms() {
        return [
            {
                key: 'Basic Info',
                icon: 'home',
                content: 'Basic Info',
                header: ' Rooms and pricing',
                subheader: 'Start by telling us your property\'s name, contact details and address.',
                component: <BasicInfoPropertyRegistrationForm onSubmit={
                    this.nextTab
                } />
            },
            {
                key: 'Facilities & services',
                icon: 'bath',
                content: 'Facilities & services',
                header: ' Facilities & services',
                subheader: 'Now, tell us some general details about your property, such as facilities available, internet, parking and the languages you speak.',
                component: <FacilitiesPropertyRegistrationForm onSubmit={
                    this.nextTab
                } />
            },
            {
                key: 'Rules',
                icon: 'clipboard list',
                content: 'Rules',
                header: ' Polices',
                subheader: ' Specify some basic policies. Do you allow children or pets? How flexible are you with cancellations?',
                component: <PolicesPropertyRegistrationForm onSubmit={
                    this.nextTab
                } />,
            },
            {
                key: 'Photo',
                icon: 'photo',
                content: 'Property photos',
                header: '  Property photos',
                subheader: 'Great photos invite guests to get the full experience of your property, so upload some high-resolution photos that represent all your property has to offer. We will display these photos on your property\'s page on the Booking.com website.',
                component: <PhotoRegistrationPropertyForm onSubmit={
                    this.nextTab
                } />
            },
            {
                key: 'menuItem pricing',
                icon: 'usd',
                content: 'Layout and pricing', //temporary
                header: ' Layout and pricing',
                subheader: 'Tell us about layout and pricing',
                component: <PaymentPropertyRegistrationForm onSubmit={this.nextTab} />,
            },
            {
                key: 'menuItem rooms',
                icon: 'usd',
                content: 'Rooms', //temporary
                header: 'Rooms and Beds',
                subheader: ' Tell us about your first room. After entering all the necessary info, you can fill in the details of your other rooms',
                component: <RoomsPropertyRegistrationForm onSubmit={this.onFormSubmit} />,
            }
        ];
    }

    getPanes() {
        return this.getWizardForms().map(menuItemForm => ({
            menuItem: menuItemForm,
            render: () =>
                <DrawTab
                    header={menuItemForm.header}
                    subheader={menuItemForm.subheader}
                    component={menuItemForm.component}
                />
        }));
    }

    render() {
        const { activeIndex } = this.state;

        return (
            <Container>
                <Tab
                    menu={{ fluid: true, vertical: true }}
                    menuPosition="left"
                    panes={this.getPanes()}
                    activeIndex={activeIndex}
                    onTabChange={this.handleTabChange}
                />
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyRegistration);
