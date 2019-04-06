import React, {Fragment, Component} from 'react'
import {connect} from "react-redux";
import {loadProducts} from "../../store/actions/product-list";
import ProductCard from '../../components/ProductCard/ProductCard';

class ProductList extends Component {
    componentDidMount() {
        this.props.loadProducts();
    }

    render() {
        return (
            <Fragment>
                <h1 className='font-weight-bolder text-center mt-4 display-4 '>Products:</h1>
                <div className='row'>
                {this.props.products.map(product => {
                    return <div className='col-xs-12 col-sm-6 col-lg-3 mt-3' key={product.id}>
                        <ProductCard product={product}/>
                    </div>
                })}
            </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => state.productList;
const mapDispatchToProps = (dispatch) => ({
    loadProducts: () => dispatch(loadProducts())
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductList)