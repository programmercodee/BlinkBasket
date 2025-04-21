import React, { useEffect, useState } from 'react';
import '../../../App.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoCloseSharp } from "react-icons/io5";
import CategoryCollapse from '../../CategoryCollapse';
import { Link } from 'react-router-dom';


const CategoriesPanel = (props) => {


  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);

  };

  const [submenuIndex, setSubmenuIndex] = useState(null)

  const openSubmenu = (index) => {
    if (submenuIndex == index) {
      setSubmenuIndex(null)

    } else {

      setSubmenuIndex(index)
    }
  }

  const [inner_submenuIndex, setInner_submenuIndex] = useState(null)

  const openInner_submenu = (index) => {

    if (inner_submenuIndex == index) {
      setInner_submenuIndex(null)
    } else {

      setInner_submenuIndex(index)
    }

  }


  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" className="categoriPanel">

      <h3 className='p-3 text-[18px] font-[500] flex items-center justify-between'>Shop by Categories <IoCloseSharp onClick={toggleDrawer(false)} className='text-[18px] cursor-pointer' /></h3>

      {
        props?.data?.length !== 0 && <CategoryCollapse data={props?.data} />
      }
      <div className='px-10 mt-6 md:hidden block'>
        <Link to='/login'>
      <Button className='btn-org w-full'>Login</Button>
        </Link>
      </div>


    </Box>
  );

  return (
    <>
      {/* <Button className='!text-black !text-[13px]' onClick={toggleDrawer(true)}>Shop by Categories</Button> */}
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)} className='select-none'>
        {DrawerList}
      </Drawer>

    </>
  )
}

export default CategoriesPanel
