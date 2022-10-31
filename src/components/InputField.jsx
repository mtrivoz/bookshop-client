import React from 'react'

const InputField = React.forwardRef(({children, type="text"}, ref) => 
(   
<div className="mb-6">
    <input
      ref={ref}
      type={type}
      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
      id="exampleFormControlInput2"
      placeholder={children}
    />
  </div>
  ))


export default InputField

