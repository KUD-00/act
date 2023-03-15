import React from 'react'

function DateFn({value, onChange, upperValidates}) {
    const placeholder = "yyyy-mm-dd"

    const dateValidate = () => {
        return true
    }

    const validates = {
        ...upperValidates,
        dateValidate
    }

    const props = {
        title: "日付", 
        value: value, 
        placeholder: placeholder, 
        onChange, 
        validates
    }

    return (
      <>
        <Txt {...props}></Txt>
      </>
    )
}

export default DateFn;