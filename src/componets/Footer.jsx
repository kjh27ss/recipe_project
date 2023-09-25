import React from 'react'
import { PiBowlFoodThin } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='px-4 divide-y bg-gray-800 text-gray-100 py-5'>
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<a href="#" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-400">
                    <PiBowlFoodThin className="text-2xl text-white"/>
				</div>
				<span className="self-center text-2xl font-semibold">Brand name</span>
			</a>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracki uppercase dark:text-gray-50">Product</h3>
				<ul className="space-y-1">
					<li>
						<a href="#">Features</a>
					</li>
					<li>
						<a href="#">Integrations</a>
					</li>
					<li>
						<a href="#">Pricing</a>
					</li>
					<li>
						<a href="#">FAQ</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracki uppercase dark:text-gray-50">Company</h3>
				<ul className="space-y-1">
					<li>
						<a href="#">Privacy</a>
					</li>
					<li>
						<a href="#">Terms of Service</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase text-gray-50">Developers</h3>
				<ul className="space-y-1">
					<li>
						<a href="#">Public API</a>
					</li>
					<li>
						<a href="#">Documentation</a>
					</li>
					<li>
						<a href="#">Guides</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase text-gray-50">Social media</div>
				<div className="flex justify-start space-x-3">
					<a href="#" title="Facebook" className="flex items-center p-1">
						<FaFacebook className='text-2xl'/>
					</a>
					<a href="#" title="Twitter" className="flex items-center p-1">
						<FaTwitter className='text-2xl'/>
					</a>
					<a href="#" title="Instagram" className="flex items-center p-1">
                        <FaInstagram className='text-2xl'/>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center dark:text-gray-400">© 2023 Company Co. All rights reserved.</div>
    </footer>
  )
}

export default Footer