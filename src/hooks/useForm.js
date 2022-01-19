import { useState } from 'react'

const API_KEY = 'Qt5VEWo6mw-nV62pnelkuT5zHiD-unQRYNZKb8OlNSo'

export default function useForm({ initialValues }) {
	const [fields, setFields] = useState(initialValues)

	const handleChange = ({ target }) => {
		setFields({
			...fields,
			[target.name]: target.value,
		})
	}

	const submit = async (cb) => {
		const response = await fetch(
			`https://api.unsplash.com/search/photos?per_page=20&query=${fields.search}`,
			{
				headers: { Authorization: `Client-ID ${API_KEY}` },
			}
		)
		const data = await response.json()

		if (cb) {
			cb(data)
		} else {
			console.error('need callback in fuction submit')
		}
	}

	return [fields, handleChange, submit]
}
