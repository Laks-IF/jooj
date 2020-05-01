import React from "react"

import Connect from "../../connect"

const Loader = ({ loader }) => (
    
)

const mapStateToProps = ({ loader }, props) => ({
    ...loader,
    ...props
})

export default Connect(mapStateToProps)(Loader)