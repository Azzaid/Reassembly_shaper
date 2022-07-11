import React, {Component} from 'react';
import MainLayout from "Layouts/MainLayout/MainLayout";

class GlobalErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorFired: false,
            error: "",
            errorInfo:"",
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({errorFired: true, error, errorInfo});
    }

    render() {
        if (this.state.errorFired) {
            return <MainLayout>
                {this.state.error}
            </MainLayout>
        }


        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default GlobalErrorBoundary;