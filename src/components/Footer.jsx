'use client';

import Link from "next/link";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-10">

      <div className="max-w-4xl mx-auto text-center space-y-6">

        {/* 🔹 Top Links */}
        <nav className="flex justify-center gap-6 text-sm font-medium">
          <Link href="/about" className="hover:text-primary transition">
            About us
          </Link>
          <Link href="/contact" className="hover:text-primary transition">
            Contact
          </Link>
          <Link href="/jobs" className="hover:text-primary transition">
            Jobs
          </Link>
          <Link href="/press" className="hover:text-primary transition">
            Press kit
          </Link>
        </nav>

        {/* 🔹 Social Icons */}
        <div className="flex justify-center gap-6 text-2xl">
          <a href="#" className="hover:text-blue-500 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-red-500 transition">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-blue-700 transition">
            <FaFacebookF />
          </a>
        </div>

        {/* 🔹 Bottom Links */}
        <nav className="flex justify-center gap-6 text-sm">
          <Link href="/terms" className="hover:text-primary transition">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:text-primary transition">
            Privacy Policy
          </Link>
        </nav>

        {/* 🔹 Contact Info */}
        <div className="text-sm text-gray-500">
          <p>Email: support@skillsphere.com</p>
          <p>Phone: +880 1234-XXXYYY</p>
        </div>

        {/* 🔹 Copyright */}
        <div className="text-sm text-gray-500">
          <p>Copyright © 2026 - All right reserved by SkillSphere</p>
        </div>

      </div>
    </footer>
  );
}