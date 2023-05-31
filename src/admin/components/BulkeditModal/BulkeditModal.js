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
                    <label htmlFor="bulk-edit" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <div>
                            <label htmlFor="exp_field">Extra Product Option:</label>
                            <select className='select' name="exp_field" id="exp_field">
                                <option value="234823">Handstone Product Option</option>
                            </select>
                        </div>
                    </div> 
                </label>
            </label>
        </div>
    );
};

export default BulkeditModal;