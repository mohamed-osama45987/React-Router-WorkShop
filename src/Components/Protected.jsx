

const Protected = ({ children, loggedIn }) => {





    if (!loggedIn) {
        return <h1>UnAuthorized</h1>
    }

    return children
}

export default Protected