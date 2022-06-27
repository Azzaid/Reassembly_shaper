import React from "react";
import styled, {ThemeProvider} from "styled-components";

class GlobalThemeProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: "dark"
        }
    }

    themeSwitch() {
        this.setState((state) => {return {theme: state.theme === "dark" ? "light" : "dark"}});
    }



    render () {
        const theme = {
            missedColor: this.state.theme === "dark" ? "red" : "lightRed"
        }

        return (
                <ThemeProvider theme={theme}>
                    {this.props.children}
                </ThemeProvider>
            )
    }
}

export default GlobalThemeProvider