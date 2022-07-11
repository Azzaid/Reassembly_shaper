import React from "react"
import styled from "styled-components"
import {Outlet} from "react-router-dom";

const StyledExtraWideLayout = styled.div`
  width: 100%;
  height: 100%;
  
`

class ExtraWideLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <StyledExtraWideLayout>
                <Outlet/>
            </StyledExtraWideLayout>
        )
    }
}

export default ExtraWideLayout