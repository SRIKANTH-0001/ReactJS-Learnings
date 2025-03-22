import styles from './Mbutton.module.css'

function Mbutton(){
 return(
    <button className={styles.button}>Module Button</button>
    );
    //If we use module css files there is no chance for naming conflicts.Because,
    //It generates a unique class by using hash algorithm
}

export default Mbutton