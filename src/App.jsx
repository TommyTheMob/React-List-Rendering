import React from "react";
import ObjList from "./objList/ObjList.jsx";
// import List from "./list/List.jsx";

const users = [
    {
        age: 21,
        name: 'Bob',
        id: 'id-0'
    },
    {
        age: 17,
        name: 'Tom',
        id: 'id-1'
    },
    {
        age: 18,
        name: 'Tom',
        id: 'id-2'
    },
    {
        age: 45,
        name: 'Sam',
        id: 'id-3'
    }
]

const App = () => {
    return (
        // <>
        //     <List numbers={[1, 2, 3, 4, 5]} />
        // </>

        <>
            <ObjList users={users} />
        </>
    )
}

export default App