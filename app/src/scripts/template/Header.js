import React from 'react';
import classnames from 'classnames';

export default class Header {
	render() {
		return (
			<div className={classes}>{this.props.children}</div>
		);
	}
}
