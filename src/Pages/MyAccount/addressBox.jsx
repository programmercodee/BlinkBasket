import React, { useContext, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MyContext } from '../../App';

const ITEM_HEIGHT = 48;

const AddressBox = (props) => {
  const context = useContext(MyContext)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeAddress = (id) => {
    setAnchorEl(null);
    props.removeAddress(id)
  }

  const editAddress = (id) => {
    setAnchorEl(null);
    props.editAddress(id)
  }


  return (
    <div>
      <div className=" w-full relative border rounded-md border-dashed border-[rgba(0,0,0,0.2)] bg-[#f1f1f1] p-4">
        <span className='inline-block p-1 text-[12px] rounded-sm bg-[#ccc]'>{props?.address?.addressType}</span>
        <h4 className='flex items-center gap-4 font-[500] text'><span>{context?.userData?.name}</span> <span>+{props?.address?.mobile}</span></h4>
        <span className='text-[13px] block'>
          {
            props?.address?.address_line + " , " + props?.address?.city + " , " + props?.address?.state + " , " + props?.address?.pincode + " , " + props?.address?.country
          }
        </span>

        <div className="absolute top-2 right-2">
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <HiOutlineDotsVertical />
          </IconButton>

          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              },
            }}
          >

            <MenuItem onClick={() => editAddress(props?.address?._id)}>
              Edit
            </MenuItem>
            <MenuItem onClick={() => removeAddress(props?.address?._id)}>
              Delete
            </MenuItem>

          </Menu>

        </div>

      </div>

    </div>
  )
}

export default AddressBox
