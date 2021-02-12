import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { controllerStyle } from './JSXStyles/controllerStyles';

class Gui extends Component {
    handleData = (path, val) => {
        let data = this.props.data;
        data[path] = val;
        this.props.onUpdate(data);
        this.props.onChange(path);
    };

    renderChildren = () => {
        const { children, data } = this.props;
        return React.Children.toArray(children).map((child, i) => {
            return React.cloneElement(child, {
                key: i,
                num: i,
                theme: this.props.theme,
                updateData: this.handleData,
                data: data
            });
        });
    };

    render() {
        return (
            <div
                id="controller-body"
                className={
                    this.props.theme === 'dark'
                        ? 'controller-body dark'
                        : 'controller-body'
                }
            >
                <div>
                    {this.renderChildren()}
                </div>
                <style jsx>{controllerStyle}</style>
            </div>
        );
    }
}

export default Gui;

Gui.propTypes = {
    children: PropTypes.array,
    data: PropTypes.object,
    theme: PropTypes.oneOf(['light', 'dark']),
    hide: PropTypes.bool,
    onUpdate: PropTypes.func.isRequired
};

Gui.defaultProps = {
    theme: 'light',
    hide: false
};
