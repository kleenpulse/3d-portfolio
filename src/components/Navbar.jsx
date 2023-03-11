import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { NavContext } from "../App";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const { setLinkCliked } = useContext(NavContext);

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center sm:py-5 py-3 fixed top-0 z-[9999] bg-[rgba(0,0,0,0.16)] backdrop-blur-md`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to={"/"}
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img
						src={logo}
						alt="logo"
						className="w-[50px] h-[50px] rounded-full"
					/>
					<p className="text-white text-[18px] font-bold cursor-pointer flex">
						Vxrcel &nbsp;
						<span className="im-vercel liquid-time">|&nbsp; LiquidTime</span>
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title
									? "text-white newNav-link"
									: "text-secondary"
							} hover:text-white text-[18px] font-medium cursor-pointer `}
							onClick={() => {
								setActive(link.title);
								setLinkCliked(link.id !== "about" && false);
							}}
						>
							<a
								href={`#${link.id}`}
								id={link.id === "about" ? "about-link" : undefined}
							>
								{link.title}
							</a>
						</li>
					))}
				</ul>
				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => {
							setToggle(!toggle);
						}}
					/>
					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl nav-mobile`}
					>
						<ul className="list-none flex  flex-col gap-4 items-start justify-end ">
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.title
											? "text-white newNav-link"
											: "text-[#ffedff]"
									} font-poppins text-[16px] uppercase font-medium cursor-pointer `}
									onClick={() => {
										setActive(link.title);
										setToggle(!toggle);
									}}
								>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;