

export function mapStateToProps(state, ownProps) {
    const {shownProperties} = state;
    return {
        propertyItemData: shownProperties[ownProps.id],

    };
}