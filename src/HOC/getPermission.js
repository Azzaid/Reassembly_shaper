const getPermission = (name) => {
    const userPermissions = store.getState().user.permissions

    return userPermissions.includes(name);
}

export default getPermission