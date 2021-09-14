import classes from './CancelButton.module.css';
import Radium from 'radium';

const CancelButton = (props) => {
    //let myClasses = [classes.button, classes['my-text-button']];

    //return <button className={myClasses.join(' ')}>{props.title}</button>    

    const style = {
        backgroundColor: '#FFFF',
        color: '#FF0000',
        textAlign: 'center',
        cursor: 'pointer',
        border: '1px solid #ef5350',
        padding: '10px 25px',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        transitionDuration: '0.4s',
        ':hover': {
            backgroundColor: '#f44336',
            color: 'white'
        }
    }
    return <button style={style}>{props.title}</button>   
 }

export default Radium(CancelButton);