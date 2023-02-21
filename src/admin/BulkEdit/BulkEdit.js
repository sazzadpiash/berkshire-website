import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header/Header";

const BulkEdit = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [productCount, setProductCount] = useState(0);
    useEffect(() => {
        // fetch('https://berkshire-furniture.vercel.app/all-products')
        fetch("http://localhost:5000/bulk-edit")
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data.result);
                setProductCount(data.totallProduct);
            });
    }, []);
    console.log(allProducts);
    return (
        <div>
            <Header title="Bulk Edit"></Header>
            <div className="max-w-7xl mx-auto">
                <div className="border-2 rounded-xl p-5 mt-10">
                    <form>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered rounded-lg"
                        />
                    </form>
                </div>
            </div>
            <div className="max-w-7xl mt-10 mx-auto overflow-hidden">
                <div className="overflow-auto h-96 rounded-lg border">
                    <table className="table table-compact table-fixed w-full">
                        <thead>
                            <tr>
                                <th className="w-10">
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox w-4 h-4"
                                        />
                                    </label>
                                </th>
                                <th className="w-20">ID</th>
                                <th className="w-20">SKU</th>
                                <th className="w-28">Title</th>
                                <th className="w-20">Tags</th>
                                <th className="w-24">Price</th>
                                <th className="w-20">Sale Price</th>
                                <th className="w-52">Categories</th>
                                <th className="w-20">Status</th>
                                <th className="w-44">Price Show/Hide</th>
                                <th className="w-32">Add To Quote</th>
                                <th className="w-40">Wholesale Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allProducts.map((singleProduct, i) => (
                                <tr key={singleProduct._id}>
                                    <th>
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="checkbox w-4 h-4"
                                            />
                                        </label>
                                    </th>
                                    {/* <th className='border-r p-0'><input type="text" defaultValue='ID' className='text-center w-full h-fit py-1' /></th> */}
                                    <th className="border-r">ID</th>
                                    <th className="border-r">SKU</th>
                                    <th className="border-r overflow-hidden">
                                        {singleProduct.name}
                                    </th>
                                    <th className="border-r">Tags</th>
                                    <th className="border-r">Price</th>
                                    <th className="border-r">Sale Price</th>
                                    <th className="border-r overflow-hidden">
                                        <p className="text-xs">
                                            {singleProduct.categories
                                                .map(
                                                    (category) =>
                                                        `${category.name}`
                                                )
                                                .join(", ")}
                                        </p>
                                    </th>
                                    <th className="border-r">Status</th>
                                    <th className="border-r">
                                        Price Show/Hide
                                    </th>
                                    <th className="border-r">Add To Quote</th>
                                    <th>Wholesale Price</th>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox w-4 h-4"
                                        />
                                    </label>
                                </th>
                                <th>ID</th>
                                <th>SKU</th>
                                <th>Title</th>
                                <th>Tags</th>
                                <th>Reguler Price</th>
                                <th>Sale Price</th>
                                <th>Categories</th>
                                <th>Status</th>
                                <th>Price Show/Hide</th>
                                <th>Add To Quote</th>
                                <th>Wholesale Price</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BulkEdit;
