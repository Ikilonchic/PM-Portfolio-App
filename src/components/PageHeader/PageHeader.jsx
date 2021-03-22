import styles from './PageHeader.module.scss';

const PageHeader = (props) => {
  return <div className={styles.container}>
    {props.children}
  </div>;
};

export default PageHeader;
