import React from 'react'
import "./style.css"


const SideBar = () => {
    return (
        <div className='sideBar'>
            <div className='sideHeader'>
                <div className='sideUser'>
                    <span class="material-symbols-outlined sideIcons">
                        account_circle
                    </span>
                </div>
                <div className='sideExtras'>
                    <span class="material-symbols-outlined sideIcons">
                        group
                    </span>
                    <span class="material-symbols-outlined sideIcons">
                        person_add
                    </span>
                    <span class="material-symbols-outlined sideIcons">
                        dark_mode
                    </span>
                </div>






            </div>
            <div className='sideSearch'>
                <span class="material-symbols-outlined sideIcons">
                    search
                </span>
                <input type="text" name="search-box" className='searchBox' placeholder='Search'/>
            </div>
            <div className='sideConvers'>main</div>

        </div>
    )
}

export default SideBar
