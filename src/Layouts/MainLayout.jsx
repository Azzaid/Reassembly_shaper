import React from "react"
import styled from "styled-components"

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
                    {this.props.children}
                </StyledMainLayout>
        )
    }
}

export default MainLayout