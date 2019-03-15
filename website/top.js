/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const cfg = {
  root: 'http://localhost:4000',
  stripe: 'pk_test_CY6HxyQkOolO1B3h43MvkJE5',
  track: false,
  github: '0aaa1ef6344e70dd463c'
};

if (true) {
  Object.assign(cfg, __webpack_require__(5));
}

module.exports = Object.freeze(cfg);


/***/ }),
/* 1 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest;for(var o in s.open(n.method||"get",e,!0),n.headers)s.setRequestHeader(o,n.headers[o]);function u(){var e,n=[],t=[],r={};return s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(s,o,u){n.push(o=o.toLowerCase()),t.push([o,u]),r[o]=(e=r[o])?e+","+u:u}),{ok:2==(s.status/100|0),status:s.status,statusText:s.statusText,url:s.responseURL,clone:u,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},headers:{keys:function(){return n},entries:function(){return t},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}s.withCredentials="include"==n.credentials,s.onload=function(){t(u())},s.onerror=r,s.send(n.body||null)})});;
//# sourceMappingURL=unfetch.mjs.map


/***/ }),
/* 2 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
var VNode = function VNode() {};

var options = {};

var stack = [];

var EMPTY_CHILDREN = [];

function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p,
	    list = items;
	items = [];
	while (p = list.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {} else if (name === 'ref') {
		if (old) old(null);
		if (value) value(node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		try {
			node[name] = value == null ? '' : value;
		} catch (e) {}
		if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

var mounts = [];

var diffLevel = 0;

var isSvgMode = false;

var hydrating = false;

function flushMounts() {
	var c;
	while (c = mounts.pop()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	if (!diffLevel++) {
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	if (! --diffLevel) {
		hydrating = false;

		if (!componentRoot) flushMounts();
	}

	return ret;
}

function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	if (typeof vnode === 'string' || typeof vnode === 'number') {
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			}
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	} else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	diffAttributes(out, vnode.attributes, props);

	isSvgMode = prevSvgMode;

	return out;
}

function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			} else if (min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		unmountComponent(component);
	} else {
		if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

function diffAttributes(dom, attrs, old) {
	var name;

	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

var recyclerComponents = [];

function createComponent(Ctor, props, context) {
	var inst,
	    i = recyclerComponents.length;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	while (i--) {
		if (recyclerComponents[i].constructor === Ctor) {
			inst.nextBase = recyclerComponents[i].nextBase;
			recyclerComponents.splice(i, 1);
			return inst;
		}
	}

	return inst;
}

function doRender(props, state, context) {
	return this.constructor(props, context);
}

function setComponentProps(component, props, renderMode, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	component.__ref = props.ref;
	component.__key = props.key;
	delete props.ref;
	delete props.key;

	if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
		if (!component.base || mountAll) {
			if (component.componentWillMount) component.componentWillMount();
		} else if (component.componentWillReceiveProps) {
			component.componentWillReceiveProps(props, context);
		}
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (renderMode !== 0) {
		if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	if (component.__ref) component.__ref(component);
}

function renderComponent(component, renderMode, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    snapshot = previousContext,
	    rendered,
	    inst,
	    cbase;

	if (component.constructor.getDerivedStateFromProps) {
		state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
		component.state = state;
	}

	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		if (isUpdate && component.getSnapshotBeforeUpdate) {
			snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || renderMode === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.unshift(component);
	} else if (!skip) {

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, snapshot);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	while (component._renderCallbacks.length) {
		component._renderCallbacks.pop().call(component);
	}if (!diffLevel && !isChild) flushMounts();
}

function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;

			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

		component.nextBase = base;

		removeNode(base);
		recyclerComponents.push(component);

		removeChildren(base);
	}

	if (component.__ref) component.__ref(null);
}

function Component(props, context) {
	this._dirty = true;

	this.context = context;

	this.props = props;

	this.state = this.state || {};

	this._renderCallbacks = [];
}

extend(Component.prototype, {
	setState: function setState(state, callback) {
		if (!this.prevState) this.prevState = this.state;
		this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
		if (callback) this._renderCallbacks.push(callback);
		enqueueRender(this);
	},
	forceUpdate: function forceUpdate(callback) {
		if (callback) this._renderCallbacks.push(callback);
		renderComponent(this, 2);
	},
	render: function render() {}
});

function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};

/* harmony default export */ __webpack_exports__["default"] = (preact);

//# sourceMappingURL=preact.mjs.map


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);

const root = __webpack_require__(0).root;
console.log(root);

exports.get = function(url) {
  const opts = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: window.localStorage.getItem('token')
    }
  };
  return fetch(`${root}${url}`, opts).then(res => res.json()).then(res => {
    if (res.error != null) {
      throw new Error(res.error);
    }
    return res;
  });
};

exports.put = function(url, data) {
  const opts = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: window.localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  };
  return fetch(`${root}${url}`, opts).then(res => res.json());
};

window.get = exports.get;
window.put = exports.put;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(2);

const http = __webpack_require__(3);

const config = __webpack_require__(0);

const root = config.root;
console.log(root);

if (config.track) {
  const client = new __webpack_require__(6).default(config.keen);
  client.recordEvent('pageView', {
    path: window.location.pathname
  });
}

class Nav extends React.Component {
  componentDidMount() {
    if (!window.localStorage.getItem('token')) {
      this.setState({
        loading: false,
        customer: null
      });
      return;
    }

    this.setState({
      loading: true
    });
    http.get('/me').then(res => {
      this.setState({
        loading: false,
        customer: res.customer
      });
    }).catch(() => {
      this.setState({
        loading: false,
        customer: null
      });
    });
  }

  login() {
    if (this.state.loading) {
      return React.createElement("span", null);
    }

    if (this.state.customer != null) {
      return React.createElement("a", {
        href: "/dashboard"
      }, "Dashboard");
    }

    return React.createElement("a", {
      href: "https://slack.com/oauth/authorize?scope=identity.basic+identity.email&client_id=80341368871.427593509574"
    }, React.createElement("img", {
      alt: "Sign in with Slack",
      height: "30",
      width: "129",
      src: "https://platform.slack-edge.com/img/sign_in_with_slack.png",
      srcset: "https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
    }));
  }

  render() {
    return React.createElement("div", null, React.createElement("div", {
      class: "nav-link"
    }, React.createElement("a", {
      href: "/feed"
    }, "Feed")), React.createElement("div", {
      class: "nav-link"
    }, React.createElement("a", {
      href: "/slack"
    }, "Slack")), React.createElement("div", {
      class: "nav-link"
    }, React.createElement("a", {
      href: "https://tinyletter.com/js-report"
    }, "Newsletter")), React.createElement("div", {
      class: "nav-link"
    }, React.createElement("a", {
      href: "/blog"
    }, "Blog")), React.createElement("div", {
      class: "nav-link"
    }, this.login()), React.createElement("div", {
      style: "clear: both"
    }));
  }

}

React.render(React.createElement(Nav, null), document.querySelector('#nav-container'));

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  root: 'https://s5hqb41ya4.execute-api.us-east-1.amazonaws.com/prod',
  stripe: 'pk_live_CYJYFTKEJ340Qau5PP7fXWgk',
  track: true,
  keen: {
    projectId: '5be9abb3c9e77c0001a1284e',
    writeKey: 'B508BEFBC7E6B252D3778964EED489E58B25074403CED03ADC9FB95967B5D427100BDA8EE864E31B9D2D4897BE35F1D180EA1EFFD05BA82121FA8E50128151FD00894E3F21C8DCEEECE5752242A09C9F36F59FBFFBFB1258DB7180FC9F9E85E2'
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = each;

function each(o, cb, s){
  var n;
  if (!o){
    return 0;
  }
  s = !s ? o : s;
  if (o instanceof Array){
    // Indexed arrays, needed for Safari
    for (n=0; n<o.length; n++) {
      if (cb.call(s, o[n], n, o) === false){
        return 0;
      }
    }
  } else {
    // Hashtables
    for (n in o){
      if (o.hasOwnProperty(n)) {
        if (cb.call(s, o[n], n, o) === false){
          return 0;
        }
      }
    }
  }
  return 1;
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = extend;

function extend(target){
  for (var i = 1; i < arguments.length; i++) {
    for (var prop in arguments[i]){
      target[prop] = arguments[i][prop];
    }
  }
  return target;
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);



var globalNS = (function() {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('unable to locate global object');
})();

if (!globalNS.Promise) {
  globalNS.Promise = _index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
} else if (!globalNS.Promise.prototype['finally']) {
  globalNS.Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var configDefault = exports.configDefault = {

  // defer events - queue
  // https://github.com/keen/keen-tracking.js/blob/master/docs/defer-events.md
  queue: {
    capacity: 5000,
    interval: 15
  },

  // connection problems - retry request
  retry: {
    limit: 10,
    initialDelay: 200,
    retryOnResponseStatuses: [408, 500, 502, 503, 504]
  },

  unique: false, // record only unique events?
  // if so - store unique events hashes to compare
  cache: {
    /*
      storage: 'indexeddb', // uncomment for persistence
    */
    dbName: 'keenTracking', // indexedDB name
    dbCollectionName: 'events',
    dbCollectionKey: 'hash',

    /*
      hashingMethod: 'md5', // if undefined - store as stringified JSON
    */
    maxAge: 60 * 1000 // store for 1 minute
  }
};

exports.default = configDefault;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status === undefined ? 200 : options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText;

        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keenCore = __webpack_require__(41);

var _keenCore2 = _interopRequireDefault(_keenCore);

var _each = __webpack_require__(0);

var _each2 = _interopRequireDefault(_each);

var _extend = __webpack_require__(1);

var _extend2 = _interopRequireDefault(_extend);

var _queue = __webpack_require__(16);

var _package = __webpack_require__(15);

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_keenCore2.default.helpers = _keenCore2.default.helpers || {};

// Install internal queue
_keenCore2.default.on('client', function (client) {
  client.extensions = {
    events: [],
    collections: {}
  };
  client.queue = (0, _queue.queue)(client.config.queue);
  client.queue.on('flush', function () {
    client.recordDeferredEvents();
  });
});

// Accessors
_keenCore2.default.prototype.writeKey = function (str) {
  if (!arguments.length) return this.config.writeKey;
  this.config.writeKey = str ? String(str) : null;
  return this;
};

_keenCore2.default.prototype.referrerPolicy = function (str) {
  if (!arguments.length) return this.config.referrerPolicy;
  this.config.referrerPolicy = str ? String(str) : null;
  return this;
};

// DEPRECATED
_keenCore2.default.prototype.setGlobalProperties = function (props) {
  _keenCore2.default.log('This method has been removed. Check out #extendEvents: https://github.com/keen/keen-tracking.js#extend-events');
  return this;
};

_keenCore2.default.version = _package2.default.version;

exports.default = _keenCore2.default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDomNodePath = getDomNodePath;
function getDomNodePath(el) {
  if (!el.nodeName) return '';

  var stack = [];
  while (el.parentNode != null) {
    // console.log(el.nodeName);
    var sibCount = 0;
    var sibIndex = 0;
    for (var i = 0; i < el.parentNode.childNodes.length; i++) {
      var sib = el.parentNode.childNodes[i];
      if (sib.nodeName == el.nodeName) {
        if (sib === el) {
          sibIndex = sibCount;
        }
        sibCount++;
      }
    }
    if (el.hasAttribute('id') && el.id != '') {
      stack.unshift(el.nodeName.toLowerCase() + '#' + el.id);
    } else if (sibCount > 1) {
      stack.unshift(el.nodeName.toLowerCase() + ':eq(' + sibIndex + ')');
    } else {
      stack.unshift(el.nodeName.toLowerCase());
    }
    el = el.parentNode;
  }

  return stack.slice(1).join(' > ');
}

// via: http://stackoverflow.com/a/16742828/2511985

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWindowProfile = getWindowProfile;
function getWindowProfile() {
  var body, html, output;

  if ('undefined' == typeof document) return {};

  body = document.body;
  html = document.documentElement;

  output = {
    'height': 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight,
    'width': 'innerWidth' in window ? window.innerWidth : document.documentElement.offsetWidth,
    'scrollHeight': Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) || null
  };

  if (window.screen) {
    output.ratio = {
      'height': window.screen.availHeight ? parseFloat((window.innerHeight / window.screen.availHeight).toFixed(2)) : null,
      'width': window.screen.availWidth ? parseFloat((window.innerWidth / window.screen.availWidth).toFixed(2)) : null
    };
  }

  return output;
}

/*
  Notes:
    document.documentElement.offsetHeight/Width is a workaround for IE8 and below, where window.innerHeight/Width is undefined
*/

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScreenProfile = getScreenProfile;
function getScreenProfile() {
  var keys, output;

  if ('undefined' == typeof window || !window.screen) return {};

  keys = ['height', 'width', 'colorDepth', 'pixelDepth', 'availHeight', 'availWidth'];
  output = {};

  for (var i = 0; i < keys.length; i++) {
    output[keys[i]] = window.screen[keys[i]] ? window.screen[keys[i]] : null;
  }

  output.orientation = {
    'angle': window.screen.orientation ? window.screen.orientation['angle'] : 0,
    'type': window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
  };

  return output;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MD5 = exports.MD5 = function MD5(d) {
  var result = M(V(Y(X(d), 8 * d.length)));return result.toLowerCase();
};function M(d) {
  for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++) {
    _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
  }return f;
}function X(d) {
  for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) {
    _[m] = 0;
  }for (m = 0; m < 8 * d.length; m += 8) {
    _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
  }return _;
}function V(d) {
  for (var _ = "", m = 0; m < 32 * d.length; m += 8) {
    _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
  }return _;
}function Y(d, _) {
  d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
    var h = m,
        t = f,
        g = r,
        e = i;f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e);
  }return Array(m, f, r, i);
}function md5_cmn(d, _, m, f, r, i) {
  return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m);
}function md5_ff(d, _, m, f, r, i, n) {
  return md5_cmn(_ & m | ~_ & f, d, _, r, i, n);
}function md5_gg(d, _, m, f, r, i, n) {
  return md5_cmn(_ & f | m & ~f, d, _, r, i, n);
}function md5_hh(d, _, m, f, r, i, n) {
  return md5_cmn(_ ^ m ^ f, d, _, r, i, n);
}function md5_ii(d, _, m, f, r, i, n) {
  return md5_cmn(m ^ (_ | ~f), d, _, r, i, n);
}function safe_add(d, _) {
  var m = (65535 & d) + (65535 & _);return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m;
}function bit_rol(d, _) {
  return d << _ | d >>> 32 - _;
}

exports.default = MD5;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var deepExtend = exports.deepExtend = function deepExtend(target) {
  for (var i = 1; i < arguments.length; i++) {
    // Copy unique items from incoming array
    if (target instanceof Array && arguments[i] instanceof Array) {
      for (var j = 0; j < arguments[i].length; j++) {
        if (target.indexOf(arguments[i][j]) < 0) {
          target.push(arguments[i][j]);
        }
      }
    }
    // Blend objects
    else {
        for (var prop in arguments[i]) {
          // Recurse when both contain objects of same name
          // and incoming is not a null object
          if (typeof target[prop] !== 'undefined' && _typeof(target[prop]) === 'object' && _typeof(arguments[i][prop]) === 'object' && arguments[i][prop] !== null) {
            deepExtend(target[prop], clone(arguments[i][prop]));
          }
          // Otherwise just copy it over...
          else if (arguments[i][prop] !== undefined && typeof arguments[i][prop] !== 'function') {
              target[prop] = clone(arguments[i][prop]);
            }
        }
      }
  }
  return target;
};

function clone(input) {
  return JSON.parse(JSON.stringify(input));
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.extendEvent = extendEvent;
exports.extendEvents = extendEvents;
exports.getExtendedEventBody = getExtendedEventBody;

var _deepExtend = __webpack_require__(13);

var _each = __webpack_require__(0);

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extendEvent(eventCollection, eventModifier) {
  if (arguments.length !== 2 || typeof eventCollection !== 'string' || 'object' !== (typeof eventModifier === 'undefined' ? 'undefined' : _typeof(eventModifier)) && 'function' !== typeof eventModifier) {
    handleValidationError.call(this, 'Incorrect arguments provided to #extendEvent method');
    return;
  }
  this.extensions.collections[eventCollection] = this.extensions.collections[eventCollection] || [];
  this.extensions.collections[eventCollection].push(eventModifier);
  this.emit('extendEvent', eventCollection, eventModifier);
  return this;
}

function extendEvents(eventsModifier) {
  if (arguments.length !== 1 || 'object' !== (typeof eventsModifier === 'undefined' ? 'undefined' : _typeof(eventsModifier)) && 'function' !== typeof eventsModifier) {
    handleValidationError.call(this, 'Incorrect arguments provided to #extendEvents method');
    return;
  }
  this.extensions.events.push(eventsModifier);
  this.emit('extendEvents', eventsModifier);
  return this;
}

function handleValidationError(message) {
  this.emit('error', 'Event(s) not extended: ' + message);
}

function getExtendedEventBody(result, queue) {
  if (queue && queue.length > 0) {
    (0, _each2.default)(queue, function (eventModifier, i) {
      var modifierResult = typeof eventModifier === 'function' ? eventModifier() : eventModifier;
      (0, _deepExtend.deepExtend)(result, modifierResult);
    });
  }
  return result;
}

/***/ }),
/* 15 */
/***/ (function(module) {

module.exports = {"name":"keen-tracking","version":"4.0.14","description":"Track events - custom user actions, clicks, pageviews, purchases.","main":"dist/node/keen-tracking.js","browser":"dist/keen-tracking.js","repository":{"type":"git","url":"https://github.com/keen/keen-tracking.js.git"},"scripts":{"start":"NODE_ENV=development webpack-dev-server","test":"NODE_ENV=test jest && npm run test:node","test:node":"NODE_ENV=test TEST_ENV=node jest","test:watch":"NODE_ENV=test jest --watch","test:node:watch":"NODE_ENV=test TEST_ENV=node jest --watch","build":"NODE_ENV=production webpack -p && NODE_ENV=production OPTIMIZE_MINIMIZE=1 webpack -p && npm run build:node","build:node":"TARGET=node NODE_ENV=production webpack -p","profile":"webpack --profile --json > stats.json","analyze":"webpack-bundle-analyzer stats.json /dist","version":"npm run build && npm run test && git add .","postversion":"git push && git push --tags","demo":"node ./test/demo/index.node.js"},"bugs":"https://github.com/keen/keen-tracking.js/issues","author":"Keen IO <team@keen.io> (https://keen.io/)","homepage":"https://keen.io","keywords":["Tracking","Tracker","Event Tracker","Event tracking","Track events","Page tracking","User tracking","Analytics event tracking","Analytics events","Analytics tracking","Custom events","Analytics","Stats","Statistics","Monitoring","Metrics","Pageviews","Segmentation","Funnel","Conversion","Log","Logger","Logging","Javascript events","Universal tracking","Click analytics"],"contributors":["Dustin Larimer <dustin@keen.io> (https://github.com/dustinlarimer)","Eric Anderson <eric@keen.io> (https://github.com/aroc)","Joe Wegner <joe@keen.io> (http://www.wegnerdesign.com)","Alex Kleissner <alex@keen.io> (https://github.com/hex337)","Adam Kasprowicz <adam.kasprowicz@keen.io> (https://github.com/adamkasprowicz)"],"license":"MIT","dependencies":{"component-emitter":"^1.2.0","js-cookie":"2.1.0","keen-core":"^0.1.3","promise-polyfill":"^8.0.0","whatwg-fetch":"^2.0.4"},"devDependencies":{"babel-core":"^6.26.3","babel-jest":"^23.0.1","babel-loader":"^7.1.5","babel-plugin-transform-es2015-modules-commonjs":"^6.26.2","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-polyfill":"^6.26.0","babel-preset-env":"^1.7.0","babel-preset-es2015":"^6.24.1","babel-preset-stage-0":"^6.24.1","eslint":"^4.19.1","eslint-config-airbnb":"^16.1.0","eslint-loader":"^2.0.0","eslint-plugin-import":"^2.11.0","eslint-plugin-jsx-a11y":"^6.0.3","html-loader":"^0.5.5","html-webpack-plugin":"^3.2.0","jest":"^22.4.3","jest-fetch-mock":"^1.6.5","merge":"^1.2.1","nock":"^9.2.6","regenerator-runtime":"^0.11.1","replace-in-file":"^3.4.0","url-parse":"^1.4.3","webpack":"^4.5.0","webpack-bundle-analyzer":"^2.11.1","webpack-cli":"^2.0.13","webpack-dev-server":"^3.1.1","xhr-mock":"^2.3.2"}};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.queue = queue;

var _componentEmitter = __webpack_require__(7);

var _componentEmitter2 = _interopRequireDefault(_componentEmitter);

var _configDefault = __webpack_require__(3);

var _configDefault2 = _interopRequireDefault(_configDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function queue() {
  var configQueue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (this instanceof queue === false) {
    return new queue(configQueue);
  }
  this.capacity = 0;
  this.config = _extends({}, _configDefault2.default.queue, configQueue);
  this.events = {
    // "collection-1": [],
    // "collection-2": []
  };
  this.interval = 0;
  this.timer = null;
  return this;
}

(0, _componentEmitter2.default)(queue.prototype);

queue.prototype.check = function () {
  if (shouldFlushQueue(this)) {
    this.flush();
  }
  if (this.config.interval === 0 || this.capacity === 0) {
    this.pause();
  }
  return this;
};

queue.prototype.flush = function () {
  this.emit('flush');
  this.interval = 0;
  return this;
};

queue.prototype.pause = function () {
  if (this.timer) {
    clearInterval(this.timer);
    this.timer = null;
  }
  return this;
};

queue.prototype.start = function () {
  var self = this;
  self.pause();
  self.timer = setInterval(function () {
    self.interval++;
    self.check();
  }, 1000);
  return self;
};

function shouldFlushQueue(props) {
  if (props.capacity > 0 && props.interval >= props.config.interval) {
    return true;
  } else if (props.capacity >= props.config.capacity) {
    return true;
  }
  return false;
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Promise);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36).setImmediate))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timer = timer;
function timer(num) {
  if (this instanceof timer === false) {
    return new timer(num);
  }
  this.count = num || 0;
  return this;
}

timer.prototype.start = function () {
  var self = this;
  this.pause();
  this.interval = setInterval(function () {
    self.count++;
  }, 1000);
  return this;
};

timer.prototype.pause = function () {
  clearInterval(this.interval);
  return this;
};

timer.prototype.value = function () {
  return this.count;
};

timer.prototype.clear = function () {
  this.count = 0;
  return this;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.serializeForm = serializeForm;
/*
  This is a modified copy of https://github.com/defunctzombie/form-serialize/ v0.7.1
  Includes a new configuration option:
    * ignoreTypes - Array, Default: [], Example: [ 'password' ]
*/

// types which indicate a submit action and are not successful controls
// these will be ignored
var k_r_submitter = /^(?:submit|button|image|reset|file)$/i;

// node names which could be successful controls
var k_r_success_contrls = /^(?:input|select|textarea|keygen)/i;

// Matches bracket notation.
var brackets = /(\[[^\[\]]*\])/g;

// serializes form fields
// @param form MUST be an HTMLForm element
// @param options is an optional argument to configure the serialization. Default output
// with no options specified is a url encoded string
//    - hash: [true | false] Configure the output type. If true, the output will
//    be a js object.
//    - serializer: [function] Optional serializer function to override the default one.
//    The function takes 3 arguments (result, key, value) and should return new result
//    hash and url encoded str serializers are provided with this module
//    - disabled: [true | false]. If true serialize disabled fields.
//    - empty: [true | false]. If true serialize empty fields
function serializeForm(form, options) {
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) != 'object') {
    options = { hash: !!options };
  } else if (options.hash === undefined) {
    options.hash = true;
  }

  var result = options.hash ? {} : '';
  var serializer = options.serializer || (options.hash ? hash_serializer : str_serialize);

  var elements = form && form.elements ? form.elements : [];

  // Object store each radio and set if it's empty or not
  var radio_store = Object.create(null);

  for (var i = 0; i < elements.length; ++i) {
    var element = elements[i];

    // NEW: Skip ignored field types
    if (options.ignoreTypes && options.ignoreTypes.indexOf(element.type) > -1) {
      continue;
    }
    // ingore disabled fields
    if (!options.disabled && element.disabled || !element.name) {
      continue;
    }
    // ignore anyhting that is not considered a success field
    if (!k_r_success_contrls.test(element.nodeName) || k_r_submitter.test(element.type)) {
      continue;
    }

    var key = element.name;
    var val = element.value;

    // we can't just use element.value for checkboxes cause some browsers lie to us
    // they say "on" for value when the box isn't checked
    if ((element.type === 'checkbox' || element.type === 'radio') && !element.checked) {
      val = undefined;
    }

    // If we want empty elements
    if (options.empty) {
      if (element.type === 'checkbox' && !element.checked) {
        val = '';
      }

      // for radio
      if (element.type === 'radio') {
        if (!radio_store[element.name] && !element.checked) {
          radio_store[element.name] = false;
        } else if (element.checked) {
          radio_store[element.name] = true;
        }
      }

      // if options empty is true, continue only if its radio
      if (val == undefined && element.type == 'radio') {
        continue;
      }
    } else {
      // value-less fields are ignored unless options.empty is true
      if (!val) {
        continue;
      }
    }

    // multi select boxes
    if (element.type === 'select-multiple') {
      val = [];

      var selectOptions = element.options;
      var isSelectedOptions = false;
      for (var j = 0; j < selectOptions.length; ++j) {
        var option = selectOptions[j];
        var allowedEmpty = options.empty && !option.value;
        var hasValue = option.value || allowedEmpty;
        if (option.selected && hasValue) {
          isSelectedOptions = true;

          // If using a hash serializer be sure to add the
          // correct notation for an array in the multi-select
          // context. Here the name attribute on the select element
          // might be missing the trailing bracket pair. Both names
          // "foo" and "foo[]" should be arrays.
          if (options.hash && key.slice(key.length - 2) !== '[]') {
            result = serializer(result, key + '[]', option.value);
          } else {
            result = serializer(result, key, option.value);
          }
        }
      }

      if (!isSelectedOptions && options.empty) {
        result = serializer(result, key, '');
      }
      continue;
    }

    result = serializer(result, key, val);
  }

  if (options.empty) {
    for (var key in radio_store) {
      if (!radio_store[key]) {
        result = serializer(result, key, '');
      }
    }
  }

  return result;
}

function parse_keys(string) {
  var keys = [];
  var prefix = /^([^\[\]]*)/;
  var children = new RegExp(brackets);
  var match = prefix.exec(string);

  if (match[1]) {
    keys.push(match[1]);
  }

  while ((match = children.exec(string)) !== null) {
    keys.push(match[1]);
  }

  return keys;
}

function hash_assign(result, keys, value) {
  if (keys.length === 0) {
    result = value;
    return result;
  }

  var key = keys.shift();
  var between = key.match(/^\[(.+?)\]$/);

  if (key === '[]') {
    result = result || [];

    if (Array.isArray(result)) {
      result.push(hash_assign(null, keys, value));
    } else {
      // This might be the result of bad name attributes like "[][foo]",
      // in this case the original `result` object will already be
      // assigned to an object literal. Rather than coerce the object to
      // an array, or cause an exception the attribute "_values" is
      // assigned as an array.
      result._values = result._values || [];
      result._values.push(hash_assign(null, keys, value));
    }

    return result;
  }

  // Key is an attribute name and can be assigned directly.
  if (!between) {
    result[key] = hash_assign(result[key], keys, value);
  } else {
    var string = between[1];
    // +var converts the variable into a number
    // better than parseInt because it doesn't truncate away trailing
    // letters and actually fails if whole thing is not a number
    var index = +string;

    // If the characters between the brackets is not a number it is an
    // attribute name and can be assigned directly.
    if (isNaN(index)) {
      result = result || {};
      result[string] = hash_assign(result[string], keys, value);
    } else {
      result = result || [];
      result[index] = hash_assign(result[index], keys, value);
    }
  }

  return result;
}

// Object/hash encoding serializer.
function hash_serializer(result, key, value) {
  var matches = key.match(brackets);

  // Has brackets? Use the recursive assignment function to walk the keys,
  // construct any missing objects in the result tree and make the assignment
  // at the end of the chain.
  if (matches) {
    var keys = parse_keys(key);
    hash_assign(result, keys, value);
  } else {
    // Non bracket notation can make assignments directly.
    var existing = result[key];

    // If the value has been assigned already (for instance when a radio and
    // a checkbox have the same name attribute) convert the previous value
    // into an array before pushing into it.
    //
    // NOTE: If this requirement were removed all hash creation and
    // assignment could go through `hash_assign`.
    if (existing) {
      if (!Array.isArray(existing)) {
        result[key] = [existing];
      }

      result[key].push(value);
    } else {
      result[key] = value;
    }
  }

  return result;
}

// urlform encoding serializer
function str_serialize(result, key, value) {
  // encode newlines as \r\n cause the html spec says so
  value = value.replace(/(\r)?\n/g, '\r\n');
  value = encodeURIComponent(value);

  // spaces should be '+' rather than '%20'.
  value = value.replace(/%20/g, '+');
  return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + value;
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function (factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var api, _OldCookies; }
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
					attributes.path    && '; path=' + attributes.path,
					attributes.domain  && '; domain=' + attributes.domain,
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var name = parts[0].replace(rdecode, decodeURIComponent);
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.get = api.set = api;
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cookie = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jsCookie = __webpack_require__(20);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _extend = __webpack_require__(1);

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookie = exports.cookie = function cookie(str) {
  if (!arguments.length) return;
  if (this instanceof cookie === false) {
    return new cookie(str);
  }

  this.config = {
    key: str,
    options: {
      expires: 365
    }
  };
  this.data = this.get();
  return this;
};

cookie.prototype.get = function (str) {
  var data = {};

  if (_jsCookie2.default.get(this.config.key)) {
    data = _jsCookie2.default.getJSON(this.config.key);
  }
  if (str && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && typeof data !== null) {
    return typeof data[str] !== 'undefined' ? data[str] : null;
  } else {
    return data;
  }
};

cookie.prototype.set = function (str, value, options) {
  if (!arguments.length || !this.enabled()) return this;
  if (typeof str === 'string' && arguments.length >= 2) {
    this.data[str] = value ? value : null;
  } else if ((typeof str === 'undefined' ? 'undefined' : _typeof(str)) === 'object' && arguments.length === 1) {
    (0, _extend2.default)(this.data, str);
  }
  _jsCookie2.default.set(this.config.key, this.data, (0, _extend2.default)(this.config.options, options || {}));
  return this;
};

cookie.prototype.expire = function (daysUntilExpire) {
  if (daysUntilExpire) {
    _jsCookie2.default.set(this.config.key, this.data, (0, _extend2.default)(this.config.options, { expires: daysUntilExpire }));
  } else {
    _jsCookie2.default.remove(this.config.key);
    this.data = {};
  }
  return this;
};

cookie.prototype.options = function (obj) {
  if (!arguments.length) return this.config.options;
  this.config.options = (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' ? obj : {};
  return this;
};

cookie.prototype.enabled = function () {
  return navigator.cookieEnabled;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUniqueId = getUniqueId;
function getUniqueId() {
  // uuidv4
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    // browser
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
      return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
  } else {
    // node & older browsers
    var str = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    return str.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getScrollState = getScrollState;

var _extend = __webpack_require__(1);

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getScrollState(obj) {
  var config = (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' ? obj : {};
  var state = (0, _extend2.default)({
    pixel: 0,
    pixel_max: 0,
    ratio: null,
    ratio_max: null
  }, config);

  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined || (typeof document === 'undefined' ? 'undefined' : _typeof(document)) !== undefined) {
    state.pixel = getScrollOffset() + getWindowHeight();
    if (state.pixel > state.pixel_max) {
      state.pixel_max = state.pixel;
    }
    state.ratio = parseFloat(Number(state.pixel / getScrollableArea()).toFixed(2));
    state.ratio_max = parseFloat(Number(state.pixel_max / getScrollableArea()).toFixed(2));
  }

  return state;
}

function getScrollableArea() {
  var body = document.body;
  var html = document.documentElement;
  return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) || null;
}

function getScrollOffset() {
  return window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

function getWindowHeight() {
  return window.innerHeight || document.documentElement.clientHeight;
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDomNodeProfile = getDomNodeProfile;

var _getDomNodePath = __webpack_require__(9);

function getDomNodeProfile(el) {
  return {
    action: el.action,
    class: el.className,
    href: getElementProps(el, 'href'),
    id: getElementProps(el, 'id'),
    event_key: getElementProps(el, 'data-event-key'),
    method: el.method,
    name: el.name,
    node_name: el.nodeName,
    selector: (0, _getDomNodePath.getDomNodePath)(el),
    text: getElementProps(el, 'text'),
    title: getElementProps(el, 'title'),
    type: el.type,
    x_position: el.offsetLeft || el.clientLeft || null,
    y_position: el.offsetTop || el.clientTop || null
  };
}

var getElementProps = function getElementProps(el, prop) {
  if (el[prop]) {
    return el[prop];
  }
  if (el.hasAttribute && el.hasAttribute(prop)) {
    return el.getAttribute(prop);
  }
  if (el.parentNode) {
    return getElementProps(el.parentNode, prop);
  }
  return null;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDomainName = getDomainName;
function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

// To address those who want the "root domain," use this function:
function getDomainName(url) {
    var domain = extractHostname(url),
        splitArr = domain.split('.'),
        arrLen = splitArr.length;

    //extracting the root domain here
    //if there is a subdomain
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
        //check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
        if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
            //this is using a ccTLD
            domain = splitArr[arrLen - 3] + '.' + domain;
        }
    }
    return domain;
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDatetimeIndex = getDatetimeIndex;
function getDatetimeIndex(input) {
  var date = input || new Date();
  return {
    'hour_of_day': date.getHours(),
    'day_of_week': parseInt(1 + date.getDay()),
    'day_of_month': date.getDate(),
    'month': parseInt(1 + date.getMonth()),
    'year': date.getFullYear()
  };
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBrowserProfile = getBrowserProfile;

var _getScreenProfile = __webpack_require__(11);

var _getWindowProfile = __webpack_require__(10);

function getBrowserProfile() {
  return {
    'cookies': 'undefined' !== typeof navigator.cookieEnabled ? navigator.cookieEnabled : false,
    'codeName': navigator.appCodeName,
    'description': getDocumentDescription(),
    'language': navigator.language,
    'name': navigator.appName,
    'online': navigator.onLine,
    'platform': navigator.platform,
    'useragent': navigator.userAgent,
    'version': navigator.appVersion,
    'screen': (0, _getScreenProfile.getScreenProfile)(),
    'window': (0, _getWindowProfile.getWindowProfile)()
  };
}

function getDocumentDescription() {
  var el;
  if (document && typeof document.querySelector === 'function') {
    el = document.querySelector('meta[name="description"]');
  }
  return el ? el.content : '';
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAutoTrackingCore = initAutoTrackingCore;

var _package = __webpack_require__(15);

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initAutoTrackingCore(lib) {
  return function (obj) {
    var client = this;
    var helpers = lib.helpers;
    var utils = lib.utils;

    var options = utils.extend({
      ignoreDisabledFormFields: false,
      ignoreFormFieldTypes: ['password'],
      recordClicks: true,
      recordFormSubmits: true,
      recordPageViews: true,
      recordPageViewsOnExit: false,
      recordScrollState: true,
      shareUuidAcrossDomains: false,
      collectIpAddress: true,
      collectUuid: true,
      catchError: undefined // optional, function(someError) - error handler
    }, obj);

    if (client.config.requestType === 'beaconAPI' && options.catchError) {
      throw 'You cannot use the BeaconAPI and catchError function in the same time, because BeaconAPI ignores errors. For requests with error handling - use requestType: \'fetch\'';
      return;
    }

    if (client.config.requestType === 'jsonp' // jsonp is deprecated, it's the default value from old keen's client
    ) {
        if (options.catchError) {
          client.config.requestType = 'fetch';
        } else {
          client.config.requestType = 'beaconAPI';
        }
      }

    var now = new Date();
    var cookie = new utils.cookie('keen');

    var domainName = helpers.getDomainName(window.location.hostname);
    var cookieDomain = domainName && options.shareUuidAcrossDomains ? {
      domain: '.' + domainName
    } : {};

    var uuid = void 0;
    if (options.collectUuid) {
      uuid = cookie.get('uuid');
      if (!uuid) {
        uuid = helpers.getUniqueId();
        cookie.set('uuid', uuid, cookieDomain);
      }
    }

    var initialReferrer = cookie.get('initialReferrer');
    if (!initialReferrer) {
      initialReferrer = document && document.referrer || undefined;
      cookie.set('initialReferrer', initialReferrer, cookieDomain);
    }

    var scrollState = {};
    if (options.recordScrollState) {
      scrollState = helpers.getScrollState();
      utils.listener('window').on('scroll', function () {
        scrollState = helpers.getScrollState(scrollState);
      });
    }

    var addons = [{
      name: 'keen:ua_parser',
      input: {
        ua_string: 'user_agent'
      },
      output: 'tech'
    }, {
      name: 'keen:url_parser',
      input: {
        url: 'url.full'
      },
      output: 'url.info'
    }, {
      name: 'keen:url_parser',
      input: {
        url: 'referrer.full'
      },
      output: 'referrer.info'
    }, {
      name: 'keen:date_time_parser',
      input: {
        date_time: 'keen.timestamp'
      },
      output: 'time.utc'
    }, {
      name: 'keen:date_time_parser',
      input: {
        date_time: 'local_time_full'
      },
      output: 'time.local'
    }];

    var ip_address = '${keen.ip}';
    addons.push({
      name: 'keen:ip_to_geo',
      input: {
        ip: 'ip_address',
        remove_ip_property: !options.collectIpAddress
      },
      output: 'geo'
    });

    client.extendEvents(function () {
      var browserProfile = helpers.getBrowserProfile();
      return {
        tracked_by: _package2.default.name + '-' + _package2.default.version,
        local_time_full: new Date().toISOString(),
        user: {
          uuid: uuid
        },
        page: {
          title: document ? document.title : null,
          description: browserProfile.description,
          scroll_state: scrollState,
          time_on_page: getSecondsSinceDate(now),
          time_on_page_ms: getMiliSecondsSinceDate(now)
        },

        ip_address: ip_address,
        geo: {/* Enriched */},

        user_agent: '${keen.user_agent}',
        tech: {
          profile: browserProfile
          /* Enriched */
        },

        url: {
          full: window ? window.location.href : '',
          info: {/* Enriched */}
        },

        referrer: {
          initial: initialReferrer,
          full: document ? document.referrer : '',
          info: {/* Enriched */}
        },

        time: {
          local: {/* Enriched */},
          utc: {/* Enriched */}
        },

        keen: {
          timestamp: new Date().toISOString(),
          addons: addons
        }
      };
    });

    if (options.recordClicks === true) {
      utils.listener('a, a *').on('click', function (e) {
        var el = e.target;
        var event = {
          element: helpers.getDomNodeProfile(el),
          local_time_full: new Date().toISOString()
        };

        if (options.catchError) {
          return client.recordEvent({
            collection: 'clicks',
            event: event
          }).catch(function (err) {
            options.catchError(err);
          });
        }

        return client.recordEvent({
          collection: 'clicks',
          event: event
        });
      });
    }

    if (options.recordFormSubmits === true) {
      utils.listener('form').on('submit', function (e) {
        var el = e.target;
        var serializerOptions = {
          disabled: options.ignoreDisabledFormFields,
          ignoreTypes: options.ignoreFormFieldTypes
        };
        var event = {
          form: {
            action: el.action,
            fields: utils.serializeForm(el, serializerOptions),
            method: el.method
          },
          element: helpers.getDomNodeProfile(el),
          local_time_full: new Date().toISOString()
        };

        if (options.catchError) {
          return client.recordEvent({
            collection: 'form_submissions',
            event: event
          }).catch(function (err) {
            options.catchError(err);
          });
        }

        return client.recordEvent({
          collection: 'form_submissions',
          event: event
        });
      });
    }

    if (options.recordPageViews === true && !options.recordPageViewsOnExit) {
      if (options.catchError) {
        client.recordEvent({
          collection: 'pageviews'
        }).catch(function (err) {
          options.catchError(err);
        });
      } else {
        client.recordEvent({
          collection: 'pageviews'
        });
      }
    }

    if (options.recordPageViewsOnExit && typeof window !== 'undefined') {
      window.addEventListener('beforeunload', function () {
        client.config.requestType = 'beaconAPI'; // you can run beforeunload only with beaconAPI
        client.recordEvent({
          collection: 'pageviews'
        });
      });
    }

    return client;
  };
}

function getSecondsSinceDate(date) {
  return Math.round(getMiliSecondsSinceDate(date) / 1000);
}

function getMiliSecondsSinceDate(date) {
  return new Date().getTime() - date.getTime();
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.deferEvent = deferEvent;
exports.deferEvents = deferEvents;
exports.queueCapacity = queueCapacity;
exports.queueInterval = queueInterval;
exports.recordDeferredEvents = recordDeferredEvents;

var _index = __webpack_require__(8);

var _index2 = _interopRequireDefault(_index);

var _each = __webpack_require__(0);

var _each2 = _interopRequireDefault(_each);

var _queue = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deferEvent(eventCollection, eventBody) {

  if (arguments.length !== 2 || typeof eventCollection !== 'string') {
    handleValidationError.call(this, 'Incorrect arguments provided to #deferEvent method');
    return;
  }

  this.queue.events[eventCollection] = this.queue.events[eventCollection] || [];
  this.queue.events[eventCollection].push(eventBody);
  this.queue.capacity++;
  if (!this.queue.timer) {
    this.queue.start();
  }
  this.emit('deferEvent', eventCollection, eventBody);
  return this;
}

function deferEvents(eventsHash) {
  var self = this;

  if (arguments.length !== 1 || (typeof eventsHash === 'undefined' ? 'undefined' : _typeof(eventsHash)) !== 'object') {
    handleValidationError.call(this, 'Incorrect arguments provided to #deferEvents method');
    return;
  }

  (0, _each2.default)(eventsHash, function (eventList, eventCollection) {
    self.queue.events[eventCollection] = self.queue.events[eventCollection] || [];
    self.queue.events[eventCollection] = self.queue.events[eventCollection].concat(eventList);
    self.queue.capacity = self.queue.capacity + eventList.length;
    if (!self.queue.timer) {
      self.queue.start();
    }
  });
  self.emit('deferEvents', eventsHash);
  return self;
}

function queueCapacity(num) {
  if (!arguments.length) return this.queue.config.capacity;
  this.queue.config.capacity = num ? Number(num) : 0;
  this.queue.check();
  return this;
}

function queueInterval(num) {
  if (!arguments.length) return this.queue.config.interval;
  this.queue.config.interval = num ? Number(num) : 0;
  this.queue.check();
  return this;
}

function recordDeferredEvents() {
  var self = this;

  if (self.queue.capacity > 0) {
    self.queue.pause();
    var clonedQueueConfig = _extends({}, self.queue.config);
    var clonedQueueEvents = _extends({}, self.queue.events);
    self.queue = (0, _queue.queue)();
    self.queue.config = clonedQueueConfig;
    self.queue.on('flush', function () {
      self.recordDeferredEvents();
    });
    self.emit('recordDeferredEvents', clonedQueueEvents);
    self.recordEvents(clonedQueueEvents, function (err, res) {
      if (err) {
        self.emit('recordDeferredEventsError', err, clonedQueueEvents);
      }
    });
  }
  return self;
}

function handleValidationError(message) {
  this.emit('error', 'Event(s) not deferred: ' + message);
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFromCache = exports.saveToCache = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(2);

__webpack_require__(6);

var _md = __webpack_require__(12);

var _md2 = _interopRequireDefault(_md);

var _configDefault = __webpack_require__(3);

var _configDefault2 = _interopRequireDefault(_configDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof self === 'undefined') {
  throw 'IndexedDB is available only in Browser ENV';
}

var indexedDBAvailable = 'indexedDB' in self;
var cachingEnabled = true;

if (!indexedDBAvailable) {
  // console.log("Your browser doesn't support a stable version of IndexedDB.");
  cachingEnabled = false; // graceful degradation
}

var db = void 0;
var cacheConfig = _extends({}, _configDefault2.default.cache);

function initializeIndexedDb() {
  var requestCacheConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (db) {
    return Promise.resolve();
  }
  if (!cachingEnabled) {
    return Promise.resolve();
  }
  cacheConfig = _extends({}, cacheConfig, requestCacheConfig);
  return new Promise(function (resolve, reject) {
    var dbConnectionRequest = self.indexedDB.open(cacheConfig.dbName);
    dbConnectionRequest.onerror = function (event) {
      cachingEnabled = false;
      resolve();
    };

    dbConnectionRequest.onupgradeneeded = function (event) {
      var db = event.target.result;
      var objectStore = db.createObjectStore(cacheConfig.dbCollectionName, { keyPath: cacheConfig.dbCollectionKey });
      objectStore.createIndex(cacheConfig.dbCollectionKey, cacheConfig.dbCollectionKey, { unique: true });
      objectStore.createIndex('expiryTime', 'expiryTime', { unique: false });
    };

    dbConnectionRequest.onsuccess = function (event) {
      db = event.target.result;
      db.onerror = function (event) {
        cachingEnabled = false; // graceful degradation
      };
      resolve(db);
    };
  });
}

var saveToCache = exports.saveToCache = function saveToCache(hash) {
  var configOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return initializeIndexedDb(configOptions).then(function () {
    var transactionSave = db.transaction(cacheConfig.dbCollectionName, "readwrite").objectStore(cacheConfig.dbCollectionName);
    var requestSave = transactionSave.add({
      hash: hash,
      expiryTime: Date.now() + cacheConfig.maxAge
    });
    requestSave.onsuccess = function (event) {};
    requestSave.onerror = function (event) {
      cachingEnabled = false;
    };
  });
};

var getFromCache = exports.getFromCache = function getFromCache(hash) {
  var configOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return initializeIndexedDb(configOptions).then(function () {
    return new Promise(function (resolve, reject) {
      if (!cachingEnabled) {
        return resolve(null);
      }

      var transactionCleanUp = db.transaction(cacheConfig.dbCollectionName, "readwrite").objectStore(cacheConfig.dbCollectionName);
      var indexCleanUp = transactionCleanUp.index('expiryTime');
      var upperBoundOpenKeyRange = IDBKeyRange.upperBound(Date.now(), true);
      indexCleanUp.openCursor(upperBoundOpenKeyRange).onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
          var transactionDelete = db.transaction(cacheConfig.dbCollectionName, "readwrite").objectStore(cacheConfig.dbCollectionName).delete(event.target.result.value[cacheConfig.dbCollectionKey]);
          cursor.continue();
        }
      };

      var transactionIndex = db.transaction(cacheConfig.dbCollectionName, "readwrite").objectStore(cacheConfig.dbCollectionName);
      var index = transactionIndex.index(cacheConfig.dbCollectionKey);
      var responseFromCache = index.get(hash);
      responseFromCache.onsuccess = function (event) {
        if (!event.target.result || event.target.result.expiryTime < Date.now()) {
          if (event.target.result && event.target.result.expiryTime < Date.now()) {
            var transactionDelete = db.transaction(cacheConfig.dbCollectionName, "readwrite").objectStore(cacheConfig.dbCollectionName).delete(event.target.result[cacheConfig.dbCollectionKey]);
            transactionDelete.onsuccess = function (event) {
              resolve(getFromCache(hash, configOptions));
            };
            transactionDelete.onerror = function (event) {
              cachingEnabled = false;
              resolve(getFromCache(hash, configOptions));
            };
            return resolve(null);
          }
          return resolve(null);
        } else {
          return resolve(event.target.result);
        }
      };
      responseFromCache.onerror = function (event) {
        cachingEnabled = false;
        resolve(getFromCache(hash, configOptions));
      };
    });
  });
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUnique = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(2);

var _md = __webpack_require__(12);

var _md2 = _interopRequireDefault(_md);

var _cacheBrowser = __webpack_require__(30);

var _configDefault = __webpack_require__(3);

var _configDefault2 = _interopRequireDefault(_configDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uniqueIds = [];

var isUnique = exports.isUnique = function isUnique(customCacheConfig, extendedEventBody) {
  var configCache = _extends({}, _configDefault2.default.cache, customCacheConfig.cache);
  var stringifiedEvent = JSON.stringify(extendedEventBody);
  var hashingMethod = configCache.hashingMethod;

  var hash = hashingMethod && hashingMethod.toLowerCase() === 'md5' ? (0, _md2.default)(stringifiedEvent) : stringifiedEvent;
  var expiryTime = configCache.maxAge ? Date.now() + configCache.maxAge : undefined;
  var item = {
    hash: hash,
    expiryTime: expiryTime
  };
  if (expiryTime) {
    var now = Date.now();
    uniqueIds = uniqueIds.filter(function (item) {
      return item.expiryTime > now;
    });
  }

  var alreadySentEvent = uniqueIds.find(function (item) {
    return item.hash === hash;
  });
  if (alreadySentEvent) {
    if (alreadySentEvent.expiryTime && alreadySentEvent.expiryTime < Date.now()) {
      uniqueIds = uniqueIds.filter(function (item) {
        return item.hash !== hash;
      });
    } else {
      return Promise.resolve(false);
    }
  }
  uniqueIds.push(item);
  if (configCache.storage && configCache.storage.toLowerCase() === 'indexeddb') {
    return (0, _cacheBrowser.getFromCache)(hash, configCache).then(function (alreadySentEvent) {
      if (alreadySentEvent) {
        return false;
      }
      (0, _cacheBrowser.saveToCache)(hash, configCache);
      return true;
    });
  }

  return Promise.resolve(true);
};

exports.default = isUnique;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (url, options) {
  var config = _extends({}, _configDefault2.default, options.retry || {});

  var retriesLimit = config.retry.limit;
  var retryInitialDelay = config.retry.initialDelay;
  var retryOn = config.retry.retryOnResponseStatuses;
  var retriesCount = 0;

  if (retryOn && !(retryOn instanceof Array)) {
    throw {
      name: 'ArgumentError',
      message: 'retryOn property expects an array'
    };
  }

  return new Promise(function (resolve, reject) {
    var wrappedFetch = function wrappedFetch(n) {
      fetch(url, options).then(function (response) {
        if (retryOn.indexOf(response.status) === -1) {
          resolve(response);
        } else {
          if (n > 0) {
            retry();
          } else {
            reject(response);
          }
        }
      }).catch(function (error) {
        if (n > 0) {
          retry();
        } else {
          reject(error);
        }
      });
    };

    function retry() {
      retriesCount = retriesCount + 1;
      setTimeout(function () {
        wrappedFetch(retriesLimit - retriesCount);
      }, 2 ^ retriesCount * retryInitialDelay);
    }

    wrappedFetch(retriesLimit - retriesCount);
  });
};

__webpack_require__(2);

__webpack_require__(6);

var _configDefault = __webpack_require__(3);

var _configDefault2 = _interopRequireDefault(_configDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {
  map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (n) {
    "use strict";
    var o = "", i = 0, m = this.map, i1, i2, i3, e1, e2, e3, e4;
    n = this.utf8.encode(n);
    while (i < n.length) {
      i1 = n.charCodeAt(i++); i2 = n.charCodeAt(i++); i3 = n.charCodeAt(i++);
      e1 = (i1 >> 2); e2 = (((i1 & 3) << 4) | (i2 >> 4)); e3 = (isNaN(i2) ? 64 : ((i2 & 15) << 2) | (i3 >> 6));
      e4 = (isNaN(i2) || isNaN(i3)) ? 64 : i3 & 63;
      o = o + m.charAt(e1) + m.charAt(e2) + m.charAt(e3) + m.charAt(e4);
    } return o;
  },
  decode: function (n) {
    "use strict";
    var o = "", i = 0, m = this.map, cc = String.fromCharCode, e1, e2, e3, e4, c1, c2, c3;
    n = n.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < n.length) {
      e1 = m.indexOf(n.charAt(i++)); e2 = m.indexOf(n.charAt(i++));
      e3 = m.indexOf(n.charAt(i++)); e4 = m.indexOf(n.charAt(i++));
      c1 = (e1 << 2) | (e2 >> 4); c2 = ((e2 & 15) << 4) | (e3 >> 2);
      c3 = ((e3 & 3) << 6) | e4;
      o = o + (cc(c1) + ((e3 != 64) ? cc(c2) : "")) + (((e4 != 64) ? cc(c3) : ""));
    } return this.utf8.decode(o);
  },
  utf8: {
    encode: function (n) {
      "use strict";
      var o = "", i = 0, cc = String.fromCharCode, c;
      while (i < n.length) {
        c = n.charCodeAt(i++); o = o + ((c < 128) ? cc(c) : ((c > 127) && (c < 2048)) ?
        (cc((c >> 6) | 192) + cc((c & 63) | 128)) : (cc((c >> 12) | 224) + cc(((c >> 6) & 63) | 128) + cc((c & 63) | 128)));
        } return o;
    },
    decode: function (n) {
      "use strict";
      var o = "", i = 0, cc = String.fromCharCode, c2, c;
      while (i < n.length) {
        c = n.charCodeAt(i);
        o = o + ((c < 128) ? [cc(c), i++][0] : ((c > 191) && (c < 224)) ?
        [cc(((c & 31) << 6) | ((c2 = n.charCodeAt(i + 1)) & 63)), (i += 2)][0] :
        [cc(((c & 15) << 12) | (((c2 = n.charCodeAt(i + 1)) & 63) << 6) | ((c3 = n.charCodeAt(i + 2)) & 63)), (i += 3)][0]);
      } return o;
    }
  }
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4), __webpack_require__(34)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(35);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.recordEvent = recordEvent;
exports.recordEvents = recordEvents;

__webpack_require__(2);

__webpack_require__(6);

var _base = __webpack_require__(33);

var _base2 = _interopRequireDefault(_base);

var _each = __webpack_require__(0);

var _each2 = _interopRequireDefault(_each);

var _extend = __webpack_require__(1);

var _extend2 = _interopRequireDefault(_extend);

var _index = __webpack_require__(8);

var _index2 = _interopRequireDefault(_index);

var _extendEvents = __webpack_require__(14);

var _fetchRetry = __webpack_require__(32);

var _fetchRetry2 = _interopRequireDefault(_fetchRetry);

var _unique = __webpack_require__(31);

var _unique2 = _interopRequireDefault(_unique);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------
// .recordEvent
// ------------------------------

function recordEvent(eventCollectionOrConfigObject, eventBody, callback) {
  var _this = this;

  var eventCollection = eventCollectionOrConfigObject;
  var useBeaconApi = false;
  var unique = void 0;
  var configObject = void 0;
  var clientConfig = this.config;

  if ((typeof eventCollectionOrConfigObject === 'undefined' ? 'undefined' : _typeof(eventCollectionOrConfigObject)) === 'object' && eventCollectionOrConfigObject) {
    // slowly but surely we migrate to one object with all args
    configObject = eventCollectionOrConfigObject;
    eventCollection = eventCollectionOrConfigObject.collection || eventCollectionOrConfigObject.event_collection;
    eventBody = eventCollectionOrConfigObject.event;
    callback = eventCollectionOrConfigObject.callback;
    unique = eventCollectionOrConfigObject.unique;
  }

  var url = this.url('events', encodeURIComponent(eventCollection));
  var data = {};

  if (!checkValidation.call(this, callback)) {
    return;
  }

  if (!eventCollection || typeof eventCollection !== 'string') {
    handleValidationError.call(this, 'Collection name must be a string.', callback);
    return;
  }

  (0, _extend2.default)(data, eventBody);

  // ------------------------------
  // Run extendEvent(s) transforms
  // ------------------------------
  var extendedEventsHash = {};
  (0, _extendEvents.getExtendedEventBody)(extendedEventsHash, this.extensions.events);
  (0, _extendEvents.getExtendedEventBody)(extendedEventsHash, this.extensions.collections[eventCollection]);
  (0, _extendEvents.getExtendedEventBody)(extendedEventsHash, [data]);

  if (unique) {
    return (0, _unique2.default)(configObject, extendedEventsHash).then(function (isUniqueResult) {
      if (!isUniqueResult) {
        return Promise.resolve({
          created: false,
          message: '[NOT_UNIQUE] This event has already been recorded'
        });
      }
      return recordEvent.call(_this, _extends({}, eventCollectionOrConfigObject, { unique: undefined }));
    });
  }

  this.emit('recordEvent', eventCollection, extendedEventsHash);

  if (!_index2.default.enabled) {
    handleValidationError.call(this, 'Keen.enabled is set to false.', callback);
    return false;
  }

  return send.call(this, { url: url, extendedEventsHash: extendedEventsHash, callback: callback, configObject: configObject, eventCollection: eventCollection });
}

// ------------------------------
// .recordEvents
// ------------------------------

function recordEvents(eventsHash, callback) {
  var self = this;
  var url = this.url('events');

  if (!checkValidation.call(this, callback)) {
    return;
  }

  if ('object' !== (typeof eventsHash === 'undefined' ? 'undefined' : _typeof(eventsHash)) || eventsHash instanceof Array) {
    handleValidationError.call(this, 'First argument must be an object', callback);
    return;
  }

  if (arguments.length > 2) {
    handleValidationError.call(this, 'Incorrect arguments provided to #recordEvents method', callback);
    return;
  }

  // ------------------------------
  // Run extendEvent(s) transforms
  // ------------------------------
  var extendedEventsHash = {};
  (0, _each2.default)(eventsHash, function (eventList, eventCollection) {
    // Find or create collection on new hash
    extendedEventsHash[eventCollection] = extendedEventsHash[eventCollection] || [];
    // Loop over each eventBody in the existing hash
    (0, _each2.default)(eventList, function (eventBody, index) {
      // Create a new data object
      var extendedEventBody = {};
      // Process "events" transform pipeline
      (0, _extendEvents.getExtendedEventBody)(extendedEventBody, self.extensions.events);
      // Process "collection" transform pipeline
      (0, _extendEvents.getExtendedEventBody)(extendedEventBody, self.extensions.collections[eventCollection]);
      // Blend existing eventBody data into the result
      (0, _extendEvents.getExtendedEventBody)(extendedEventBody, [eventBody]);
      // Push extendedEventBody into new hash
      extendedEventsHash[eventCollection].push(extendedEventBody);
    });
  });

  this.emit('recordEvents', extendedEventsHash);

  if (!_index2.default.enabled) {
    handleValidationError.call(this, 'Keen.enabled is set to false.', callback);
    return false;
  }

  return send.call(this, { url: url, extendedEventsHash: extendedEventsHash, callback: callback });
}

function send(_ref) {
  var url = _ref.url,
      extendedEventsHash = _ref.extendedEventsHash,
      callback = _ref.callback,
      _ref$configObject = _ref.configObject,
      configObject = _ref$configObject === undefined ? {} : _ref$configObject,
      eventCollection = _ref.eventCollection;

  var clientConfig = this.config;
  var requestType = configObject.requestType // specific method for one request
  || this.config.requestType; // global request type of client

  if (navigator && navigator.sendBeacon && requestType === 'beaconAPI'
  // so you can send specific recordEvent() using beaconAPI
  // even if your global client's config prefers Fetch
  ) {
      navigator.sendBeacon(url + '?api_key=' + this.writeKey(), JSON.stringify(extendedEventsHash));
      if (callback) {
        // Beacon API is not handling responses nor errors
        callback();
      }
      return this;
    }

  // this is IMAGE beacon, not the Beacon API. deprecated
  if (requestType === 'beacon' || requestType === 'img') {
    var getRequestUrl = this.url('events', encodeURIComponent(eventCollection), {
      api_key: this.writeKey(),
      data: encodeURIComponent(_base2.default.encode(JSON.stringify(extendedEventsHash))),
      modified: new Date().getTime()
    });
    var getRequestUrlOkLength = getRequestUrl.length < getUrlMaxLength();

    if (getRequestUrlOkLength) {
      sendBeacon.call(this, getRequestUrl, callback);
    } else {
      if (callback) {
        callback('Beacon URL length exceeds current browser limit, and XHR is not supported.', null);
      }
    }
    return this;
  }

  if (typeof fetch !== 'undefined') {
    return sendFetch.call(this, 'POST', url, extendedEventsHash, callback);
  }

  return this;
}

function sendFetch(method, url, data) {
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

  var self = this;

  return (0, _fetchRetry2.default)(url, {
    method: method,
    body: data ? JSON.stringify(data) : '',
    mode: 'cors',
    redirect: 'follow',
    referrerPolicy: self.referrerPolicy() || 'unsafe-url',
    headers: {
      'Authorization': self.writeKey(),
      'Content-Type': 'application/json'
    },
    // keepalive: true, not supported for CORS yet
    retry: self.config.retry
  }).catch(function (connectionError) {
    if (typeof callback !== 'undefined') {
      callback.call(self, connectionError, null);
    }
    self.emit('error', connectionError);
    return Promise.reject(connectionError);
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (responseJSON) {
      return Promise.reject({
        error_code: responseJSON.error_code,
        body: responseJSON.message,
        status: response.status,
        ok: false,
        statusText: response.statusText
      });
    });
  }).then(function (responseJSON) {
    var eventsSavedSuccessfuly = checkEventsSavedSuccessfuly(responseJSON);
    if (eventsSavedSuccessfuly) {
      if (typeof callback !== 'undefined') {
        callback.call(self, null, responseJSON);
      }
      return Promise.resolve(responseJSON);
    } else {
      if (typeof callback !== 'undefined') {
        callback.call(self, responseJSON, null);
      }
      self.emit('error', responseJSON);
      return Promise.reject(responseJSON);
    }
  });
}

function checkEventsSavedSuccessfuly(response) {
  // single event
  if (typeof response.created !== 'undefined') {
    if (response.created) {
      return true;
    }
    return false;
  }
  // multiple events
  var responseKeys = Object.keys(response);
  var notSavedEvents = responseKeys.map(function (collection) {
    return response[collection].filter(function (event) {
      return !event.success;
    });
  }).filter(function (collection) {
    return collection.length > 0;
  });

  if (notSavedEvents.length === 0) {
    return true;
  }

  return false;
}

// Validation
function checkValidation(callback) {

  if (!this.projectId()) {
    handleValidationError.call(this, 'Keen.Client is missing a projectId property.', callback);
    return false;
  }
  if (!this.writeKey()) {
    handleValidationError.call(this, 'Keen.Client is missing a writeKey property.', callback);
    return false;
  }
  return true;
}

function handleValidationError(message, callback) {
  var err = 'Event(s) not recorded: ' + message;
  this.emit('error', err);
  if (callback) {
    callback.call(this, err, null);
  }
}

function getUrlMaxLength() {
  if ('undefined' !== typeof window && navigator) {
    if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
      return 1900;
    }
  }
  return 16000;
}

/*
  DEPRECATED METHODS
*/

// Image Beacon Requests
// DEPRECATED
function sendBeacon(url, callback) {
  var self = this,
      img = document.createElement('img'),
      loaded = false;

  img.onload = function () {
    loaded = true;
    if ('naturalHeight' in this) {
      if (this.naturalHeight + this.naturalWidth === 0) {
        this.onerror();
        return;
      }
    } else if (this.width + this.height === 0) {
      this.onerror();
      return;
    }
    if (callback) {
      callback.call(self);
    }
  };
  img.onerror = function () {
    loaded = true;
    if (callback) {
      callback.call(self, 'An error occurred!', null);
    }
  };
  img.src = url + '&c=clv1';
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listenerCore = undefined;

var _componentEmitter = __webpack_require__(7);

var _componentEmitter2 = _interopRequireDefault(_componentEmitter);

var _each = __webpack_require__(0);

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

  // Create a new element listner
  var myClickerCatcher = Keen.utils.listener(".nav li > a");

  // Listen for a given event
  myClicker.on("click", function(e){
    // do stuff!
  });

  // Listen for event once
  myClicker.once("click", function(e){ });

  // Cancel a given event listener
  myClicker.off("click");

  // Cancel all event listners
  myClicker.off();

*/

var listenerCore = exports.listenerCore = function listenerCore(ctx) {

  // Make sure this object exists
  ctx.domListeners = ctx.domListeners || {
    /*
    'click': {
      '.nav li > a': [fn, fn, fn]
    }
    */
  };

  function listener(str) {
    if (!str) return;
    if (this instanceof listener === false) {
      return new listener(str);
    }
    this.selector = str;
    return this;
  }

  listener.prototype.on = function (str, fn) {
    var self = this;

    if (arguments.length !== 2 || 'string' !== typeof str || 'function' !== typeof fn) return this;

    // Set each listener on a parent dictionary, indexed by event:
    if ('undefined' === typeof ctx.domListeners[str]) {
      addListener(str, eventHandler(str));
      ctx.domListeners[str] = {};
    }
    ctx.domListeners[str][self.selector] = ctx.domListeners[str][self.selector] || [];
    ctx.domListeners[str][self.selector].push(fn);
    return self;
  };

  listener.prototype.once = function (str, fn) {
    var self = this;
    function on() {
      self.off(str, on);
      return fn.apply(self, arguments);
    }
    on.fn = fn;
    self.on(str, on);
    return self;
  };

  listener.prototype.off = function (str, fn) {
    var self = this,
        survivors = [];
    if (arguments.length === 2) {
      (0, _each2.default)(ctx.domListeners[str][self.selector], function (handler, i) {
        if (handler === fn || handler.fn === fn) return;
        survivors.push(handler);
      });
      ctx.domListeners[str][self.selector] = survivors;
    } else if (arguments.length === 1) {
      try {
        delete ctx.domListeners[str][self.selector];
      } catch (e) {
        ctx.domListeners[str][self.selector] = [];
      }
    } else {
      // loop over every eventType and delete handlers
      (0, _each2.default)(ctx.domListeners, function (hash, eventType) {
        // if ('undefined' === typeof hash[str]) return;
        try {
          delete ctx.domListeners[eventType][self.selector];
        } catch (e) {
          ctx.domListeners[eventType][self.selector] = function () {};
        }
      });
    }
    return self;
  };

  function eventHandler(eventType) {
    return function (e) {
      var evt, target;

      evt = e || window.event;
      target = evt.target || evt.srcElement;

      // If nothing assigned to this event type, let it go
      if ('undefined' === ctx.domListeners[eventType]) return;

      (0, _each2.default)(ctx.domListeners[eventType], function (handlers, key) {

        if (matches(target, key)) {
          // Call all handlers for this eventType + node
          (0, _each2.default)(handlers, function (fn, i) {
            if ('click' === eventType && 'A' === target.nodeName) {
              deferClickEvent(evt, target, fn);
            } else if ('submit' === eventType && 'FORM' === target.nodeName) {
              deferFormSubmit(evt, target, fn);
            } else {
              fn(evt);
            }
          });
        } else if ('window' === key) {
          // Call all handlers
          (0, _each2.default)(handlers, function (fn, i) {
            fn(evt);
          });
        }
        return;
      });
    };
  }

  return listener;
};

// ------------------------------
// Attach global event listener
// ------------------------------

function addListener(eventType, fn) {
  if (document.addEventListener) {
    document.addEventListener(eventType, fn, false);
  } else {
    document.attachEvent("on" + eventType, fn);
  }
}

// ------------------------------
// Match DOM element to selector
// ------------------------------

function matches(elem, selector) {
  // We'll use querySelectorAll to find all element matching the selector,
  // then check if the given element is included in that list.
  // Executing the query on the parentNode reduces the resulting nodeList,
  // document doesn't have a parentNode, though.
  var nodeList = (elem.parentNode || document).querySelectorAll(selector) || [],
      i = nodeList.length;

  // loop on the nodeList
  while (i--) {
    if (nodeList[i] == elem) {
      return true;
    }
  }
  return false;
}

// ------------------------------
// Handle 'click' events (A)
// ------------------------------

function deferClickEvent(evt, anchor, callback) {
  var timeout = 500,
      targetAttr,
      cbResponse;

  // Get 'target' attribute from anchor
  if (anchor.getAttribute !== void 0) {
    targetAttr = anchor.getAttribute("target");
  } else if (anchor.target) {
    targetAttr = anchor.target;
  }

  // Fire listener and catch possible response (return false)
  cbResponse = callback(evt);

  // If prevented within callback, bail:
  if ('boolean' === typeof cbResponse && cbResponse === false || evt.defaultPrevented || evt.returnValue === false) {
    if (evt.preventDefault) {
      evt.preventDefault();
    }
    evt.returnValue = false;
    return false;
  }
  // Else if anchor doesn't kick off a new window or tab.. defer and replay the event:
  else if (targetAttr !== '_blank' && targetAttr !== 'blank' && !evt.metaKey && !anchor.hasAttribute('download')) {
      if (evt.preventDefault) {
        evt.preventDefault();
      }
      evt.returnValue = false;
      if (anchor.href && anchor.href !== '#' && anchor.href !== window.location + '#') {
        if (typeof cbResponse !== 'undefined') {
          if (navigator && navigator.sendBeacon) {
            window.location = anchor.href;
            return;
          }
          // promise
          cbResponse.then(function () {
            window.location = anchor.href;
          }).catch(function (err) {
            // change location anyway - to not let user hanging
            window.location = anchor.href;
          });
        } else {
          setTimeout(function () {
            window.location = anchor.href;
          }, timeout);
        }
      }
    }

  return false;
}

// ------------------------------
// Handle 'submit' events (FORM)
// ------------------------------

function deferFormSubmit(evt, form, callback) {
  var timeout = 500;
  // Fire listener and catch possible response (return false)
  var cbResponse = callback(evt);

  // If prevented within callback, bail
  if ('boolean' === typeof cbResponse && cbResponse === false || evt.defaultPrevented || evt.returnValue === false) {
    if (evt.preventDefault) {
      evt.preventDefault();
    }
    evt.returnValue = false;
    return false;
  }
  // Defer and replay event
  else {
      if (evt.preventDefault) {
        evt.preventDefault();
      }
      evt.returnValue = false;
      if (typeof cbResponse !== 'undefined') {
        if (navigator && navigator.sendBeacon) {
          form.submit();
          return;
        }
        // promise
        cbResponse.then(function () {
          form.submit();
        }).catch(function (err) {
          // submit form anyway - to not let user hanging
          form.submit();
        });
      } else {
        setTimeout(function () {
          form.submit();
        }, timeout);
      }
    }

  return false;
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var each = __webpack_require__(0),
    extend = __webpack_require__(1);

module.exports = serialize;

function serialize(data){
  var query = [];
  each(data, function(value, key){
    if ('string' !== typeof value) {
      value = JSON.stringify(value);
    }
    query.push(key + '=' + encodeURIComponent(value));
  });
  return query.join('&');
}


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = parseParams;

function parseParams(str){
  // via: http://stackoverflow.com/a/2880929/2511985
  var urlParams = {},
      match,
      pl     = /\+/g,  // Regex for replacing addition symbol with a space
      search = /([^&=]+)=?([^&]*)/g,
      decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
      query  = str.split("?")[1];

  while (!!(match=search.exec(query))) {
    urlParams[decode(match[1])] = decode(match[2]);
  }
  return urlParams;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(env){
  var previousKeen = env.Keen || undefined;
  var each = __webpack_require__(0),
      extend = __webpack_require__(1),
      parseParams = __webpack_require__(40),
      serialize = __webpack_require__(39);

  var Emitter = __webpack_require__(7);

  function Client(props){
    if (this instanceof Client === false) {
      return new Client(props);
    }
    this.configure(props);

    // Set up event handling
    if (Client.debug) {
      this.on('error', Client.log);
    }
    this.emit('ready');
    Client.emit('client', this);
  }

  if (previousKeen && typeof previousKeen.resources === 'undefined') {
    Client.legacyVersion = previousKeen;
  }

  Emitter(Client);
  Emitter(Client.prototype);

  extend(Client, {
    debug: false,
    enabled: true,
    loaded: false,
    version: '__VERSION__'
  });

  // Set or extend helpers
  Client.helpers = Client.helpers || {};

  // Set or extend resources
  Client.resources = Client.resources || {};
  extend(Client.resources, {
    'base'      : '{protocol}://{host}',
    'version'   : '{protocol}://{host}/3.0',
    'projects'  : '{protocol}://{host}/3.0/projects',
    'projectId' : '{protocol}://{host}/3.0/projects/{projectId}',
    'events'    : '{protocol}://{host}/3.0/projects/{projectId}/events',
    'queries'   : '{protocol}://{host}/3.0/projects/{projectId}/queries'
  });

  // Set or extend utils
  Client.utils = Client.utils || {};
  extend(Client.utils, {
    'each'        : each,
    'extend'      : extend,
    'parseParams' : parseParams,
    'serialize'   : serialize
  });

  Client.extendLibrary = function(target, source) {
    var previous = previousKeen || source;
    if (isDefined(previous) && isDefined(previous.resources)) {
      each(previous, function(value, key) {
        if (typeof value === 'object') {
          target[key] = target[key] || {};
          extend(target[key], value);
        }
        else {
          target[key] = target[key] || value;
        }
      });
      extend(target.prototype, previous.prototype);
    }
    return target;
  };

  Client.log = function(str){
    if (Client.debug && typeof console === 'object') {
      console.log('[Keen]', str);
    }
  };

  Client.noConflict = function(){
    if (typeof env.Keen !== 'undefined') {
      env.Keen = Client.legacyVersion || previousKeen;
    }
    return Client;
  };

  Client.ready = function(fn){
    if (Client.loaded) {
      fn();
    }
    else {
      Client.once('ready', fn);
    }
  };

  Client.prototype.configure = function(obj){
    var config = obj || {};
    this.config = this.config || {
      projectId    : undefined,
      writeKey     : undefined,
      host         : 'api.keen.io',
      protocol     : 'https',
      requestType  : 'jsonp',
      resources    : extend({}, Client.resources)
    };

    // IE<10 request shim
    if (typeof window !== 'undefined' && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1) {
      config.protocol = document.location.protocol.replace(':', '');
    }

    if (config.host) {
      config.host.replace(/.*?:\/\//g, '');
    }

    extend(this.config, config);
    return this;
  };

  Client.prototype.masterKey = function(str){
    if (!arguments.length) return this.config.masterKey;
    this.config.masterKey = str ? String(str) : null;
    return this;
  };

  Client.prototype.projectId = function(str){
    if (!arguments.length) return this.config.projectId;
    this.config.projectId = (str ? String(str) : null);
    return this;
  };

  Client.prototype.resources = function(obj){
    if (!arguments.length) return this.config.resources;
    var self = this;
    if (typeof obj === 'object') {
      each(obj, function(value, key){
        self.config.resources[key] = (value ? value : null);
      });
    }
    return self;
  };

  Client.prototype.url = function(name){
    var args = Array.prototype.slice.call(arguments, 1),
        baseUrl = this.config.resources.base || '{protocol}://{host}',
        path;

    if (name && typeof name === 'string') {
      if (this.config.resources[name]) {
        path = this.config.resources[name];
      }
      else {
        path = baseUrl + name;
      }
    }
    else {
      path = baseUrl;
    }

    each(this.config, function(value, key){
      if (typeof value !== 'object') {
        path = path.replace('{' + key + '}', value);
      }
    });

    each(args, function(arg, i){
      if (typeof arg === 'string') {
        path += '/' + arg;
      }
      else if (typeof arg === 'object') {
        path += '?';
        each(arg, function(value, key){
          path += key + '=' + value + '&';
        });
        path = path.slice(0, -1);
      }
    });

    return path;
  };

  domReady(function(){
    Client.loaded = true;
    Client.emit('ready');
  });

  function domReady(fn){
    if (Client.loaded || typeof document === 'undefined') {
      fn();
      return;
    }
    // Firefox 3.5 shim
    if(document.readyState == null && document.addEventListener){
      document.addEventListener('DOMContentLoaded', function DOMContentLoaded(){
        document.removeEventListener('DOMContentLoaded', DOMContentLoaded, false);
        document.readyState = 'complete';
      }, false);
      document.readyState = 'loading';
    }
    testDom(fn);
  }

  function testDom(fn){
    if (/in/.test(document.readyState)) {
      setTimeout(function(){
        testDom(fn);
      }, 9);
    }
    else {
      fn();
    }
  }

  function isDefined(target) {
    return typeof target !== 'undefined';
  }

  function isUndefined(target) {
    return typeof target === 'undefined';
  }

  module.exports = Client;

}).call(this, typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeenTracking = exports.Keen = exports.keenGlobals = undefined;

var _index = __webpack_require__(8);

var _index2 = _interopRequireDefault(_index);

var _each = __webpack_require__(0);

var _each2 = _interopRequireDefault(_each);

var _extend = __webpack_require__(1);

var _extend2 = _interopRequireDefault(_extend);

var _listener = __webpack_require__(38);

var _recordEventsBrowser = __webpack_require__(37);

var _deferEvents = __webpack_require__(29);

var _extendEvents = __webpack_require__(14);

var _browserAutoTracking = __webpack_require__(28);

var _getBrowserProfile = __webpack_require__(27);

var _getDatetimeIndex = __webpack_require__(26);

var _getDomainName = __webpack_require__(25);

var _getDomNodePath = __webpack_require__(9);

var _getDomNodeProfile = __webpack_require__(24);

var _getScreenProfile = __webpack_require__(11);

var _getScrollState = __webpack_require__(23);

var _getUniqueId = __webpack_require__(22);

var _getWindowProfile = __webpack_require__(10);

var _cookie = __webpack_require__(21);

var _deepExtend = __webpack_require__(13);

var _serializeForm = __webpack_require__(19);

var _timer = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------
// Methods
// ------------------------
(0, _extend2.default)(_index2.default.prototype, {
  recordEvent: _recordEventsBrowser.recordEvent,
  recordEvents: _recordEventsBrowser.recordEvents
});

(0, _extend2.default)(_index2.default.prototype, {
  deferEvent: _deferEvents.deferEvent,
  deferEvents: _deferEvents.deferEvents,
  queueCapacity: _deferEvents.queueCapacity,
  queueInterval: _deferEvents.queueInterval,
  recordDeferredEvents: _deferEvents.recordDeferredEvents
});
(0, _extend2.default)(_index2.default.prototype, {
  extendEvent: _extendEvents.extendEvent,
  extendEvents: _extendEvents.extendEvents
});

// ------------------------
// Auto-Tracking
// ------------------------
var initAutoTracking = (0, _browserAutoTracking.initAutoTrackingCore)(_index2.default);
(0, _extend2.default)(_index2.default.prototype, {
  initAutoTracking: initAutoTracking
});

// ------------------------
// Helpers
// ------------------------
(0, _extend2.default)(_index2.default.helpers, {
  getBrowserProfile: _getBrowserProfile.getBrowserProfile,
  getDatetimeIndex: _getDatetimeIndex.getDatetimeIndex,
  getDomainName: _getDomainName.getDomainName,
  getDomNodePath: _getDomNodePath.getDomNodePath,
  getDomNodeProfile: _getDomNodeProfile.getDomNodeProfile,
  getScreenProfile: _getScreenProfile.getScreenProfile,
  getScrollState: _getScrollState.getScrollState,
  getUniqueId: _getUniqueId.getUniqueId,
  getWindowProfile: _getWindowProfile.getWindowProfile
});

// ------------------------
// Utils
// ------------------------
var listener = (0, _listener.listenerCore)(_index2.default);
(0, _extend2.default)(_index2.default.utils, {
  cookie: _cookie.cookie,
  deepExtend: _deepExtend.deepExtend,
  listener: listener,
  serializeForm: _serializeForm.serializeForm,
  timer: _timer.timer
});

_index2.default.listenTo = function (listenerHash) {
  (0, _each2.default)(listenerHash, function (callback, key) {
    var split = key.split(' ');
    var eventType = split[0],
        selector = split.slice(1, split.length).join(' ');
    // Create an unassigned listener
    return listener(selector).on(eventType, callback);
  });
};

var keenGlobals = exports.keenGlobals = undefined;
if (typeof webpackKeenGlobals !== 'undefined') {
  exports.keenGlobals = keenGlobals = webpackKeenGlobals;
}

var Keen = exports.Keen = _index2.default.extendLibrary(_index2.default); // deprecated, left for backward compatibility
var KeenTracking = exports.KeenTracking = Keen;
exports.default = Keen;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ })
/******/ ]);
});
//# sourceMappingURL=keen-tracking.js.map

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);

const Error = __webpack_require__(23);

const React = __webpack_require__(2);

const http = __webpack_require__(3);

const mitt = __webpack_require__(10).default;

const events$ = mitt();
const state$ = mitt();
let state = {
  loading: true,
  sortBy: 'downloads'
};

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
    http.get(`/top?sortBy=${this.state.sortBy}`).then(res => setState(Object.assign({}, res, {
      loading: false
    }))).catch(err => setState(Object.assign({}, {
      err,
      loading: false
    })));
  }

  render() {
    if (this.state.err) {
      return React.createElement(Error, {
        message: this.state.err.message
      });
    }

    return React.createElement("div", null, React.createElement("h1", null, "Top 100 Packages Sorted By ", cap(this.state.sortBy)), React.createElement(PackageList, {
      loading: this.state.loading,
      packages: this.state.packages
    }));
  }

}

function PackageList(props) {
  if (props.loading) {
    return React.createElement("h1", null, "Loading...");
  }

  ;
  return React.createElement("div", null, React.createElement("div", {
    class: "row"
  }, React.createElement("div", {
    class: "count"
  }, "\xA0"), React.createElement("div", {
    class: "column"
  }, "Package"), React.createElement("div", {
    class: "column"
  }, "Dec 2018 Downloads"), React.createElement("div", {
    class: "column"
  }, "GitHub Stars")), props.packages.map((pkg, i) => {
    return React.createElement("div", {
      class: "row"
    }, React.createElement("div", {
      class: "count"
    }, i + 1), React.createElement("div", {
      class: "column"
    }, React.createElement("a", {
      href: `https://npmjs.com/package/${pkg._id}`
    }, pkg._id)), React.createElement("div", {
      class: "column"
    }, formatNumber(pkg.downloadsLastMonth)), React.createElement("div", {
      class: "column"
    }, React.createElement(Github, {
      pkg: pkg
    })));
  }));
}

React.render(React.createElement(Top, null), document.querySelector('#content'));

function cap(str) {
  if (!str) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.substr(1);
}

function Github({
  pkg
}) {
  if (pkg.github == null) {
    return React.createElement("span", null);
  }

  return React.createElement("a", {
    href: `https://github.com/${pkg.github.owner}/${pkg.github.repo}`
  }, formatNumber(pkg.github.numStars));
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

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(2);

module.exports = props => React.createElement("div", {
  class: "error-404"
}, React.createElement("h2", null, "Error"), React.createElement("img", {
  class: "error-gag-img",
  src: "/images/pooka.png"
}), React.createElement("div", {
  class: "error-gag"
}, "Life is Ruff"), React.createElement("h4", null, props.message));

/***/ })
/******/ ]);