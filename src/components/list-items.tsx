import * as React from 'react';
import { Component, Props } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import ListItem from './list-item';
import srcFiles, {SrcFilesType, SrcFilesTypePart} from '../inputs/src-files';

interface ListItemsType {
	type: string;
}

class ListItems extends Component<RouteComponentProps<ListItemsType>, SrcFilesType> {
	constructor(props: RouteComponentProps<ListItemsType>) {
		super(props);
		this.state = {
			do: srcFiles.do.filter(filterType),
			doNot:srcFiles.doNot.filter(filterType)
		}

		function filterType (file : SrcFilesTypePart) {
			return file.type === props.match.params.type;
		}

	}

	renderList(list: SrcFilesTypePart[]) {
		return list.map((obj) => {
			if(!obj.src){
				return (<div>Some error occured in list!</div>);
			} 

			//console.log(obj);

			return (
				<ListItem key={obj.src} item={obj} />
			);
		});
	}

	renderListProps(srcFiles: SrcFilesType): JSX.Element[] {
		return Object.keys(srcFiles).map((key: keyof SrcFilesType) => {
			let obj = srcFiles[key];
			return (
				<div>
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
		if(!this.state || !this.state.do || !this.state.doNot) {
			return (<div>Some error occured!</div>);
		}

		return (
			<div>
				<Link to="/" className="btn btn-secondary">Home</Link>
				{this.renderListProps(this.state)}
			</div>
		);
	}
}



export default ListItems;
