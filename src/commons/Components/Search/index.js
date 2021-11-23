import { useEffect, useState } from "react"

function Search(props) {

    const [value, setValue] = useState('');

    const search = (e) => {
        if(e.charCode === 13) {
            props.onEnterPress(value);
        }
    }

    return (
        <div className="search">
            <input className="box" placeholder="Search city..." value={value} onChange={(e) => setValue(e.target.value)} onKeyPress={(e) => search(e)}/>
        </div>
    )
}

export { Search }