import React from 'react';

const OrderInformation = () => {
    return (
        <div>
            <h3 className='text-4xl font-sans mb-5'>Order Information</h3>
            <p className='text-sm text-gray-500 leading-6 tracking-wide font-sans'>
                Ordering furniture online is as easy is 1, 2, 3. There are 3 Steps in ordering furniture from Berkshire Furniture website.
                <br />
                <ol className='list-decimal ml-4 mt-3'>
                    <li>
                        Find the item you like and ADD TO YOUR CART, and Continue shopping if you wish.
                    </li>
                    <li>
                        Once shopping cart is filled and you are all done shopping (shipping destination is chosen) then click on CHECK OUT.
                    </li>
                    <li>
                        Check out is actually an invoice that you are used to seeing at retail store. Go ahead and fill as many areas as you need. At this point you must know the SHIPPING RATE, if you are in an area that shipping rate is not listed, please call the store to find out what it cost to ship. Keep in mind some destinations could be far from major cities therefore we need to obtain a quote from transport. Once all areas of invoice looks good to you, please click on SUBMIT. And you are done.
                    </li>
                </ol>
            </p>
            <br />
            <p className='leading-6 tracking-wide font-sans'>Here is the good part:</p>
            <p className='text-sm text-gray-500 leading-6 tracking-wide font-sans'>
                Do not worry if you made any mistake during your order. All orders will be reviewed on first priority and customers who placed ordered will be contacted either by email or phone to confirm all details. Even if you accidentally purchased an item that you did not mean to do so, it will be corrected on same day or the next business day after we speak to you.
            </p>
            <br />
            <p className='leading-6 tracking-wide font-sans'>Here is another good part:</p>
            <p className='text-sm text-gray-500 leading-6 tracking-wide font-sans'>
                Your payment is safe with us. If your payment received more than once or you were too fast with your fingers and click on items you did not wish to have on your shopping list, your money will be refunded the next day after we speak to you and sort things out.
            </p>
            <br />
            <p className='leading-6 tracking-wide font-sans'>Our Policy:</p>
            <p className='text-sm text-gray-500 leading-6 tracking-wide font-sans'>
                We try to be as fair and accommodating as possible so that both parties (you and us) will be happy.  We treat every customer with special respect and value. We believe in one proven word of wisdom: “Treat others like you wish to be treated.” That word of wisdom has been the foundation of our business ever since and has brought to us many, many wonderful customers.
                <br /><br />
                We have been so lucky to have thousands of great customers who trust us and are very comfortable doing business with us knowing that they will be taken care of in good times and bad times. And we enjoy working with all our customers.
            </p>
            <br />
            <p className='leading-6 tracking-wide font-sans'>Here is a quick list of our policies:</p>
            <p className='text-sm text-gray-500 leading-6 tracking-wide font-sans'>
                <ol>
                    <li>
                        1- Any order placed may be cancelled and fully refunded within the next business day without any penalty.
                    </li>
                    <li>
                        2- Any order placed may be cancelled and refunded less the processing fee of 3%  after 24 hours but within 48 hours, IF THE SHIPMENT HAS NOT BEEN RELEASED.
                    </li>
                    <li>
                        3- 30% to 50% restocking fee plus applicable tax will be charged if order is cancelled after 48 hours.
                    </li>
                    <li>
                        4-No cancellation or refund will be allowed for orders released for shipping either by our store or our suppliers. And no cancellations allowed for custom made & floor samples.
                    </li>
                </ol>
            </p>
        </div>
    );
};

export default OrderInformation;