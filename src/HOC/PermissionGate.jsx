import React, {useMemo} from 'react';
import {useSelector} from "react-redux";
import getPermission from "./getPermission";

const PermissionGate = (props) => {
    const userPermissions = useSelector(store => store.user.permissions);

    const permission = useMemo(() => getPermission(props.permissionName), [userPermissions])

    if (permission) return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        )

  return null;
}

export default PermissionGate;