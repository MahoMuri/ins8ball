export class Utilities {
  static getAnswer() {
    const possibleAnswers = [
      <p>
        It is <br /> certain
      </p>,
      <p>It is decidedly so</p>,
      <p>Without a doubt</p>,
      <p>
        Yes,
        <br />
        definitely{" "}
      </p>,
      <p>You may rely on it</p>,
      <p>
        As I see it,
        <br />
        yes
      </p>,
      <p>
        Outlook <br />
        good
      </p>,
      <p>Yes</p>,
      <p>Signs point to yes</p>,
      <p>Reply hazy try again</p>,
      <p>Ask again later</p>,
      <p>Better not tell you now</p>,
      <p>
        Cannot predict <br /> now
      </p>,
      <p>Concentrate and ask again</p>,
      <p>Don&apos;t count on it</p>,
      <p>
        My reply
        <br />
        is no
      </p>,
      <p>My sources say no</p>,
      <p>
        Most <br /> likely
      </p>,
      <p>Outlook not so good</p>,
      <p>
        Very
        <br />
        doubtful
      </p>,
    ];

    return possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
  }
}
