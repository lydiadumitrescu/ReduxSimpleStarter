import * as React from 'react';
import { Component } from 'react';
import { SrcFilesTypePart } from '../reducers/src-files';

interface IPropsListItem {
    item: SrcFilesTypePart
}

class ListItem extends Component<IPropsListItem, {}> {
    renderType(type: string, src: string) {
        if (type === 'image') {
            return (
                <img src={src} width="800" height="600" />
            );
        }

        if (type === 'video') {
            return (
                <iframe src={src} width="800" height="600" > </iframe>
            );
        }
    }

    render() {
        let item = this.props.item;

        return (
            <li
                key={item.src}
                className="list-group-item">
                {this.renderType(item.type, item.src)}
                <span><br />{item.description} </span>
            </li>
        );
    }
}

export default ListItem;