import React, { useState, useEffect } from 'react'

function API() {
    
    const [data, setData] = useState({
        data: [],
        total_pages: 0
    });
    let buttons = [];
    const getData = async (url) => {
      const response = await fetch(url);
      const newData = await response.json();
        setData(newData);
    

    }
    
    
    for (let i = 0; i < data.total_pages; i++) {
        console.log(i)
        buttons.push(<button key={i}>{i + 1}</button>)
    }  
    useEffect(() => {
        getData('https://reqres.in/api/users?page=2')
    }, [])



    return (
        <div>
            {buttons}
        </div>
    )
}


export default API;
