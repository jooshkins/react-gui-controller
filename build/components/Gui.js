'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _controllerStyles = require('./JSXStyles/controllerStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gui = function (_Component) {
    _inherits(Gui, _Component);

    function Gui() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Gui);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Gui.__proto__ || Object.getPrototypeOf(Gui)).call.apply(_ref, [this].concat(args))), _this), _this.handleData = function (path, val) {
            var data = _this.props.data;
            data[path] = val;
            _this.props.onUpdate(data);
            _this.props.onChange(path);
        }, _this.renderChildren = function () {
            var _this$props = _this.props,
                children = _this$props.children,
                data = _this$props.data;

            return _react2.default.Children.toArray(children).map(function (child, i) {
                return _react2.default.cloneElement(child, {
                    key: i,
                    num: i,
                    theme: _this.props.theme,
                    updateData: _this.handleData,
                    data: data
                });
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    //  state = {
    //      pos: {
    //          x: 0,
    //          y: 0
    //      }
    //  };

    _createClass(Gui, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                {
                    id: 'controller-body',
                    className: 'jsx-' + _controllerStyles.controllerStyle.__scopedHash + ' ' + ((this.props.theme === 'dark' ? 'controller-body dark' : 'controller-body') || '')
                },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'jsx-' + _controllerStyles.controllerStyle.__scopedHash
                    },
                    this.renderChildren()
                ),
                _react2.default.createElement(_style2.default, {
                    styleId: _controllerStyles.controllerStyle.__scopedHash,
                    css: _controllerStyles.controllerStyle.__scoped
                })
            );
        }
    }]);

    return Gui;
}(_react.Component);

exports.default = Gui;


Gui.propTypes = {
    children: _propTypes2.default.array,
    data: _propTypes2.default.object,
    theme: _propTypes2.default.oneOf(['light', 'dark']),
    hide: _propTypes2.default.bool,
    onUpdate: _propTypes2.default.func.isRequired
};

Gui.defaultProps = {
    theme: 'light',
    hide: false
};