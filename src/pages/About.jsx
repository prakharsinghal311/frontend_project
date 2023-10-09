import { Container } from "react-bootstrap";
import bandImage from "../assets/bandImage.png";
import classes from "./About.module.css";

function AboutPage() {
  return (
    <>
      <Container>
        <center>
          <h1>ABOUT</h1>
        </center>
        &nbsp; &nbsp;
        <p>
          <img className={classes.img} src={bandImage} alt="" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          voluptatibus sit mollitia ut ipsa saepe. Minima possimus eaque,
          cupiditate vero architecto vel necessitatibus ducimus harum in
          deserunt, at blanditiis libero, molestiae quisquam laborum. Ipsum,
          expedita pariatur porro quia voluptates iusto dolores commodi aliquid
          error consectetur modi. A aspernatur tenetur repellendus illo. Earum
          cupiditate quo sequi incidunt in molestiae amet qui officia reiciendis
          impedit! Tenetur unde, obcaecati sint, quaerat saepe fugit non dolore
          recusandae quibusdam temporibus veritatis sit, delectus qui quisquam!
          Soluta rem, exercitationem velit molestiae tenetur quo corporis amet
          doloribus! Quis, perspiciatis velit impedit dolorum repudiandae
          sapiente blanditiis iusto amet quas minus nam laboriosam, cupiditate
          fugit similique natus, culpa a sed. Molestias adipisci ratione tenetur
          tempora maiores voluptatum minima, itaque officia optio. Reprehenderit
          ipsum incidunt voluptatum, non hic nihil qui dolorem unde iusto, atque
          soluta at consequatur necessitatibus quidem debitis provident adipisci
          corporis. Ullam rem autem nesciunt totam minus omnis soluta officiis
          magnam quia voluptas, sunt, incidunt libero placeat reiciendis ducimus
          voluptatum rerum laboriosam quas cupiditate tenetur neque sequi
          molestiae? Non, dolor. Autem ab obcaecati porro perspiciatis nobis
          dolore amet necessitatibus ut! Dicta veniam, dolorum commodi maxime
          aut totam consequatur sequi atque natus veritatis, nihil blanditiis
          hic, fugit eveniet laboriosam?
        </p>
      </Container>
    </>
  );
}

export default AboutPage;
