import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div>
            <TailSpin
                height="40"
                width="40"
                color="#232359"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass="justify-center py-10"
                visible={true}
            />
        </div>
    );
};

export default Spinner;