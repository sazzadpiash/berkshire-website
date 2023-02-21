import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";

const OptionModal = ({ optionId }) => {
    const [option, setOption] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://berkshire-furniture.vercel.app/option/${optionId}`)
            .then((res) => res.json())
            .then((data) => {
                setOption(data);
                setLoading(false);
            });
    }, [optionId]);
    return (
        <div>
            {loading ? (
                <Spinner></Spinner>
            ) : (
                <div>
                    <input
                        type="checkbox"
                        id="option-modal"
                        className="modal-toggle"
                    />
                    <label
                        htmlFor="option-modal"
                        className="modal cursor-pointer"
                    >
                        <label className="modal-box relative rounded">
                            <h3 className="text-lg font-bold">
                                Select: {option?.option_name}
                            </h3>
                            <ul className="mt-5">
                                {option?.options.map((singleOption, i) => (
                                    <li
                                        key={i}
                                        className="flex gap-3 border-2 p-3 rounded-lg"
                                    >
                                        <img
                                            className="w-28 rounded-lg"
                                            src={singleOption.img}
                                            alt=""
                                        />
                                        {singleOption.name}
                                    </li>
                                ))}
                            </ul>
                            <div className="text-right mt-3">
                                <button className="btn rounded-lg">Next</button>
                            </div>
                        </label>
                    </label>
                </div>
            )}
        </div>
    );
};

export default OptionModal;
