import sytles from './styles.module.scss';

const Header = ({title}) => {
    return (
    <div className={sytles.header}>
        <h1>{title}</h1>
    </div>
    )
}

export default Header;