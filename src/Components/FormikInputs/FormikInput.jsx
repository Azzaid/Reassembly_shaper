import React, {useEffect, useMemo, useRef} from "react";
import {useField} from "formik";

const FormikInput = (props) => {
    const [field, meta, helpers] = useField(props.name);

    return (
        <div>
            <input {...props} value={field.value} onChange={field.onChange} onBlur={field.onBlur}/>
            {(meta.touched && meta.error) &&
                <div>{meta.error}</div>
            }
        </div>
    )
}

export default FormikInput