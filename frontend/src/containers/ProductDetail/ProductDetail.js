import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {loadProduct} from "../../store/actions/product-detail";
import '../../App.css'

class ProductDetail extends Component {
    componentDidMount() {
        this.props.loadProduct(this.props.match.params.id)
    }

    render() {
        if (!this.props.products) return null;
        return <div className="text-center">
            <h1 className='font-weight-bolder text-center mt-4 '>Details:</h1>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4">{this.props.products.name}</h1>
                    <span className='badge badge-danger m-2'>Description</span>
                    <p className="lead">{this.props.products.description}</p>
                    <p className='display-4 font-weight-bolder'>Photo</p>
                    {this.props.products.photos.map((photo, id) => <img className='product_image' src={photo.photo} alt='product' key={id}/>)}
                </div>
            </div>
            <NavLink to='/' className="btn btn-primary">some text</NavLink>
        </div>;
    }
}

const mapStateToProps = state => state.productDetail;
const mapDispatchToProps = (dispatch) => ({
    loadProduct: (id) => dispatch(loadProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);