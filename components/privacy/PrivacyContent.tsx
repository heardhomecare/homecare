import React from 'react';
import Link from 'next/link';

const PrivacyContent: React.FC = () => {
    return (
        <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-[var(--brand-green)] prose-a:text-[var(--brand-tan)] hover:prose-a:text-[var(--brand-green)] prose-strong:text-[var(--brand-green)]">
                    <h2 className="text-3xl font-bold mb-4 font-serif text-[var(--brand-green)]">Heard Home Care Privacy Policy</h2>
                    <p className="text-sm uppercase tracking-widest text-[var(--brand-tan)] font-bold mb-8">Effective Date: 12/16/2024</p>
                    
                    <p className="lead">Heard Home Care is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information, and describes your rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA). See additional detail on SMS specific privacy immediately following our general privacy policy.</p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">1. Information We Collect</h3>
                    <p>We may collect the following types of personal information:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                        <li>Personal Identifiers: Name, email address, phone number, etc.</li>
                        <li>Internet or Other Electronic Network Activity Information: Browsing history, search history, and interactions with our website.</li>
                        <li>Geolocation Data: Physical location or movements.</li>
                        <li>Commercial Information: Records of products or services purchased, obtained, or considered.</li>
                        <li>Demographic Information: Age, gender, etc.</li>
                        <li>Inferences: Information drawn from other personal data to create a profile.</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">2. How We Use Your Information</h3>
                    <p>We may use the information we collect for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                        <li>To provide, improve, and personalize our services.</li>
                        <li>To communicate with you, respond to your inquiries, and provide customer support.</li>
                        <li>To comply with legal obligations and enforce our terms and policies.</li>
                        <li>To send marketing communications (with your consent where required).</li>
                        <li>For business analysis and development purposes.</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">3. How We Share Your Information</h3>
                    <p>We may share your personal information with the following categories of third parties:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                        <li>Service Providers: Companies that help us with website operations, marketing, analytics, etc.</li>
                        <li>Business Partners: For joint promotions or collaborations.</li>
                        <li>Legal Authorities: When required by law or to protect our rights.</li>
                        <li>Other Third Parties: As described in this Privacy Policy.</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">4. Your California Privacy Rights</h3>
                    <p>As a California resident, you have the following rights under the CCPA/CPRA:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                        <li>Right to Know: You can request information about the personal data we collect, use, and share.</li>
                        <li>Right to Delete: You can request that we delete your personal data (with some exceptions).</li>
                        <li>Right to Opt-Out: <em className="text-[var(--brand-green)] font-bold">We do not sell your personal information</em>. If we begin selling personal information in the future, we will provide a clear opt-out mechanism, such as a “Do Not Sell My Personal Information” link.</li>
                        <li>Right to Correct: You can request that we correct inaccurate personal information.</li>
                        <li>Right to Non-Discrimination: We will not discriminate against you for exercising your rights under the CCPA/CPRA.</li>
                    </ul>
                    <p>To exercise these rights, please contact us at: <a href="mailto:care@heard-homecare.com" className="text-[var(--brand-tan)] hover:text-[var(--brand-green)] transition-colors">care@heard-homecare.com</a> or <strong>925-644-7472</strong>. You may also designate an authorized agent to make a request on your behalf.</p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">5. Data Retention</h3>
                    <p>We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">6. Security</h3>
                    <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no security system is completely impenetrable, and we cannot guarantee the absolute security of your information.</p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">7. Third-Party Links</h3>
                    <p>Our website may contain links to third-party websites. These websites are not operated or controlled by us, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites you visit.</p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">8. Changes to This Privacy Policy</h3>
                    <p>We may update this Privacy Policy from time to time. When we make changes, we will update the “Effective Date” at the top of the policy. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">9. Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy or wish to exercise your rights under the CCPA/CPRA, please contact us at:</p>
                    <div className="bg-[var(--brand-cream)] p-8 rounded-[2rem] not-prose mb-12 border border-[var(--brand-tan)]/10 shadow-lg">
                        <p className="font-serif font-bold text-[var(--brand-green)] text-xl mb-2">Heard Home Care</p>
                        <p className="text-gray-700">150 North Wiget Lane STE 100</p>
                        <p className="text-gray-700">Walnut Creek, CA 94598</p>
                        <p className="text-gray-700 mt-4 font-bold"><a href="tel:9256447472" className="text-[var(--brand-green)] hover:text-[var(--brand-tan)] transition-colors">(925) 644-7472</a></p>
                        <p className="text-gray-700 font-bold"><a href="mailto:care@heard-homecare.com" className="text-[var(--brand-green)] hover:text-[var(--brand-tan)] transition-colors">care@heard-homecare.com</a></p>
                    </div>

                    <hr className="my-16 border-gray-100" />

                    <h2 className="text-3xl font-bold mb-4 font-serif text-[var(--brand-green)]">SMS Privacy Policy</h2>
                    <p className="text-sm uppercase tracking-widest text-[var(--brand-tan)] font-bold mb-8">Effective Date: 12/16/2024</p>
                    
                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">Introduction</h3>
                    <p>At Heard Home Care, we value your privacy and are committed to protecting your personal information, including compliance with the <strong>California Consumer Privacy Act (CCPA)</strong> and the <strong>California Privacy Rights Act (CPRA)</strong>. This Privacy Policy explains how we collect, use, and share your personal data when you interact with our SMS services, and describes your rights under California privacy laws.</p>
                    <p>By opting in to receive SMS messages from us, you agree to the terms of this Privacy Policy. Please read it carefully, especially the sections describing your rights as a California resident.</p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">1. Information We Collect</h3>
                    <p>We may collect the following types of personal information from California residents:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                        <li>Personal Information: Your phone number, name, email address, or any other information you voluntarily provide when subscribing to our SMS service.</li>
                        <li>SMS Interaction Data: Information about your interactions with our SMS messages, such as response times, click-through rates, and other engagement metrics.</li>
                        <li>Device Information: Data regarding the device you use to receive SMS messages (e.g., device model, operating system).</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">2. How We Use Your Information</h3>
                    <p>We may use the personal information we collect for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                        <li>To send transactional, marketing, or promotional messages via SMS.</li>
                        <li>To respond to your inquiries and provide customer support.</li>
                        <li>To analyze SMS engagement for improving our services.</li>
                        <li>To comply with legal obligations and protect our rights.</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">3. Categories of Personal Information Disclosed to Third Parties</h3>
                    <p>We may disclose the following categories of personal information to third parties:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                        <li>Personal Information (e.g., name, phone number, email address).</li>
                        <li>SMS Interaction Data (e.g., message engagement, click-through rates).</li>
                    </ul>
                    <p>We share this information with service providers who assist in delivering SMS services, such as SMS gateway providers. To comply with legal obligations and protect our rights.</p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">4. Your California Privacy Rights</h3>
                    <p>As a California resident, you have the following rights under the <strong>CCPA</strong> and <strong>CPRA</strong>:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                        <li>Right to Know: You have the right to request information about the categories and specific pieces of personal information we have collected about you.</li>
                        <li>Right to Delete: You have the right to request the deletion of your personal information.</li>
                        <li>Right to Opt-Out of Sale: <strong className="text-[var(--brand-green)] font-bold italic text-sm">We do not sell your personal information</strong>.</li>
                        <li>Right to Correct: You have the right to request that we correct any inaccurate personal information.</li>
                        <li>Right to Non-Discrimination: We will not discriminate against you for exercising any of your CCPA or CPRA rights.</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">5. How We Protect Your Information</h3>
                    <p>We use a combination of technical, administrative, and physical security measures to protect your personal information.</p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">6. Opt-Out</h3>
                    <p>If you no longer wish to receive SMS messages from us, you can opt-out by:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700 font-bold italic">
                        <li>Replying “STOP” to any SMS message we send.</li>
                        <li>Contacting us directly at: <a href="mailto:care@heard-homecare.com" className="text-[var(--brand-tan)] hover:text-[var(--brand-green)]">care@heard-homecare.com</a></li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">7. Sharing of Personal Information</h3>
                    <p>We do not sell your personal information to third parties.</p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">8. Data Retention</h3>
                    <p>We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.</p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">9. Changes to This Privacy Policy</h3>
                    <p>We reserve the right to modify or update this Privacy Policy at any time.</p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 font-serif text-[var(--brand-green)]">10. Contact Us</h3>
                    <div className="bg-[var(--brand-cream)] p-8 rounded-[2rem] not-prose mb-12 border border-[var(--brand-tan)]/10 shadow-lg">
                        <p className="font-serif font-bold text-[var(--brand-green)] text-xl mb-2">Heard Home Care</p>
                        <p className="text-gray-700">150 North Wiget Lane STE 100</p>
                        <p className="text-gray-700">Walnut Creek, CA 94598</p>
                        <p className="text-gray-700 mt-4 font-bold"><a href="tel:9256447472" className="text-[var(--brand-green)] hover:text-[var(--brand-tan)] transition-colors">(925) 644-7472</a></p>
                        <p className="text-gray-700 font-bold"><a href="mailto:care@heard-homecare.com" className="text-[var(--brand-green)] hover:text-[var(--brand-tan)] transition-colors">care@heard-homecare.com</a></p>
                    </div>

                    <hr className="my-16 border-gray-100" />

                    <h2 className="text-3xl font-bold mb-8 font-serif text-[var(--brand-green)]">SMS Terms & Conditions</h2>
                    
                    <h3 className="text-xl font-bold mb-4 font-serif text-[var(--brand-green)]">SMS Consent Communication:</h3>
                    <p className="text-gray-700">The information (Phone Numbers) obtained as part of the SMS consent process will not be shared with third parties for marketing purposes.</p>

                    <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-[var(--brand-green)]">Types of SMS Communications:</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700 font-bold italic">
                        <li>Schedule changes</li>
                        <li>Service updates</li>
                        <li>In response to your questions</li>
                    </ul>

                    <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-[var(--brand-green)]">Message Frequency:</h3>
                    <p className="text-gray-700">Message frequency may vary depending on the type of communication. For example, you may receive up to 5 SMS messages per week related to your account or in response to your questions.</p>

                    <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-[var(--brand-green)]">Potential Fees:</h3>
                    <p className="text-gray-700">Standard message and data rates may apply, depending on your carrier’s pricing plan.</p>

                    <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-[var(--brand-green)]">Opt-In Method:</h3>
                    <p><Link href="/contact" className="font-bold underline text-[var(--brand-tan)] hover:text-[var(--brand-green)] transition-colors">By submitting an online form.</Link></p>

                    <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-[var(--brand-green)]">Opt-Out Method:</h3>
                    <p className="text-gray-700 font-bold italic">You can opt out of receiving SMS messages at any time. To do so, simply reply “STOP” to any SMS message you receive.</p>

                    <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-[var(--brand-green)]">Help:</h3>
                    <p className="text-gray-700">If you are experiencing any issues, you can reply with the keyword HELP. Or, you can get help directly from us at <a href="mailto:care@heard-homecare.com" className="text-[var(--brand-tan)] hover:text-[var(--brand-green)]">care@heard-homecare.com</a>.</p>

                    <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-[var(--brand-green)]">Standard Messaging Disclosures:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 font-bold italic">
                        <li>Message and data rates may apply</li>
                        <li>You can opt out at any time by texting “STOP”</li>
                        <li>For assistance, text “HELP”</li>
                        <li>Message frequency may vary</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PrivacyContent;
