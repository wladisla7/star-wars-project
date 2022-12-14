import { useLocation } from 'react-router-dom'
import img from './img/not-found.png';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    let location = useLocation();

    return (
        <div>
            <img className={styles.img} src={img} alt={"not found"} />
            <p className={styles.text}>No match for {location.pathname}</p>
        </div>
    )
}

export default NotFoundPage
