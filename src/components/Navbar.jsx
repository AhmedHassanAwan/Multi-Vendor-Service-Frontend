import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectIsLoggedIn, logout } from '../store/authSlice';
import { HiSearch, HiBell, HiMenu, HiChevronDown } from 'react-icons/hi';
import { FaCircleUser } from 'react-icons/fa6';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?search=${searchQuery}`);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[65px] bg-white border-b border-[#e4e5e7] z-50 px-4 md:px-8 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-bold text-[#1b4332]">
          ServiceHub.
        </Link>

        {/* Center: Search (Hidden on Mobile) */}
        <form onSubmit={handleSearch} className="hidden lg:flex items-center border border-[#dadbdd] rounded-lg h-10 w-[400px] overflow-hidden">
          <button type="submit" className="px-3 text-gray-500 hover:text-[#1DBF73] transition-colors">
            <HiSearch size={20} />
          </button>
          <input
            type="text"
            placeholder="What service are you looking for today?"
            className="flex-1 px-1 outline-none text-[14px] text-[#404145] placeholder:text-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-6">
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="hidden sm:block text-[15px] font-semibold text-[#404145] hover:text-[#1DBF73] transition-colors">
              Login
            </Link>
            <button
              onClick={() => navigate('/register')}
              className="bg-[#1b4332] text-white px-5 py-2 rounded-md font-bold text-[14px] hover:bg-[#19a463] transition-all"
            >
              Join
            </button>
          </>
        ) : (
          <div className="flex items-center gap-6">
            <Link to={user?.role === 'provider' ? '/dashboard/provider' : '/dashboard/customer'} className="text-[15px] font-semibold text-[#404145] hover:text-[#1DBF73] transition-colors">
              {user?.role === 'provider' ? 'Dashboard' : 'Orders'}
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 hover:bg-gray-100 p-1 rounded-full transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 overflow-hidden">
                  {user?.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-sm font-bold text-gray-600">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <HiChevronDown className={`text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-[#e4e5e7] rounded-lg shadow-xl py-2 z-50">
                  {user?.role === 'provider' ? (
                    <>
                      <Link to="/dashboard/provider" className="block px-4 py-2 text-[14px] text-[#404145] hover:bg-gray-50">Dashboard</Link>
                      <Link to="/services/my-services" className="block px-4 py-2 text-[14px] text-[#404145] hover:bg-gray-50">My Services</Link>
                      <Link to="/provider/profile" className="block px-4 py-2 text-[14px] text-[#404145] hover:bg-gray-50">Profile</Link>
                    </>
                  ) : (
                    <>
                      <Link to="/dashboard/customer" className="block px-4 py-2 text-[14px] text-[#404145] hover:bg-gray-50">My Orders</Link>
                      <Link to="/profile" className="block px-4 py-2 text-[14px] text-[#404145] hover:bg-gray-50">Profile</Link>
                    </>
                  )}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-[14px] text-red-500 font-semibold hover:bg-red-50 border-t border-gray-100 mt-1"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Icons */}
        <div className="hidden sm:flex items-center gap-4 text-gray-500">
          <HiBell size={22} className="cursor-pointer hover:text-[#1DBF73] transition-colors" />
          <HiMenu size={22} className="cursor-pointer hover:text-[#1DBF73] lg:hidden transition-colors" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
