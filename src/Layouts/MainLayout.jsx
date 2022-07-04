import React from "react"
import styled from "styled-components"
import {Outlet} from "react-router-dom";

const StyledMainLayout = styled.div`
  width: 100%;
  height: 100%;
`

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
                <StyledMainLayout>
                    <Outlet/>
                </StyledMainLayout>
        )
    }
}

export default MainLayout