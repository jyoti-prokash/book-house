import { json } from "react-router-dom";

const getStoredList = () => {
    const storeListStr = localStorage.getItem('read-list');
    if(storeListStr){
        const storeList = JSON.parse(storeListStr);
        return storeList;
    }
    else{
        return [];
    }
}

const addStoredList =(id) =>{
    const storeList =getStoredList();
    if(storeList.includes(id)){
        console.log('id already exist');
    }
    else{
        storeList.push(id);
        const storeListStr = JSON.stringify(storeList);
        localStorage.setItem('read-list', storeListStr);
    }
}

export {addStoredList,getStoredList}