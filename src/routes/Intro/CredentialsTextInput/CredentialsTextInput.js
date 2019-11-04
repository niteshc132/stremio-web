const React = require('react');
const PropTypes = require('prop-types');
const { TextInput } = require('stremio/common');

const CredentialsTextInput = React.forwardRef((props, ref) => {
    const onKeyDown = React.useCallback((event) => {
        if (typeof props.onKeyDown === 'function') {
            props.onKeyDown(event);
        }

        if (!event.nativeEvent.navigationPrevented) {
            event.stopPropagation();
            if (event.key === 'ArrowDown') {
                window.navigate('down');
            } else if (event.key === 'ArrowUp') {
                window.navigate('up');
            }
        }
    }, [props.onKeyDown]);
    return (
        <TextInput {...props} ref={ref} onKeyDown={onKeyDown} />
    );
});

CredentialsTextInput.displayName = 'CredentialsTextInput';

CredentialsTextInput.propTYpes = {
    onKeyDown: PropTypes.func
};

module.exports = CredentialsTextInput;
