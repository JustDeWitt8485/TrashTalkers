import React from 'react'
import { UserContext } from '../providers/UserProvider'

const getDisplayName = (WrappedComponent) => {
    // redux auto titles components on the webpage 
    // for developer convenience
    // this function allows use to reanme the wrappedComponent 
    // to their originalName + withUser
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const withUser = Component => {
    const WrappedComponent = props => {
        return (
            <UserContext.Consumer>
                {/* whater Component you pass in, pass the props they might need
                but also pass in the user info (sharing state :D ) */}
                {user => <Component user={user} {...props} />}
            </UserContext.Consumer>
        )
    }
    WrappedComponent.displayName = `WithUser(${getDisplayName(WrappedComponent)})`
    return WrappedComponent
}

export default withUser