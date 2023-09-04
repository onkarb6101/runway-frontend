import React from 'react'
import { Mail } from "react-feather"

import Input from "@/components/Input"
import Button from "@/components/Button"

export default function Newsletter() {
	return (
		<div className="max-w-2xl m-4 sm:mx-auto rounded-md text-center border-2 border-gray-600 p-4 bg-gradient-to-r from-violet-50 to-indigo-50">
			<h2 className="text-4xl font-medium mb-3"> Contact Us</h2>
			<p className="text-xl text-gray-500">Our customer service team is available to assist with any inquiries or concerns you may have regarding our products or services.</p>
			<form className="max-w-xl flex mx-auto mt-8 mb-4">
				<Input
					icon={<Mail />}
					type="email" 
					placeholder="Your Email" 
					required
				/>
				<Button type="submit">Send</Button>
			</form>
		</div>
	)
}