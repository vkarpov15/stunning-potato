module.exports = (content, { title }) => `
<!DOCTYPE html>
<html>
  <head>
    <title>JSReport: ${title}</title>

    <link rel="stylesheet" href="/website/style.css">
    <link rel="stylesheet" href="/website/github.css">
    <link href="https://fonts.googleapis.com/css?family=Play|Roboto" rel="stylesheet">

    <style>
      p {
        line-height: 1.5em;
      }
      hr {
        margin-top: 1em;
        margin-bottom: 1em;
      }

      a {
        color: #00386c;
      }

      .post {
        margin-bottom: 1em;
      }

      .post .post-image img {
        width: 200px;
        float: left;
      }

      .post h2 {
        margin-top: 0px;
      }

      .post .post-description {
        float: left;
        width: 765px;
        margin-left: 35px;
      }
    </style>
  </head>

  <body>
    <div id="container">
      <div class="header">
        <div class="brand">
          <img class="logo" src="/images/logo2.svg">
          <div class="brand-name">
            <a href="/">
              js.report
            </a>
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="nav-right" id="nav-container">
          <!-- Populated by nav.jsx -->
        </div>
      </div>

      <div id="content">
        ${content}
      </div>
    </div>

    <script src="/website/nav.js"></script>
  </body>
</html>
`;
