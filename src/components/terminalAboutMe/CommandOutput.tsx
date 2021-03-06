import { JsonLine, JsonKey, JsonLinkValue } from './Json';
import TerminalWord from './TerminalWord';
import VisuallyHidden from '../VisuallyHidden';

const CommandOutput = () => (
  <>
    <JsonLine hasIndentation={false}>
      <TerminalWord>{'{'}</TerminalWord>
    </JsonLine>

    <JsonLine labelledBy="github-desc">
      <VisuallyHidden id="github-desc">
        Github username: rafaelalmeidatk
      </VisuallyHidden>

      <JsonKey text="github" />
      <JsonLinkValue href="https://github.com/rafaelalmeidatk">
        github.com/rafaelalmeidatk
      </JsonLinkValue>
    </JsonLine>

    <JsonLine labelledBy="work-desc">
      <VisuallyHidden id="work-desc">
        Currently working as a Software Engineer at Hash
      </VisuallyHidden>

      <JsonKey text="work" />
      <TerminalWord>{'"Software Engineer @ '}</TerminalWord>
      <TerminalWord href="https://www.hash.com.br">{'Hash'}</TerminalWord>
      <TerminalWord>{'",'}</TerminalWord>
    </JsonLine>

    <JsonLine labelledBy="blog-desc">
      <VisuallyHidden id="blog-desc">
        Link to my blog: https://rafaelalmeidatk.com/blog
      </VisuallyHidden>

      <JsonKey text="blog" />
      <JsonLinkValue href="/blog" hasComma={false}>
        rafaelalmeidatk.com/blog
      </JsonLinkValue>
    </JsonLine>

    <JsonLine hasIndentation={false}>
      <TerminalWord>{'}'}</TerminalWord>
    </JsonLine>
  </>
);

export default CommandOutput;
