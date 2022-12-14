import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useHospitals from '../../hooks/useHospitals';
import { Select } from 'react-select/dist/Select-95fb2b5c.cjs.prod';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [hospitals] = useHospitals();
    const [search, setSearch] = useState([]);
    /* ----------------------------------------------------------------*/
    /*                     Filter By Name Search                       */
    /* ----------------------------------------------------------------*/
    const handleSearchResult = (e) => {
        const searchText = e.target.value;
        if (e.target.value.length > 0) {
            const result = hospitals?.filter((course) =>
                course?.name?.toLowerCase().includes(searchText.toLowerCase())
            );
            setSearch(result);
        }else{
            setSearch("");
        }
    };


    //   console.log(arrivalData);

    const logout = () => {
        signOut(auth)
    }

    const menuitems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/hospitals'>Hospitals</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li>{user ? <button className="btn btn-ghost" onClick={logout}>Sign Out</button> :
            <Link to='/login'>Login</Link>}</li>
    </>
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded bg-base-100 w-52">
                        {menuitems}
                    </ul>
                </div>
                <img src="https://i.ibb.co/pWWt23R/Untitled-1.png" className='h-20' alt='' />
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal rounded space-x-2 p-0">
                    {menuitems}
                    <div class="form-control flex flex-col">
                        <div class="input-group">
                            <input onChange={handleSearchResult} type="text" placeholder="Search…" class="input input-bordered" />
                            <button className="btn" class="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                        <div className="flex flex-col space-y-2">

                            <div>
                                {/* suggest part of div */}
                                {search ? search?.length !== 0 && (
                                    <div
                                        id="suggested_item"
                                        className="bg-white rounded-lg w-5/6 lg:w-1/3 z-10 p-4 absolute"
                                    >
                                        {search
                                            ?.slice(0, 10)
                                            ?.map(({ name, index }) => (
                                                <div className="border-b-2 " key={index}>
                                                    <p
                                                        className="pt-3 divide-y hover:text-green-400 hover:cursor-pointer divide-dashed"
                                                    >
                                                        {name}
                                                    </p>
                                                </div>
                                            ))}
                                    </div>
                                )
                                    : ""}
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;