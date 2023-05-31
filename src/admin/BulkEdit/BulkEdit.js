import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BulkeditModal from "../components/BulkeditModal/BulkeditModal";
import Header from "../components/Header/Header";

const BulkEdit = () => {
    // adding for select
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);

    // console.log(isCheck);

    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(allProducts.map(li => li.wcId));
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


    const [allProducts, setAllProducts] = useState([]);
    const [motherCategory, setMotherCategory] = useState([]);
    const [productCount, setProductCount] = useState(0);
    const [pagination, setPagination] = useState(0);
    const [productSkip, setProductSkip] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [filterOption, setFilterOption] = useState({});
    // console.log(pagination)
    useEffect(() => {
        setPagination(Array.from({ length: Math.ceil(productCount / 700) }, (_, i) => i + 1))
    }, [productCount])
    useEffect(() => {
        // https://berkshire-furniture.vercel.app/all-products
        // fetch(`http://localhost:5000/bulk-edit?skip=${productSkip}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setAllProducts(data.result);
        //         setProductCount(data.totallProduct);
        //     });

        // Make a request for a user with a given ID
        axios.get('http://localhost:5000/bulk-edit', {
            params: {
                option : filterOption,
                skip: productSkip
        }    
        })
            .then( (response) => {
                // handle success
                setAllProducts(response.data.result);
                setProductCount(response.data.totallProduct);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
           
    }, [productSkip, filterOption]);
    // load all mother category
    useEffect(() => {
        // fetch('https://berkshire-furniture.vercel.app/all-products')
        fetch(`http://localhost:5000/categories/0`)
            .then((res) => res.json())
            .then((data) => {
                setMotherCategory(data);
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
    console.log(filterOption);

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
            <div className="max-w-7xl mx-auto overflow-hidden p-5">
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
                                <th className="w-20">ID</th>
                                <th className="w-20">No.</th>
                                <th className="w-20">SKU</th>
                                <th className="w-28">Title</th>
                                <th className="w-20">Tags</th>
                                <th className="w-24">Price</th>
                                <th className="w-20">Sale Price</th>
                                <th className="w-52">Categories</th>
                                <th className="w-20">Status</th>
                                <th className="w-44">Price Show/Hide</th>
                                <th className="w-32">Add To Quote</th>
                                <th className="w-32">Extra Options</th>
                                <th className="w-40">Wholesale Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allProducts.map((singleProduct, i) => (
                                <tr key={singleProduct._id}>
                                    <th>
                                        <label>
                                            <input
                                                checked={isCheck.includes(singleProduct.wcId)}
                                                // eslint-disable-next-line no-restricted-globals
                                                onChange={() => handleClick(event, singleProduct.wcId)}
                                                type="checkbox"
                                                className="checkbox w-4 h-4"
                                            />
                                        </label>
                                    </th>
                                    {/* <th className='border-r p-0'><input type="text" defaultValue='ID' className='text-center w-full h-fit py-1' /></th> */}
                                    <th className="border-r">{singleProduct.wcId}</th>
                                    <th className="border-r">{i}</th>
                                    <th className="border-r overflow-hidden"><input type="text" defaultValue={singleProduct.sku} /></th>
                                    <th className="border-r overflow-hidden">
                                        {singleProduct.name}
                                    </th>
                                    <th className="border-r overflow-hidden">{singleProduct.tags.map((tag, i) => <span key={i}>{tag.name}, </span>)}</th>
                                    <th className="border-r overflow-hidden">{singleProduct.regular_price}</th>
                                    <th className="border-r overflow-hidden">{singleProduct.price}</th>
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
                                    <th className="border-r">{singleProduct.status}</th>
                                    <th className="border-r">
                                        Price Show/Hide
                                    </th>
                                    <th className="border-r">Quote</th>
                                    <th className="border-r">{singleProduct?.exp_options}</th>
                                    <th>Wholesale</th>
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
            <BulkeditModal></BulkeditModal>
        </div>
    );
};

export default BulkEdit;
