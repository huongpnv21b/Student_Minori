import React from 'react';
import Login from './components/Login.js';
import AllProduct from './components/AllProduct.js';
import ProductList from './components/ProductList.js';
import ProductDetail from './components/ProductDetail.js';
import Add from './components/Add.js';
import Contact from './components/Contact.js';
import ContactList from './components/ContactList.js';
import Confirm from './components/Confirm.js';
import Introduce from './components/Introduce.js';
import SanPhamMoi from './components/SanPhamMoi.js';
import SanPhamHot from './components/SanPhamHot.js';
import SanPhamKhuyenMai from './components/SanPhamKhuyenMai.js';
import ProDetailAdmin from './components/ProDetailAdmin.js';
import NotFound from './components/NotFound.js';
import ContactDetail from './components/ContactDetail.js';
import Dang from './src/views/dangki/index'

const router = [
	{
		path : '/',
		exact : true,
		main : ()=> <AllProduct />
	},
	{
		path : '/dang-ki',
		exact : true,
		main : ()=> <Dang />
	}
];


export default router;