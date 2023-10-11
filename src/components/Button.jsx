import Button from 'react-bootstrap/Button'

import PropTypes from 'prop-types'

const ButtonComponent = ({ text, onClick, children }) => {
    const buttonContent = (
        <Button className={`button-home`} onClick={onClick} value={text}>
            {text || children}
        </Button>
    )

    return <div className="mb-2">{buttonContent}</div>
}

ButtonComponent.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    children: PropTypes.node,
}

export default ButtonComponent
