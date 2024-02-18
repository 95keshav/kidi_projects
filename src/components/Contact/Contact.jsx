import image from "../../assets/face.jpg";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <article className={styles.review}>
        <div className={styles.imgContainer}>
          <img src={image} alt="Keshav Sharma" className={styles.personImg} />
        </div>
        <h4 className={styles.author}>Keshav Sharma</h4>
        <p className="styles.job">MERN Developer</p>
        <p className={styles.info}>
          As a MERN (MongoDB, Express.js, React.js, Node.js) developer, I bring a holistic approach to web development, seamlessly integrating
          frontend and backend technologies to deliver robust and scalable applications. With expertise in building RESTful APIs using Node.js and
          Express.js, coupled with MongoDB flexible data storage capabilities, I ensure efficient data management and seamless server-client
          communication. On the frontend, I leverage React.js component-based architecture and state management to craft dynamic and interactive user
          interfaces, prioritizing usability and performance. With a keen eye for detail and a passion for innovation, I am dedicated to delivering
          exceptional digital experiences that meet the needs of clients and users alike.
        </p>
      </article>
    </>
  );
};

export default Contact;
