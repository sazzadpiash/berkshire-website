import React from 'react';

const BulkeditModal = ({ isCheck, allProducts, setAllProducts }) => {

    const hidePrice = (e) => {
        fetch(`https://berkshire-furniture.vercel.app/product/bulk/edit/price_show_hide`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productIds: isCheck, price_hide: e.target.value }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    const updatedProducts = allProducts.map((product) => {
                        if (isCheck.includes(product._id)) {
                            return { ...product, price_hide: e.target.value === "true" };
                        }
                        return product;
                    });
                    setAllProducts(updatedProducts);
                }

            });
    }
    const quote = (e) => {
        fetch(`https://berkshire-furniture.vercel.app/product/bulk/edit/quote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productIds: isCheck, quote: e.target.value }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    const updatedProducts = allProducts.map((product) => {
                        if (isCheck.includes(product._id)) {
                            return { ...product, quote: e.target.value === "true" };
                        }
                        return product;
                    });
                    setAllProducts(updatedProducts);
                }

            });
    }

    const extra_product_option = (e) => {
        fetch(`https://berkshire-furniture.vercel.app/product/bulk/edit/product_option`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productIds: isCheck, product_option: e.target.value }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    const updatedProducts = allProducts.map((product) => {
                        if (isCheck.includes(product._id)) {
                            return { ...product, product_option: e.target.value };
                        }
                        return product;
                    });
                    setAllProducts(updatedProducts);
                }
            });
    }

    return (
        // exp_options
        <div>
            <input
                type="checkbox"
                id="bulk-edit"
                className="modal-toggle"
            />
            <label
                htmlFor="bulk-edit"
                className="modal cursor-pointer"
            >
                <label className="modal-box relative rounded">
                    <form>
                        <label htmlFor="bulk-edit" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div>
                            <div className='grid grid-cols-2 mt-5'>
                                <label className='mr-4 my-auto' htmlFor="exp_field">Extra Product Option:</label>
                                <select onChange={(e) => extra_product_option(e)} className='select select-bordered' name="exp_field" id="exp_field" defaultValue="null" >
                                    <option value="null">Select</option>
                                    <option value="547856">Handstone Product Option</option>
                                    <option value="234824">Verbois Product Option</option>
                                    <option value="234825">JLM Product Option</option>
                                    <option value="234826">JB Product Option</option>
                                    <option value="234827">ELITE DESIGN Option</option>
                                    <option value="234828">MAP FURNITURE Option</option>
                                    <option value="234829">DYNASTY Option</option>
                                    <option value="234830">MATTRESSES Option</option>
                                </select>
                            </div>
                            <div className='grid grid-cols-2 mt-4'>
                                <label className='mr-[46px] my-auto' htmlFor="priceShow">Hide Price:</label>
                                <select onChange={(e) => hidePrice(e)} className='select select-bordered' name="priceShow" id="priceShow" defaultValue="null" >
                                    <option value="null">Select</option>
                                    <option value={true}>True</option>
                                    <option value={false}>False</option>
                                </select>
                            </div>
                            <div className='grid grid-cols-2 mt-4'>
                                <label className='mr-[46px] my-auto' htmlFor="quote">Quote:</label>
                                <select onChange={(e) => quote(e)} className='select select-bordered' name="quote" id="quote" defaultValue="null" >
                                    <option value="null">Select</option>
                                    <option value={true}>True</option>
                                    <option value={false}>False</option>
                                </select>
                            </div>
                        </div>
                    </form>

                </label>
            </label>
        </div>
    );
};

export default BulkeditModal;