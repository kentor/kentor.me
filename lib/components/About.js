const Layout = require('./Layout');
const React = require('react');

const talks = [
  {
    author: 'Sebastian Markbage',
    name: 'Minimal API Surface Area',
    url: 'http://2014.jsconf.eu/speakers/sebastian-markbage-minimal-api-surface-area-learning-patterns-instead-of-frameworks.html',  // eslint-disable-line
  },
  {
    author: 'Rich Hickey',
    name: 'Simple Made Easy',
    url: 'https://www.infoq.com/presentations/Simple-Made-Easy',
  },
  {
    author: 'Sandi Metz',
    name: 'The Wrong Abstraction',
    url: 'http://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction',
  },
];

module.exports = () => (
  <Layout active="about">
    <section>
      <h1 className="fw5 mv4 lh-solid red">About</h1>
      <article className="f4 lh-copy serif">
        <p>
          I'm Kenneth. I'm a software engineer specializing in front-end
          engineering and currently working
          at <a href="http://www.rescale.com/">Rescale</a>.
          I have deep interests in architecturing simple and scalable systems,
          with a focus on developer experience.
        </p>
        <p>
          My programming philosophies:
        </p>
        <blockquote><em>
          Do not sacrifice greppability for the sake of being DRY.
        </em></blockquote>
        <blockquote><em>
          It is okay to repeat yourself until you've found a good abstraction.
        </em></blockquote>
        <p>
          These are the talks and articles that have inspired me the most as a
          programmer:
        </p>
        <ul>
          {talks.map(talk =>
            <li key={talk.name}>
              <a href={talk.url} target="_blank">{talk.name}</a>
              {' – '}
              {talk.author}
            </li>
          )}
        </ul>
      </article>
      <h2 className="fw5 mv4 lh-solid violet">About This Site</h2>
      <article className="f4 lh-copy serif">
        <p>
          This site is statically generated using React and Node.js. I wrote my
          own static site generator with live reloading. The source can be
          found <a href="https://github.com/kentor/kentor.github.io">here</a>.
        </p>
      </article>
    </section>
  </Layout>
);