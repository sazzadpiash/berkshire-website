import React from 'react';

const PaymentMethod = () => {
    return (
        <div>
            <h3 className='text-4xl font-sans mb-5'>Payment Methods</h3>
            <p className='text-sm text-black font-bold leading-6 tracking-wide font-sans mb-3'>Online Payment Methods:</p>
            <div tabIndex={0} className="mb-3 collapse collapse-arrow border border-base-300 bg-base-100 text-sm text-gray-500 leading-6 tracking-wide font-sans">
                <input type="checkbox" />
                <div className="collapse-title font-medium">
                    Online Banking E-transfer
                </div>
                <div className="collapse-content">
                    <p>
                        tBerkshire Furniture accepts E-Transfer through Online-Banking. You can send your deposit or balance payments by E-Transfer to our email. sales@berkshirefurniture.com
                    </p>
                    <p>
                        If you like to get more information on how it works, you can always call or email prior to making a purchase.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="mb-3 collapse collapse-arrow border border-base-300 bg-base-100 text-sm text-gray-500 leading-6 tracking-wide font-sans">
                <input type="checkbox" />
                <div className="collapse-title font-medium">
                    Credit Card (Visa-MasterCard-Amex-Discover)
                </div>
                <div className="collapse-content">
                    <p>
                        For online sales you can now pay by credit card. We have SSL certificate installed on our server so your information is safe. You can sign up your Visa for “Varified By Visa” or “Mastercard secured code”. Your credit card is also protected by fraud prevention of Authorized.net secure site. Online you can pay by: Visa-MasterCard-American Express & Discover
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="mb-3 collapse collapse-arrow border border-base-300 bg-base-100 text-sm text-gray-500 leading-6 tracking-wide font-sans">
                <input type="checkbox" />
                <div className="collapse-title font-medium">
                    Debit card with Visa or MasterCard
                </div>
                <div className="collapse-content">
                    <p>
                        If you wish to pay by Debit Visa, that is also possible. Just use your debite visa as you do you normally input a Visa card number and follow instructions.
                    </p>
                </div>
            </div>
            <p className='text-sm text-black font-bold leading-6 tracking-wide font-sans mb-3'>In-Store Payment Methods:</p>
            <div tabIndex={0} className="mb-3 collapse collapse-arrow border border-base-300 bg-base-100 text-sm text-gray-500 leading-6 tracking-wide font-sans">
                <input type="checkbox" />
                <div className="collapse-title font-medium">
                    Banking E-transfer
                </div>
                <div className="collapse-content">
                    <p>
                        Berkshire Furniture accepts E-Transfer through Online-Banking. You can send your deposit or balance payments by E-Transfer to our email. sales@berkshirefurniture.com
                    </p>
                    <p>
                        If you like to get more information on how it works, you can always call or email.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="mb-3 collapse collapse-arrow border border-base-300 bg-base-100 text-sm text-gray-500 leading-6 tracking-wide font-sans">
                <input type="checkbox" />
                <div className="collapse-title font-medium">
                    Credit Card (Visa-MasterCard-Amex)
                </div>
                <div className="collapse-content">
                    <p>
                        At the store, we take Visa – MasterCard-American Express.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="mb-3 collapse collapse-arrow border border-base-300 bg-base-100 text-sm text-gray-500 leading-6 tracking-wide font-sans">
                <input type="checkbox" />
                <div className="collapse-title font-medium">
                    Debit card with Visa or MasterCard
                </div>
                <div className="collapse-content">
                    <p>
                        At the store, you can pay by Debit card.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="mb-3 collapse collapse-arrow border border-base-300 bg-base-100 text-sm text-gray-500 leading-6 tracking-wide font-sans">
                <input type="checkbox" />
                <div className="collapse-title font-medium">
                Pay balance terminal
                </div>
                <div className="collapse-content">
                    <p>
                    For online payments only.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="mb-3 collapse collapse-arrow border border-base-300 bg-base-100 text-sm text-gray-500 leading-6 tracking-wide font-sans">
                <input type="checkbox" />
                <div className="collapse-title font-medium">
                Cash
                </div>
                <div className="collapse-content">
                    <p>
                    Yes, we take Cash!
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="mb-3 collapse collapse-arrow border border-base-300 bg-base-100 text-sm text-gray-500 leading-6 tracking-wide font-sans">
                <input type="checkbox" />
                <div className="collapse-title font-medium">
                Certified Cheque
                </div>
                <div className="collapse-content">
                    <p>
                    Only Certified cheques are accepted as a payment method if you wish to pay by Cheque.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;