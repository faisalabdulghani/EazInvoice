import React from 'react';
import './style.css';


const PrivacyPolicy = () => {


    return (
        <div>


            <div className="privacy-policy">
                <div className="contact-banner b w-full h-40 flex justify-center items-center">
                    <p className="uppercase text-center text-white text-5xl font-extrabold">
                        privacy policy
                    </p>
                </div>

                <div className="container mx-auto py-4 md:py-8 my-5 md:my-16">
                    <div className="text-div w-full px-2 lg:px-8 flex flex-col gap-4">
                        <div className="text">
                            <p>Welcome to EazInvoice. We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and share your information when you use our app. You agree to the terms of this Privacy Policy.</p>
                        </div>

                        <div className="text">
                            <span className="heading block">
                                Information We Collect
                            </span>
                            <p>Personal Information: We collect personal information that you provide, such as your name, email address, and client profiles (including logos and business details). This information is used solely for creating and managing your invoices.</p>
                            <p>Usage Data: We collect data about how you use the app, including the features you use, the time you spend on the app, and crash reports. This data helps us improve the app's performance and user experience.</p>
                        </div>

                        <div className="text">
                            <span className="heading block">
                                How We Use Your Information
                            </span>
                            <p> Provide Services: We use the information collected to enable you to create and manage invoices, including storing client profiles and generating PDFs.</p>
                            <p> Communicate with You: We may use your contact information to send important updates, respond to your inquiries, and provide customer support.</p>                        </div>

                        <div className="text">
                            <span className="heading block">
                                Sharing Your Information
                            </span>
                            <p>
                                We do not share your personal information with third parties, except as required by law or to protect our rights.
                            </p>
                        </div>

                        <div className="text">
                            <span className="heading block">
                                Data Security
                            </span>
                            <p>We implement reasonable security measures to protect your information from unauthorized access or disclosure. However, please note that no method of transmission over the internet is completely secure.</p>
                        </div>
                        <div className="text">
                            <span className="heading block">
                                Your Rights
                            </span>
                            <p>You have the right to access, correct, or delete your personal information. You can manage your data through the app settings or contact us directly for assistance.</p>                        </div>

                        <div className="text">
                            <span className="heading block">
                                Changes to This Policy
                            </span>
                            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy within the app.</p>                        </div>

                        <div className="text">
                            <span className="heading block">
                                Changes to this Privacy Policy
                            </span>
                            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated Privacy Policy on our website. Your continued use of our website or products after the posting of changes constitutes your acceptance of those changes.</p>
                        </div>

                        <div className="text">
                            <span className="heading block">
                                Contact Us
                            </span>
                            <p>If you have any questions or concerns about this Privacy Policy or our data practices. We are committed to addressing your inquiries promptly and transparently.</p>
                        </div>

                        <div className="text" >
                            <p>Your privacy is important to us, and we are dedicated to protecting the confidentiality and security of your personal information.By using our app, you trust us with your data, and we take that responsibility seriously.We will continue to strive for transparency, accountability, and compliance with privacy laws to maintain your trust and confidence in EazInvoice.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy