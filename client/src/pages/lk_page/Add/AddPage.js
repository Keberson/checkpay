import React, {useState} from "react";
import './add.css'
import HistoryWidget from "../HistoryWidget";
import AddWidget from "../AddWidget";

function AddPage() {
    const [isNeedRefresh, setIsNeedRefresh] = useState(false);

    return (
        <div className="main-wrapper">
            <div className="main__side">
                <AddWidget setIsNeedRefresh={setIsNeedRefresh}/>
            </div>
            <HistoryWidget isNeedRefresh={isNeedRefresh} setIsNeedRefresh={setIsNeedRefresh} page="add" />
        </div>
    );
}

export default AddPage;
