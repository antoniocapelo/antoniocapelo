import Content from "../../layout/content"
import A from "../typography/anchor"
import Copy from "../typography/copy"

const Footer = () => {
  return (
    <footer>
      <Content py={[3, 4, 4]} data-scroll-section id="footer" bg="subtle">
        <Copy fontSize={["1.2rem", "xs"]} lineHeight="1.5">
          Website designed with{" "}
          <A
            color="dark"
            fontSize={["1.2rem", "xs"]}
            target="_blank"
            href="https://www.figma.com/"
            rel="noopener noreferrer"
            light
            style={{ transform: "none", display: "inline-block" }}
          >
            figma
          </A>
          , uses the{" "}
          <A
            color="dark"
            fontSize={["1.2rem", "xs"]}
            target="_blank"
            href="http://collletttivo.it/"
            rel="noopener noreferrer"
            light
            style={{ transform: "none", display: "inline-block" }}
          >
            Porpora
          </A>{" "}
          and{" "}
          <A
            color="dark"
            fontSize={["1.2rem", "xs"]}
            target="_blank"
            href="http://collletttivo.it/"
            rel="noopener noreferrer"
            light
            style={{ transform: "none", display: "inline-block" }}
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
