import React from 'react'
import '../../assets/styles/components.css'

function GoogleSearch() {
    return (
        <div>
            <h3 className="googleSearchText">Google Search</h3>
            <form className="googleSearch" method="GET" action="https://www.google.com/search" target="_blank">
                <input className="googleTextEnter" name="q" type="text" />
                <input className="googleSubmit" type="submit" />
            </form>
        </div>
    )
}

export default GoogleSearch