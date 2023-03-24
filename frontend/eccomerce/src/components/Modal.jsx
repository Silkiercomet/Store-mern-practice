import React from 'react'

const Modal = ({handleModal}) => {
  return (
	<div id="filter-modal" className="modal">
		<div className="modal-content">
			<span className="close" onClick={handleModal}>&times;</span>
			<form>
				<label for="company">Company:</label>
				<input type="text" id="company" name="company" />

				<label for="name">Name:</label>
				<input type="text" id="name" name="name" />

				<label for="price">Price:</label>
				<input type="text" id="price" name="price" />

				<button type="submit">Filter</button>
			</form>
		</div>
	</div>
  )
}

export default Modal