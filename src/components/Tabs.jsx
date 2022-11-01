import React, { useState } from 'react'

const Tabs = (props) => {
    const [currentContent, setCurrentContent] = useState();
    const handleTab = (e, value) => {
        console.log(value.content)
        setCurrentContent(value.content)
    };
    return (
        <div>
            {
                props.tabs.map((item, i) => 
                    <button key={i} onClick={(e) => handleTab(e, item)}>{item.label}</button>
                )
            }
            <p> {currentContent}</p>
        </div>
    )

}

export default Tabs