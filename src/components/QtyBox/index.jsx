import React, { useState } from 'react'
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';


const QtyBox = (props) => {

  const [qtyValue, setQtyValue] = useState(1)

  const plusQty = () => {
    setQtyValue(qtyValue + 1)
    props.handleSelectQty(qtyValue + 1)
  }

  const minusQty = () => {
    if (qtyValue === 1) {
      setQtyValue(1)
      props.handleSelectQty(1)
    }
    else {
      setQtyValue(qtyValue - 1)
      props.handleSelectQty(qtyValue - 1)
    }
  }

  return (
    <div className='qtyBox flex items-center relative'>
      <input type="number" name="/" id="/" className='w-full h-[43px] p-2 pl-4 focus:outline-none border border-[rgba(0,0,0,0.2)] ' Value={qtyValue} />

      <div className="flex flex-col items-center justify-between h-[42px] absolute top-0 right-0 z-50 ">
        <Button className='!min-w-[25px] w-[25px] !text-[#000] !h-[20px] !rounded-none hover:!bg-[#f1f1f1]' onClick={plusQty} >
          <FaAngleUp className='text-[12px] opacity-55' />
        </Button>
        <Button className='!min-w-[25px] w-[25px] !text-[#000] !h-[20px] !rounded-none hover:!bg-[#f1f1f1]' onClick={minusQty}>
          <FaAngleDown className='text-[12px] opacity-55' />
        </Button>
      </div>

    </div>
  )
}

export default QtyBox
