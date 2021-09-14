import classes from './AcceptButton.module.css';

const AcceptButton = (props) => {
    return <button className={classes.button}>{props.title}</button>
 }

export default AcceptButton;

// const AcceptButton = (props) => {
//      {/*return <button style={{color: 'red'}}>{props.title}</button>*/}
//      {/*return <button style={props.buttonStyle}>{props.title}</button>*/}

//      return <button className="button">{props.title}</button>
//  }

// export default AcceptButton;

// forma tradicional
// function AcceptButton({title}) {
//     return <h1>{title}</h1>
// }

// export default AcceptButton;

//ES6 y funciona de la misma manera
// const AcceptButton = (props) => {
//     return <h1>{props.title}</h1>
// }

// export default AcceptButton;
