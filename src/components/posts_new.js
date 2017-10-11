import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
	renderField (field) {
		console.log(field.input)
		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					name={field.input.name}
					onBlur={field.input.onBlur}
					onChange={field.input.onChange}
					onDragStart={field.input.onDragStart}
					onDrop={field.input.onDrop}
					onFocus={field.input.onFocus}


					value={field.input.value}
				/>
			</div>
		);
	}
	// {...field.input}

	render() {
		return (
			<form>
				<Field
					name="title"
					label="Title"
					component={this.renderField}
					onChange={}
				/>
				<Field
					name="tags"
					label="Tags"
					component={this.renderField}
				/>
				<Field
					name="content"
					label="Post content"
					component={this.renderField}
				/>
				
			</form>
			
		);
	}
}

function validate(values) {
	const errors = {};

	if(!values.title) {
		errors.title = "Enter a title!"
	}

	
	if(!values.categories) {
		errors.categories = "Enter some categories!"
	}

	
	if(!values.content) {
		errors.content = "Enter some content!"
	}

	return errors;
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);
