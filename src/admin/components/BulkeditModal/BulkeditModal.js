import React from 'react';

const BulkeditModal = () => {
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
                            <div>
                                <label className='mr-4' htmlFor="exp_field">Extra Product Option:</label>
                                <select className='select select-bordered' name="exp_field" id="exp_field">
                                    <option selected value="null">Select</option>
                                    <option value="234823">Handstone Product Option</option>
                                </select>
                            </div>
                            <div className='mt-3'>
                                <label className='mr-[46px]' htmlFor="priceShow">Show/Hide Price:</label>
                                <select className='select select-bordered' name="priceShow" id="priceShow">
                                    <option selected value="null">Select</option>
                                    <option>Show</option>
                                    <option>Hide</option>
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