import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ImgItem from './img-item';
import VideoItem from './video-item';

import imgFiles from '../inputs/img-files';
import videoFiles from '../inputs/video-files';

class ListItems extends Component {
	constructor(props) {
		super(props);

		switch (props.match.params.type) {
			case 'image':
				this.state = {
					do: imgFiles.do,
					doNot: imgFiles.doNot,
				};
				break;
			case 'video':
				this.state = {
					do: videoFiles.do,
					doNot: videoFiles.doNot
				};
				break;
			default:
				break;
		}
	}

	renderList(list) {
		return list.map((obj) => {
			if(!obj.img && !obj.video){
				return (<div>Some error occured in list!</div>);
			}

			if (obj.img) {
				return (
					<ImgItem key={obj.img} img={obj.img} description={obj.description} />
				);
			} else if (obj.video) {
				return (
					<VideoItem key={obj.video} video={obj.video} description={obj.description} />
				);
			}
		});
	}

	render() {
		if(!this.state || !this.state.do || !this.state.doNot) {
			return (<div>Some error occured!</div>);
		}

		return (
			<div>
				<Link to="/" className="btn btn-secondary">Home</Link>

				<div className="container-list" id="do">
					<h3> Imi place </h3>
					<ul className="list-group">
						{this.renderList(this.state.do)}
					</ul>
				</div>
				<div className="white-space"></div>
				<div className="container-list" id="dont">
					<h3> Nu prea imi place </h3>
					<ul className="list-group">
						{this.renderList(this.state.doNot)}
					</ul>
				</div>
			</div>
		);
	}
}



export default ListItems;
