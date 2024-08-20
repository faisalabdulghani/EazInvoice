import React from 'react';
import './style.css';


const TermsAndCondition = () => {

    return (


        <div className="terms-and-condition">
            <div className="contact-banner b w-full h-40 flex justify-center items-center">
                <p className="uppercase text-center text-white text-5xl font-extrabold">
                    terms and condition
                </p>
            </div>

            <div className="container mx-auto py-4 md:py-8 my-5 md:my-16">
                <div className="text-div w-full px-2 lg:px-8 flex flex-col gap-4">

                    <div className="text">
                        <span className="heading block">
                            Introduction
                        </span>
                        <p>Welcome to EazInvoice</p>
                    </div>
                    <div className="text" >
                        <p>These Terms & Conditions govern your use of EazInvoice App. By using the App, you agree to be bound by these Terms</p>
                    </div>

                    <div className="text">
                        <span className="heading block">
                            Use of the App
                        </span>
                        <p>
                            License: We grant you a limited, non-exclusive, non-transferable license to use the App for creating and managing invoices.
                        </p>
                        <p>
                            Prohibited Activities: You agree not to use the App for any illegal or unauthorized purpose, including violating any laws in your jurisdiction.
                        </p>
                    </div>

                    <div className="text">
                        <span className="heading block">
                            User Responsibilities                            </span>
                        <p>
                            Accuracy of Information: You are responsible for ensuring the accuracy of the information you enter into the App, including client details and invoices.
                        </p>
                        <p>
                            Account Security: You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                        </p>
                    </div>


                    <div className="text">
                        <span className="heading block">
                            Intellectual Property
                        </span>
                        <p>All content, templates, and features within the App are our intellectual property. You may not copy, modify, or distribute any part of the App without our permission.</p>                        </div>


                    <div className="text">
                        <span className="heading block">
                            Termination                            </span>
                        <p>
                            We reserve the right to suspend or terminate your access to the App if you violate these Terms.
                        </p>
                    </div>

                    <div className="text">
                        <span className="heading block">
                            Limitation of Liability
                        </span>
                        <p>
                            The App is provided without warranties of any kind. We are not liable for any damages arising from your use of the App, including lost profits or data.</p>
                    </div>

                    <div className="text">
                        <span className="heading block">
                            Modification of Terms
                        </span>
                        <p>We reserve the right to revise or amend these terms and conditions at our discretion, without prior notice. Your ongoing utilization of our products implies your acceptance of any alterations implemented.
                        </p>
                    </div>



                    <div className="text">
                        <span className="heading block">
                            Contact Information
                        </span>
                        <p>For inquiries or assistance, please don't hesitate to reach out to our friendly customer service team.
                        </p>

                    </div>

                    <div className="text">
                        <span className="heading block">
                            Agreement
                        </span>
                        <p>When you use EazInvoice, you affirm that you have thoroughly read, comprehended, and consented to adhere to the terms and conditions outlined herein. We appreciate your diligence in reviewing these provisions, as they govern your interactions with our services.
                        </p>
                    </div>

                    <div className="text" >

                        <p>
                            Thank you for your continued support, and we look forward to serving you responsibly and ethically.
                        </p>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default TermsAndCondition