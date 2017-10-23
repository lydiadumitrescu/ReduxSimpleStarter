import * as React from 'react';
import { Component, Props } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import ListItem from './list-item';
import { SrcFilesType, SrcFilesTypePart } from '../reducers/src-files';

import { connect } from 'react-redux';

interface ListItemsType {
	type: string;
}

class ListItems extends Component<{ srcFiles: SrcFilesType, type: string }, any> {
	constructor(props: { srcFiles: SrcFilesType, type: string }) {
		super(props);
		function filterType(file: SrcFilesTypePart) {
			return file.type === props.type;
		}

		this.props.srcFiles.do = this.props.srcFiles.do.filter(filterType);
		this.props.srcFiles.doNot = this.props.srcFiles.doNot.filter(filterType);

	}

	renderList(list: SrcFilesTypePart[]) {
		return list.map((obj) => {
			if (!obj.src) {
				return (<div>Some error occured in list!</div>);
			}

			return (
				<ListItem key={obj.src} item={obj} />
			);
		});
	}

	renderListProps(srcFiles: SrcFilesType): JSX.Element[] {
		return Object.keys(srcFiles).map((key: keyof SrcFilesType) => {
			let obj = srcFiles[key];
			return (
				<div key={key}>
					<div className="container-list" id={key}>
						<h3> {key} </h3>
						<ul className="list-group">
							{this.renderList(obj)}
						</ul>
					</div>
					<div className="white-space"></div>
				</div>
			);
		});
	}

	render() {
		if (!this.props.srcFiles) {
			return (<div>Some error occured!</div>);
		}

		return (
			<div>
				<Link to="/" className="btn btn-secondary">Home</Link>
				{this.renderListProps(this.props.srcFiles)}
			</div>
		);
	}
}


function mapStateToProps(state: { srcFiles: SrcFilesType }, props: any): { srcFiles: SrcFilesType, type: string } {
	return {
		srcFiles: state.srcFiles,
		type: props.match.params.type,
	}
}

export default connect(mapStateToProps, {})(ListItems);

