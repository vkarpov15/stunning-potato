require('./nav.jsx');

const Error = require('./error.jsx');
const React = require('preact');
const http = require('./http');
const mitt = require('mitt').default;

const events$ = mitt();
const state$ = mitt();
let state = { loading: true, sortBy: 'downloads' };
const setState = _state => {
  state = _state;
  state$.emit('UPDATE', state);
};

class Top extends React.Component {
  constructor() {
    super();
    this.setState(state);
  }

  componentDidMount() {
    state$.on('UPDATE', state => this.setState(state));

    http.get(`/top?sortBy=${this.state.sortBy}`).
      then(res => setState(Object.assign({}, res, { loading: false }))).
      catch(err => setState(Object.assign({}, { err, loading: false })));
  }

  render() {
    if (this.state.err) {
      return <Error message={this.state.err.message}></Error>
    }

    return (
      <div>
        <h1>Top 100 Packages Sorted By {cap(this.state.sortBy)}</h1>
        <PackageList loading={this.state.loading} packages={this.state.packages} />
      </div>
    );
  }
}

function PackageList(props) {
  if (props.loading) {
    return <h1>Loading...</h1>;
  };

  return (
    <div>
      <div class="row">
        <div class="count">
          &nbsp;
        </div>
        <div class="column">
          Package
        </div>
        <div class="column">
          Dec 2018 Downloads
        </div>
        <div class="column">
          GitHub Stars
        </div>
      </div>
      {
        props.packages.map((pkg, i) => {
          return (
            <div class="row">
              <div class="count">
                {i + 1}
              </div>
              <div class="column">
                <a href={`https://npmjs.com/package/${pkg._id}`}>
                  {pkg._id}
                </a>
              </div>
              <div class="column">
                {formatNumber(pkg.downloadsLastMonth)}
              </div>
              <div class="column">
                <Github pkg={pkg} />
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

React.render(<Top></Top>, document.querySelector('#content'));

function cap(str) {
  if (!str) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.substr(1);
}

function Github({ pkg }) {
  if (pkg.github == null) {
    return <span></span>;
  }

  return (
    <a href={`https://github.com/${pkg.github.owner}/${pkg.github.repo}`}>
      {formatNumber(pkg.github.numStars)}
    </a>
  );
}

function formatNumber(num) {
  if (!num) {
    return '';
  }
  let str = num.toString();
  let ret = '';
  while (str.length > 3) {
    ret = ',' + str.substr(str.length - 3) + ret;
    str = str.substr(0, str.length - 3);
  }
  return str + ret;
}
