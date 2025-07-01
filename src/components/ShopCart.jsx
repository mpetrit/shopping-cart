import { useOutletContext } from "react-router-dom";
import "../styles/ShopCart.css";
const ShopCart = () => {
  const { listOfItems, setListOfItems } = useOutletContext();
  console.log(listOfItems);
  let totalItem = 0;
  let totalTax = 0;
  return (
    <main className="shopping-cart">
      {listOfItems.length == 0 ? (
        <h2> Nothing added yet!</h2>
      ) : (
        <>
          <div className="checkout-group">
            <h3>Order summary</h3>
            <p>
              Total of items: $
              {
                (totalItem = listOfItems
                  .reduce(
                    (acc, curr) => (acc += curr.item.price * curr.quantity),
                    0
                  )
                  .toFixed(2))
              }
            </p>
            <p>
              Tax: $
              {
                (totalTax = (
                  (listOfItems.reduce(
                    (acc, curr) => (acc += curr.item.price * curr.quantity),
                    0
                  ) /
                    100) *
                  20
                ).toFixed(2))
              }
            </p>
            <p>
              Total of items: {console.log(totalItem, totalTax)}$
              {(Number(totalItem) + Number(totalTax)).toFixed(2)}
            </p>
            <button disabled>Checkout</button>
          </div>
          <div className="checkout-items">
            {listOfItems.map((objItem, index) => (
              <div key={index} className="item-card">
                <div className="item-card-img-cont">
                  <img src={objItem.item.image} alt="" />
                </div>
                <div className="item-card-info">
                  <p>{objItem.item.title}</p>
                  <p>Price: ${objItem.item.price}</p>
                  <p>Total: ${objItem.item.price * objItem.quantity}</p>

                  {/* price only shown for the visuals */}
                  <p>Rating: {objItem.item.rating.rate}☆</p>
                  <div className="quantity-control">
                    <button
                      onClick={() =>
                        setListOfItems((prevQ) =>
                          prevQ.map((el, i) =>
                            index === i
                              ? {
                                  item: el.item,
                                  quantity: Math.max(0, el.quantity - 1),
                                }
                              : el
                          )
                        )
                      }
                    >
                      -
                    </button>
                    <p>{objItem.quantity}</p>
                    <button
                      onClick={() =>
                        setListOfItems((prevQ) =>
                          prevQ.map((el, i) =>
                            index === i
                              ? {
                                  item: el.item,
                                  quantity: Math.max(0, el.quantity + 1),
                                }
                              : el
                          )
                        )
                      }
                    >
                      {" "}
                      +
                    </button>
                  </div>
                  <button
                    onClick={() =>
                      setListOfItems((prevQ) =>
                        prevQ.filter((el, i) => i !== index)
                      )
                    }
                  >
                    {" "}
                    Delete Item
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default ShopCart;
