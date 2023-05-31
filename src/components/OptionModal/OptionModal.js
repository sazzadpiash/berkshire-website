import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";

const OptionModal = ({ optionId, variation, setVariation, setOptionId }) => {
    const [option, setOption] = useState({});
    const [selectedOption, setSelectedOption] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://berkshire-furniture.vercel.app/option/${optionId}`)
            .then((res) => res.json())
            .then((data) => {
                setOption(data);
                setLoading(false);
            });
    }, [optionId]);

    const optionClicled = (w, next) => {
        setVariation([ ...variation, `${[option?.option_name]}: ${w}` ]);
        setSelectedOption(next)
    }
    const nextClick = (next) => {
        if (selectedOption) {
            setOptionId(selectedOption);
        }
    }
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
                            <label htmlFor="option-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            {
                                selectedOption !== null ? <>
                                    <h3 className="text-lg font-bold">
                                        Select: {option?.option_name}
                                    </h3>
                                    <ul className="mt-5">
                                        {option?.options.map((singleOption, i) => (
                                            <li
                                                key={i}
                                            >
                                                <button onClick={() => optionClicled(singleOption.name, singleOption.next)} className="flex text-left focus:border-primary gap-3 border-2 p-3 mb-2 rounded-lg w-full">
                                                    <img
                                                        className="w-20 rounded-lg"
                                                        src={singleOption.img}
                                                        alt=""
                                                    />
                                                    {singleOption.name}
                                                </button>

                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-right mt-3">
                                        <button onClick={() => nextClick()} className="btn rounded-lg">Next</button>
                                    </div>
                                </>
                                    :
                                    <>
                                        <h3 className="text-lg font-bold">
                                            Select: {option?.option_name}
                                        </h3>
                                        <ul className="mt-5">
                                            {option?.options.map((singleOption, i) => (
                                                <li
                                                    key={i}
                                                >
                                                    <button onClick={() => optionClicled(singleOption.name, singleOption.next)} className="flex text-left focus:border-primary gap-3 border-2 p-3 mb-2 rounded-lg w-full">
                                                        <img
                                                            className="w-20 rounded-lg"
                                                            src={singleOption.img}
                                                            alt=""
                                                        />
                                                        {singleOption.name}
                                                    </button>

                                                </li>
                                            ))}
                                        </ul>
                                        <div className="text-right mt-3">
                                            <label htmlFor="option-modal" className="btn rounded-lg">Done</label>
                                        </div>
                                    </>
                            }

                        </label>
                    </label>
                </div>
            )}
        </div>
    );
};

export default OptionModal;
