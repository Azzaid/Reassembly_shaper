import React from "react"
import styled from "styled-components"
import {Link, Outlet} from "react-router-dom";
import PermissionGate from "../../HOC/PermissionGate";

const StyledMainLayout = styled.div`
  width: 100%;
  height: 100%;
  
  .header {
    height: 40px;
    width: 100%;
  }
  
  .contentWrapper {
    height: calc(100vh - 40px);
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
                <StyledMainLayout>
                    <div className="header">
                        APP header
                        <div className={"navbar"}>
                            <PermissionGate permissionName={"seeLessonsList"}>
                                <Link to={"/lessonsList"}>t("Lessons list")</Link>
                            </PermissionGate>
                        </div>
                    </div>
                    <div className={"contentWrapper"}>
                        <Outlet/>
                    </div>
                </StyledMainLayout>
        )
    }
}

export default MainLayout