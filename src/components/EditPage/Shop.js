import React from "react"
import { connect } from "react-redux"
import { addShop, deleteShop } from "../../redux/actions/actions";

function Shops (props) {
    let input;
    return (
        <>
        <div className="shop-list">
            <ul>
                {props.shops.map(element => {
                    return <li key={element.id}>{element.text}</li>
                })}
            </ul>
        </div>
        <div className="shop-btns">
            <input type='text' ref={e => (input = e)} />
            <button onClick={e => {
                e.preventDefault();
                if (!input.value.trim()) return false;
                props.addClick(input.value.trim(), props.shops.length + 1);
            }}>add</button>
            <button onClick={e => props.deleteClick(props.shops.length)}>delete</button>
        </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        shops: state.shops,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addClick: (text, id) => dispatch(addShop(text, id)),
        deleteClick: (id) => dispatch(deleteShop(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shops);