'use client';

import Link from 'next/link';

export default function Navbar() {
    const user = null; // 👉 replace with your auth system

    return (
        <div className="navbar bg-base-100 shadow-md px-6">
            <div className="dropdown md:hidden">
                <label tabIndex={0} className="btn btn-ghost">
                    ☰
                </label>
                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/courses">Courses</Link></li>
                    <li><Link href="/profile">My Profile</Link></li>
                </ul>
            </div>

            {/* 🔹 Logo */}
            <div className="flex-1">
                <Link href="/" className="text-x2 font-bold">
                    SkillSphere
                </Link>
            </div>

            {/* 🔹 Menu */}
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/courses">Courses</Link></li>
                    <li><Link href="/profile">My Profile</Link></li>
                </ul>
            </div>

            {/* 🔹 Right Side */}
            <div className="flex items-center gap-4">

                {user ? (
                    <>
                        {/* Avatar */}
                        <div className="avatar">
                            <div className="w-8 rounded-full">
                                <img src="https://i.pravatar.cc/150?img=3" />
                            </div>
                        </div>

                        {/* Logout */}
                        <button className="btn btn-sm">Logout</button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className="btn btn-sm">
                            Login
                        </Link>
                        <Link href="/register" className="btn btn-primary btn-sm">
                            Register
                        </Link>
                    </>
                )}

            </div>
        </div>
    );
}