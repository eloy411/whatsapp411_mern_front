/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Message = (props)=>{

    console.log(props)

    return (
        <div className={props.value.error === 0?"message-ok":"message-bad"}>
            <p>{props.value.message}</p>
        </div>
    )
}

export default Message;