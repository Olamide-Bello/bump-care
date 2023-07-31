import React from 'react'
import './PrivacyPolicy.css'
import Privacy from './Privacy.png'

function PrivacyPolicy() {
    return (
        <div className='privacy'>
            <div className='privacy-hd'>
                <h5>Privacy Policy</h5>
                <img src={Privacy} alt='lock' />
            </div>
            <div className='privacy-bd'>
                <div>
                    <p>
                        At BumpCare, we value your privacy and are committed to protecting it.
                        This Privacy Policy explains how we collect, use, and protect the personal
                        information you provide to us when using our website.
                    </p>
                </div>
                <div>
                    <h5>Information We Collect</h5>
                    <p>When you use our website, we may collect the following types of personal information:</p>
                    <ul>
                        <li>
                            Name and contact information, such as email address and phone number, when you
                            contact us or sign up for our newsletter.
                        </li>
                        <li>
                            Information about your location when you want use our map to help you find hospitals
                            with gynecologists close to you.
                        </li>
                        <li>
                            Information about your use of our website, such as pages visited and search queries,
                            to improve our services and user experience.
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>How We Use Your Information</h5>
                    <p>We use your personal information to provide you with the best possible user experience on our website. Specifically,
                        we may use your information for the following purposes:
                    </p>
                    <ul>
                        <li>
                            To help you find gynecologists that are relevant to your pregnancy status and location.
                        </li>
                        <li>
                            To send you newsletters and other communications about our website, services, and promotions.
                        </li>
                        <li>
                            To improve our website, services, and user experience by analyzing user behavior and preferences.
                        </li>
                    </ul>
                    <p>We will not share your personal information with third parties unless we have your explicit
                        consent or are required to do so by law.
                    </p>
                </div>
                <div>
                    <h5>How We Protect Your Information</h5>
                    <p>
                        We take reasonable measures to protect your personal information from unauthorized access, use, and disclosure.
                        We use industry-standard security measures, such as encryption and firewalls, to protect your information.
                    </p>
                </div>
                <div>
                    <h5>Your Rights</h5>
                    <p>You have the right to access, update, and delete the personal information we hold about you. You can do this by
                        contacting us using the contact information provided below.<br /><br />
                        You can also unsubscribe from our newsletters and other communications at any time by clicking the “unsubscribe”
                        link at the bottom of the email.
                    </p>
                </div>
                <div>
                    <h5>Changes to This Privacy Policy</h5>
                    <p>We may update this Privacy Policy from time to time. When we do, we will post the revised policy on our website and
                        update the “Last Updated” date at the top of this policy.
                    </p>
                </div>
                <div id='contact'>
                    <h5>Contact Us</h5>
                    <p>If you have any questions about this Privacy Policy or our data practices, please contact us at <span className='p-diff'><a href='/'>support@Bumpcare.com</a> or 09057171458</span></p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy