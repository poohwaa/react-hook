import { useState } from "react";

const useTabs = (initTab, allTabs) => {
    const [currIndex, setCurrIndex] = useState(initTab);

    if(!allTabs || !Array.isArray(allTabs)) {
        return
    }
    
    return {
        currItem: allTabs[currIndex],
        changeItem: setCurrIndex
    }
}

export default useTabs;