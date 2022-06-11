import React from 'react'

export default function Alert(props) {
  return (
    // if props.alert is defined or not null, then run code
    props.alert &&
    <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong>: {props.alert.msg}
        </div>
    </div>
  )
}
