import { slideUpdate } from 'client/logic/slider/actions';

export function mapStateToProps(state) {
    const { slider } = state;
    return {
        ...slider
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        handleSlideChange(slideIndex) {
            dispatch(slideUpdate(slideIndex));
        }
    }
}