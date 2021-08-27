import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';



const StyledButton = ({icon, action, type_button, ...rest}) => {
    return (
        <Button 
            className={(type_button == "red") ? styles.red_button : styles.blue_button}
            {...rest}
        >
            { icon && <FontAwesomeIcon icon={icon} className={action && "me-2"} /> } {action}
        </Button>
    )
}

export default StyledButton;