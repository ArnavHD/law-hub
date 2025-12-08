const getStoredLawer = () =>{
    const storedLawerStr = localStorage.getItem("lawerList");

    if(storedLawerStr){
        const storedLawerData = JSON.parse(storedLawerStr);
        return storedLawerData;
    }
    else{
        return [];
    }
}

const addToStoreDB = (id) =>{
    const storedLawerData = getStoredLawer();

    if(storedLawerData.includes(id)){
        // alert("This is the data");
    }
    else{
        storedLawerData.push(id);
        const data = JSON.stringify(storedLawerData);
        console.log(data);
        localStorage.setItem("lawerList", data);
    }
}

const removeFromStoreDB = (id) => {
    const storedLawerData = getStoredLawer();   // get array of IDs

    const updatedList = storedLawerData.filter(item => item !== id); 
    // remove ONLY the matching ID

    localStorage.setItem("lawerList", JSON.stringify(updatedList));
};

export {addToStoreDB, getStoredLawer, removeFromStoreDB};