import Content from "../../layout/content"
import A from "../typography/anchor"
import Copy from "../typography/copy"

const Footer = () => {
  return (
    <footer>
      <Content py={[2, 4, 4]} data-scroll-section id="footer" bg="subtle">
        <Copy fontSize={["xxs", "xs"]}>
          Website designed with{" "}
          <A
            color="dark"
            fontSize={["xxs", "xs"]}
            target="_blank"
            href="https://www.figma.com/"
            rel="noopener noreferrer"
            light
            style={{ transform: "none", display: "inline-block" }}
            pt="3"
          >
            figma
          </A>
          , uses the{" "}
          <A
            color="dark"
            fontSize={["xxs", "xs"]}
            target="_blank"
            href="http://collletttivo.it/"
            rel="noopener noreferrer"
            light
            style={{ transform: "none", display: "inline-block" }}
            pt="3"
          >
            Porpora
          </A>{" "}
          and{" "}
          <A
            color="dark"
            fontSize={["xxs", "xs"]}
            target="_blank"
            href="http://collletttivo.it/"
            rel="noopener noreferrer"
            light
            style={{ transform: "none", display: "inline-block" }}
            pt="3"
          >
            Messapia
          </A>{" "}
          fonts
        </Copy>
      </Content>
    </footer>
  )
}

export default Footer
