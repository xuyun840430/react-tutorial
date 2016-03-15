/**
 * Created by Information on 2016/2/5.
 * Demo of "Thinking in React" by by Pete Hunt
 */

/**
 * Step 1: break the UI into a component hierarchy:
 * Five components in our simple app. I've italicized the data each component represents.
 * 1. FilterableProductTable (orange): contains the entirety of the example
 * 2. SearchBar (blue): receives all user input
 * 3. ProductTable (green): displays and filters the data collection based on user input
 * 4. ProductCategoryRow (turquoise): displays a heading for each category
 * 5. ProductRow (red): displays a row for each product
 * Hierarchy:
 *   FilterableProductTable
      -SearchBar
      -ProductTable
        -ProductCategoryRow
        -ProductRow


 * Step 2: Build a static version in React:
 * The easiest way is to build a version that takes your data model and renders the UI but has
 * no interactivity. It's best to decouple these processes because building a static version requires
 * a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot
 * of typing.
 *
 * If you're familiar with the concept of state, don't use state at all to build this static version.
 * State is reserved only for interactivity, that is, data that changes over time. Since this is a static
 * version of the app, you don't need it.
 *
 * At the end of this step, you'll have a library of reusable components that render your data model.
 * The components will only have render() methods since this is a static version of your app. The component
 * at the top of the hierarchy (FilterableProductTable) will take your data model as a prop. If you make a change
 * to your underlying data model and call ReactDOM.render() again, the UI will be updated. It's easy to see how your
 * UI is updated and where to make changes since there's nothing complicated going on. React's one-way data flow
 * (also called one-way binding) keeps everything modular and fast.
 *
 *
 * Step 3: Identify the minimal (but complete) representation of UI state
 * To make your UI interactive, you need to be able to trigger changes to your underlying data model.
 * React makes this easy with state.
 *
 * To build your app correctly, you first need to think of the minimal set of mutable state that your app needs.
 * The key here is DRY: Don't Repeat Yourself. Figure out the absolute minimal representation of the state your
 * application needs and compute everything else you need on-demand.
 *
 * Think of all of the pieces of data in our example application. We have:
     -The original list of products
     -The search text the user has entered
     -The value of the checkbox
     -The filtered list of products
 * Let's go through each one and figure out which one is state. Simply ask three questions about each piece of data:
     1. Is it passed in from a parent via props? If so, it probably isn't state.
     2. Does it change over time? If not, it probably isn't state.
     3. Can you compute it based on any other state or props in your component? If so, it's not state.
 * The original list of products is passed in as props, so that's not state. The search text and the checkbox seem
 * to be state since they change over time and can't be computed from anything. And finally, the filtered list of
 * products isn't state because it can be computed by combining the original list of products with the search text and
 * value of the checkbox. So finally, our state is:
     -The search text the user has entered
     -The value of the checkbox
 *
 *
 * Step 4: Identify where your state should live
 * We need to identify which component mutates, or owns, this state.
 * Remember: React is all about one-way data flow down the component hierarchy. It may not be immediately clear which
 * component should own what state. This is often the most challenging part for newcomers to understand, so follow
 * these steps to figure it out:
 * For each piece of state in your application:
 * Identify every component that renders something based on that state.
     -Find a common owner component (a single component above all the components that need the state in the hierarchy).
     -Either the common owner or another component higher up in the hierarchy should own the state.
     -If you can't find a component where it makes sense to own the state, create a new component simply for
      holding the state and add it somewhere in the hierarchy above the common owner component.
 *
 * Let's run through this strategy for our application:
     -ProductTable needs to filter the product list based on state and SearchBar needs to display the search text and
      checked state.
     -The common owner component is FilterableProductTable.
     -It conceptually makes sense for the filter text and checked value to live in FilterableProductTable
 * Cool, so we've decided that our state lives in FilterableProductTable. First, add a getInitialState() method to
 * FilterableProductTable that returns {filterText: '', inStockOnly: false} to reflect the initial state of your
 * application. Then, pass filterText and inStockOnly to ProductTable and SearchBar as a prop. Finally, use these props
 * to filter the rows in ProductTable and set the values of the form fields in SearchBar.
 *
 * You can start seeing how your application will behave: set filterText to "ball" and refresh your app.You'll see that
 * the data table is updated correctly.
 *
 */

/*
 To build a static version of your app that renders your data model,
 you'll want to build components that reuse other components and pass data using props.
 */
var ProductCategoryRow = React.createClass({
  render: function() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
});

var ProductRow = React.createClass({
  render: function() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
});

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    }.bind(this));
    return (
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var SearchBar = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    );
  },
  render: function() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
});

var FilterableProductTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      inStockOnly: false
    };
  },

  handleUserInput: function(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  },

  render: function() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
});


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);