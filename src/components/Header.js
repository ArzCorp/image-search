import React from 'react'
import useForm from '../hooks/useForm'

const values = {
	search: '',
}

export default function Header({ handleSubmit }) {
	const [fields, handleChange, submit] = useForm({
		initialValues: values,
	})

	return (
		<header>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					submit(handleSubmit)
				}}
			>
				<input
					value={fields.search}
					type="text"
					name="search"
					id="search"
					onChange={handleChange}
				/>
			</form>
		</header>
	)
}
