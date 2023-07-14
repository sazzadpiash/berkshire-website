import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BulkeditModal from "../components/BulkeditModal/BulkeditModal";
import Header from "../components/Header/Header";

const BulkEdit = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [motherCategory, setMotherCategory] = useState([]);
    const [productCount, setProductCount] = useState(0);
    const [pagination, setPagination] = useState(0);
    const [productSkip, setProductSkip] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [filterOption, setFilterOption] = useState({});
    const [allOption, setAllOption] = useState([]);
    // adding for select
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);

    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(allProducts.map(li => li._id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };
    const handleClick = (event, id) => {
        const { checked } = event.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };
    // sellect end

    useEffect(() => {
        setPagination(Array.from({ length: Math.ceil(productCount / 700) }, (_, i) => i + 1))
    }, [productCount])
    useEffect(() => {
        axios.get('http://localhost:5000/bulk-edit', {
            params: {
                option: filterOption,
                skip: productSkip
            }
        })
            .then((response) => {
                // handle success
                setAllProducts(response.data.result);
                setProductCount(response.data.totallProduct);
                // console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        axios.get('http://localhost:5000/option/GETALL')
            .then((response) => {
                setAllOption(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [productSkip, filterOption]);

    // load all mother category
    useEffect(() => {
        fetch(`http://localhost:5000/categories/GETALL`)
            .then((res) => res.json())
            .then((data) => {
                setMotherCategory(data.filter(item => item.parent === 0));
            });
    }, []);

    // funtion for product page select option start
    const handleSelectPage = (e) => {
        setProductSkip(e.target.value * 700);
        setCurrentPage(parseInt(e.target.value) + 1);
    }
    // funtion for product page select option end


    // function for filter mother category start
    const selectMotherCat = (e) => {
        e.preventDefault();
        // setMotherCategoryFilter(e.target.mothercat.value);
        setFilterOption({
            "categories.id": parseInt(e.target.mothercat.value)
        })
    }
    // function for filter mother category end

    // fuction for hide price start
    const handleTrueFlase = (product, type, event) => {
        if (type === 'price_hide') {
            // /product/edit/price_show_hide/
            fetch(`http://localhost:5000/product/edit/price_show_hide/${product?._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ hide: event.target.checked }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.acknowledged) {
                        setAllProducts(
                            allProducts.map(item => {
                                if (item._id === product?._id) {
                                    item.price_hide = !event.target.checked
                                }
                                return item;
                            })
                        );
                    }

                });
        }
        if (type === 'quote') {
            // /product/edit/price_show_hide/
            fetch(`http://localhost:5000/product/edit/quote/${product?._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ quote: event.target.checked }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.acknowledged) {
                        setAllProducts(
                            allProducts.map(item => {
                                if (item._id === product?._id) {
                                    console.log(item);
                                    item.quote = !event.target.checked
                                }
                                return item;
                            })
                        );
                    }

                });
        }
    }
    // fuction for hide price end

    return (
        <div>
            <Header title="Bulk Edit"></Header>
            <div className="max-w-7xl mx-auto p-5">
                <div className="border-2 rounded-xl p-5 mt-10">
                    <form onSubmit={selectMotherCat} className="grid grid-cols-6 gap-5">
                        {/* <input
                            type="text"
                            placeholder="Category"
                            className="input input-sm input-bordered rounded-lg"
                        /> */}
                        <select className="select-sm select select-bordered w-30" name="mothercat" id="motherCategoryList">
                            <option defaultValue value={null}>Select</option>
                            {
                                motherCategory &&
                                motherCategory.map(singleMotherCategory => <option key={singleMotherCategory._id} value={singleMotherCategory?.id}>{singleMotherCategory.name}</option>)
                            }
                        </select>

                        <button type="submit" className="btn btn-sm rounded">Get Products</button>
                    </form>
                </div>
            </div>
            <div className="px-5">
                <div className="flex justify-between">
                    <div>
                        <label htmlFor="bulk-edit" className="btn btn-sm rounded">Edit Selected Product</label>
                    </div>
                    <div>
                        <span className="rounded bg-primary mr-7 text-white p-4">Page: {currentPage}</span>
                        <select onChange={handleSelectPage} className="select select-bordered w-30" name="page" id="buulkproduct_page">
                            <option defaultValue>Select</option>
                            {
                                pagination &&
                                pagination.map(options => <option key={options} value={options - 1}>{options}</option>)
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="mx-auto overflow-hidden p-5">
                <div className="overflow-auto h-96 rounded-lg border">
                    <table className="table table-compact table-fixed w-full">
                        <thead>
                            <tr>
                                <th className="w-10">
                                    <label>
                                        <input
                                            onChange={handleSelectAll}
                                            type="checkbox"
                                            className="checkbox w-4 h-4"
                                        />
                                    </label>
                                </th>
                                <th className="w-20 text-xs">ID</th>
                                <th className="w-40 text-xs">SKU</th>
                                <th className="w-56 text-xs">Title</th>
                                <th className="w-32 text-xs">Tags</th>
                                <th className="w-24 text-xs">Price</th>
                                <th className="w-20 text-xs">Sale Price</th>
                                <th className="w-52 text-xs">Categories</th>
                                <th className="w-20 text-xs">Status</th>
                                <th className="w-28 text-xs text-center">Hide Price</th>
                                <th className="w-20 text-xs text-center">Quote</th>
                                <th className="w-52 text-xs">Extra Options</th>
                                <th className="w-40 text-xs">Wholesale Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allProducts.map((singleProduct, i) => (
                                <tr key={singleProduct._id}>
                                    <th>
                                        <label>
                                            <input
                                                checked={isCheck.includes(singleProduct._id)}
                                                // eslint-disable-next-line no-restricted-globals
                                                onChange={() => handleClick(event, singleProduct._id)}
                                                type="checkbox"
                                                className="checkbox w-4 h-4"
                                            />
                                        </label>
                                    </th>
                                    {/* <th className='border-r p-0'><input type="text" defaultValue='ID' className='text-center w-full h-fit py-1' /></th> */}
                                    <th className="border-r">{singleProduct.wcId}</th>
                                    {/* <th className="border-r">{i}</th> */}
                                    <th className="border-r text-xs overflow-hidden"><input readOnly type="text" defaultValue={singleProduct.sku} /></th>
                                    <th className="border-r text-xs overflow-hidden">
                                        {singleProduct.name}
                                    </th>
                                    <th className="border-r text-xs text-center overflow-hidden">{singleProduct.tags.map((tag, i) => <span key={i}>{tag.name}, </span>)}</th>
                                    <th className="border-r text-xs text-center overflow-hidden">{singleProduct.regular_price}</th>
                                    <th className="border-r text-xs text-center overflow-hidden">{singleProduct.price}</th>
                                    <th className="border-r text-xs text-center overflow-hidden">
                                        <p className="text-xs">
                                            {singleProduct.categories
                                                .map(
                                                    (category) =>
                                                        `${category.name}`
                                                )
                                                .join(", ")}
                                        </p>
                                    </th>
                                    <th className="border-r text-xs">{singleProduct.status}</th>
                                    <th className="border-r text-xs text-center">
                                        <input
                                            type="checkbox"
                                            onChange={(e) => handleTrueFlase(singleProduct, "price_hide", e)}
                                            checked={singleProduct?.price_hide}
                                            className="form-checkbox h-5 w-5 text-indigo-600"
                                        />
                                    </th>
                                    <th className="border-r text-xs text-center">
                                        <input
                                            type="checkbox"
                                            onChange={(e) => handleTrueFlase(singleProduct, "quote", e)}
                                            checked={singleProduct?.quote}
                                            className="form-checkbox h-5 w-5 text-indigo-600"
                                        />
                                    </th>
                                    <th className="border-r text-xs">
                                        {/* {console.log(allOption.map(item=>item?.option_id === singleProduct?.product_option))} */}
                                        {/* {console.log(singleProduct?.product_option)} */}
                                        {/* {console.log(singleProduct?.product_option === "234825")} */}
                                        {
                                            allOption.find(item => console.log(item.option_id === singleProduct?.product_option))
                                        }
                                        {/* {singleProduct?.product_option} */}
                                        {allOption.find(item => item.option_id === singleProduct.product_option)?.option_for}
                                    </th>
                                    <th>Wholesale</th>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot >
                            <tr className="text-xs">
                                <th className="w-10">
                                    <label>
                                        <input
                                            onChange={handleSelectAll}
                                            type="checkbox"
                                            className="checkbox w-4 h-4"
                                        />
                                    </label>
                                </th>
                                <th className="w-20 text-xs">ID</th>
                                <th className="w-40 text-xs">SKU</th>
                                <th className="w-56 text-xs">Title</th>
                                <th className="w-32 text-xs">Tags</th>
                                <th className="w-24 text-xs">Price</th>
                                <th className="w-20 text-xs">Sale Price</th>
                                <th className="w-52 text-xs">Categories</th>
                                <th className="w-20 text-xs">Status</th>
                                <th className="w-28 text-xs text-center">Hide Price</th>
                                <th className="w-20 text-xs text-center">Quote</th>
                                <th className="w-52 text-xs">Extra Options</th>
                                <th className="w-40 text-xs">Wholesale Price</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <BulkeditModal isCheck={isCheck} allProducts={allProducts} setAllProducts={setAllProducts}></BulkeditModal>
        </div>
    );
};

export default BulkEdit;
