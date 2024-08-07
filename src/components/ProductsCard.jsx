
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/heroSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div className="group relative">
      <div onClick={handleDetails} className="w-full h-80 sm:h-96 cursor-pointer overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImg"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-titleFont text-base font-bold">{product.title.substring(0, 20)}</h2>
          <div className="flex items-center gap-2">
            {product.oldPrice && (
              <p className="line-through text-gray-500">${product.oldPrice}
              </p>
            )}
            <p className="font-semibold">${product.price}</p>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <p
            onClick={() => {
              dispatch(
                addToCart({
                  _id: product._id,
                  title: product.title,
                  image: product.image,
                  price: product.price,
                  quantity: 1,
                  description: product.description,
                })
              );
              toast.success(`${product.title} is added`);
            }}
            className="w-[100px] sm:w-auto text-gray-500 hover:text-gray-900 flex items-center gap-1 cursor-pointer"
          >
            add to cart <BsArrowRight />
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-600">{product.category}</p>
        {product.isNew && (
          <p className="absolute top-2 right-2 bg-black text-white font-semibold font-titleFont px-4 py-1">
            Sale
          </p>
        )}
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ProductsCard;
