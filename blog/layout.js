module.exports = (content, post) => `
<!DOCTYPE html>
<html>
  <head>
    <title>${post.title}</title>

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
        <hr>
        <div id="disqus_thread"></div>
        <script>

        /**
        *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
        *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
        /*
        var disqus_config = function () {
        this.page.url = window.location.pathname;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = 'this-week-on-npm-20181116'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
        */
        (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://jsreport-1.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
        </script>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
      </div>
    </div>

    <script src="/website/nav.js"></script>
  </body>
</html>
`;
