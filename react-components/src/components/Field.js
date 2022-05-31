import React, {useState} from "react";
import PropTypes from "prop-types";

function Field({ classes, type, placeholder, callback }) {
    const [name, setName] = useState("");

    const blurHandler = (e) => {
        setName(e.target.value);
        console.log(name);
    }

    let object =  <input type={type} className={classes.input} placeholder={placeholder} onBlur={blurHandler} />
    if (type === "submit") {
        object = <input type={type} className={classes.input} value={placeholder} />
    }

    return (
        <div key={placeholder} className={classes.wrap}>
            {object}
        </div>
    );
}

Field.propTypes = {
    classes: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    callback: PropTypes.func
}

export default Field;
