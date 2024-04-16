import React from "react";
import styles from "../../style";

const PrivacyPolicy = () => {
  return (
    <div
      className={`flex md:flex-col ${styles.paddingY} ${styles.paddingX} flex-col expertise-Bg`}
    >
      <div className="flex flex-col items-center">
        <div className="flex md:flex-row items-center flex-col justify-center gap-[1rem]">
          <div className={`flex-col text-center md:gap-[2rem] gap-0`}>
            <div className="flex flex-col justify-between items-center pb-[4rem]">
              <span className="font-inter font-[700] md:text-[72px] text-[44px] text-gradient md:leading-[84px] leading-[48px]">
                Privacy Policy
              </span>

              <p className="md:w-[702px] md:h-[56px] w-[341px] h-[32px] font-inter font-[500] mt-4 text-dimWhite md:text-[18px] text-[12px] md:leading-[28px] leading-[16px]">
                Please read the privacy policy carefully prior to using or
                registering on the platform or accessing any material,
                information or availing any services through the platform.
              </p>
            </div>

            <div className={`flex flex-col gap-2 md:pb-[4rem] md:w-[1190px]`}>
              <div className="flex flex-col">
                <span
                  className="font-inter font-[700] md:text-[50px] text-[25px]
                    text-gradient-2 leading-[51px] md:w-[635px] md:h-[60px] w-[365px] h-[40px] text-start"
                >
                  1. Collection of Information:
                </span>

                <div className="flex flex-col gap-[2rem] text-start px-[0.5rem]">
                  <span
                    className="font-inter font-[400] text-dimWhite md:text-[18px] text-[12px] md:leading-[28px] sm:leading-[17px]
                   leading-[16px] md:text-start mt-2"
                  >
                    We collect Your Personal Information (defined below) from
                    You when You register or set up an Account with Us on the
                    Platform. You shall be required to set up an Account on the
                    Platform as per the Terms and provide all information as
                    provided in this Privacy Policy if You wish to avail
                    Services from Us.
                  </span>

                  <span className="text-dimWhite md:text-[18px] text-[12px] text-start">
                    This Privacy Policy applies to the following information:
                  </span>
                </div>

                <div className="flex flex-col text-start py-4 gap-4">
                  <span className="md:w-[160px] md:h-[20px] text-lightWhite font-[500] text-[22px]">
                    (i) <span className="underline">Information:</span>
                  </span>
                  <span className="text-dimWhite md:w-full text-start md:px-[2rem] px-[1rem]">
                    You give Us: You may provide certain information to Us
                    voluntarily while registering on Our Platform for availing
                    Our Services, such as mobile number, Permanent Account
                    Number (“PAN”), name, identification document, images and
                    videos etc.
                  </span>
                  <span className="text-dimWhite text-start md:px-[2rem] px-[1rem] md:w-full">
                    We may also ask You for certain financial information,
                    including details of Your bank account, Indian financial
                    system code (IFSC) of bank, and/or other payment related
                    details or other payment method data, and debit instructions
                    to process the Services and access to your contacts list. We
                    may ask You to provide certain additional information about
                    Yourself on a case-to-case basis. All information disclosed
                    by You shall be deemed to be disclosed willingly and without
                    any coercion. No liability pertaining to the authenticity /
                    genuineness / misrepresentation / fraud / negligence of the
                    information disclosed shall lie on the Company nor will the
                    Company be in any way responsible to verify any information
                    obtained from You.
                  </span>
                </div>

                <div className="flex flex-col text-start py-4 gap-4">
                  <span className="md:w-[300px] md:h-[20px] text-lightWhite font-[500] text-[22px]">
                    (ii){" "}
                    <span className="underline">Non-Personal Information:</span>
                  </span>
                  <span className="text-dimWhite text-start md:px-[2.3rem] px-[1rem] md:w-full">
                    We may also collect non – personal information such as Your
                    internet protocol address, geographic location, operating
                    system, browser type and version, length of visit, page
                    views, website navigation etc. which will not identify with
                    You specifically{" "}
                    <span className="text-lightWhite">
                      (“Non – Personal Information”)
                    </span>
                    , while You browse, access, or use the Platform. We receive
                    and store Non – Personal Information by the use of data
                    collection devices such as “cookies” on certain pages of the
                    Platform in order to help and analyse Our web – page flow,
                    track user trends, measure promotional effectiveness, and
                    promote trust and safety. We offer certain additional
                    features on the Platform that are only available through the
                    use of a “cookie”. We place both permanent and temporary
                    cookies in Your computer/mobile device’s storage drive.
                  </span>
                </div>

                <div className="flex flex-col text-start py-4 gap-4">
                  <span className="md:w-[300px] md:h-[20px] text-lightWhite font-[500] text-[22px]">
                    (iii){" "}
                    <span className="underline">
                      Transactional Information:
                    </span>
                  </span>
                  <span className="text-dimWhite text-start md:px-[2.4rem] px-[1rem] md:w-full">
                    When You choose to avail Services on the Platform, or when
                    You make any payments to Us or when You receive any payments
                    from Us for any reason whatsoever, We may collect Your bank
                    account details and the details of the transaction
                    undertaken by You on the Platform{" "}
                    <span className="text-lightWhite">
                      (“Transactional Information”)
                    </span>
                    . We shall track Your transactions on the Platform for the
                    purposes including but not limited to point out any
                    suspicious Transactions/activity on the Platform. All
                    Transactional Information gathered by Us shall be stored on
                    servers, log files and any other storage system owned by Us
                    or by third parties such as payment aggregators/payment
                    gateways in India. Our primary goal in doing so is to
                    provide You a safe, efficient, smooth and customised
                    experience on the Platform.
                  </span>
                </div>

                <div className="flex flex-col text-start py-4 gap-4">
                  <span className="md:w-[230px] md:h-[20px] text-lightWhite font-[500] text-[22px]">
                    (iv) <span className="underline">Other Information:</span>
                  </span>
                  <span className="text-dimWhite text-start md:px-[2.8rem] px-[1rem] md:w-full">
                    In addition to the Personal Information, Non-Personal
                    Information and Transactional Information, We may also
                    request You to provide other information as and when
                    necessary{" "}
                    <span className="text-lightWhite">
                      (“Other Information”)
                    </span>
                    . We also seek specific permissions from You such as
                    permissions to use the camera or microphone of Your device
                    which enables Us to provide Services to You in a smooth and
                    efficient manner. The Other Information collected by us may
                    include inter alia <br /> <span className="text-white">(a)</span> Data either created by You or by a
                    third party and which You wish to store on Our Platform
                    and/or servers such as image files, documents etc.; <br /> <span className="text-white">(b)</span> Data
                    available in public domain or received from any third party
                    including social media channels, including but not limited
                    to Personal or Non-Personal Information from Your linked
                    email address etc. as a part of Your Account information;
                    <br /> <span className="text-white">(c)</span> copies of government identification like driving
                    licence, election card etc. (as and when required); and <br /> <span className="text-white">(d)</span>
                    such other information as may be reasonably required for the
                    purpose of providing Services to You or as required under
                    any law for the time being in force.
                  </span>

                  <span className="text-dimWhite text-start md:px-[2.8rem] px-[1rem] md:w-full">
                    Once You give us your Personal Information, You are not
                    anonymous to Us. Wherever possible, while providing the
                    information to Us, We indicate which fields are mandatory
                    and which fields are optional for You. You always have the
                    option to not provide the Personal Information to Us through
                    the Platform by choosing to not use a particular Service or
                    feature being provided by Us on the Platform, which requires
                    You to provide such information.
                  </span>

                  <span className="text-dimWhite text-start md:px-[2.8rem] px-[1rem] md:w-full">
                    We shall be entitled to retain Your Personal Information and
                    other information for such duration as may be required for
                    the purposes specified hereunder and will be used by Us only
                    in accordance with this Privacy Policy. You acknowledge that
                    if We determine that any information You have provided or
                    uploaded violates the terms of this Privacy Policy, We have
                    the right, in our absolute discretion, to delete or destroy
                    such information without incurring any liability to You.
                  </span>
                </div>
              </div>
            </div>

            <div className={`flex flex-col gap-2 md:pb-[4rem] md:w-[1190px]`}>
              <div className="flex flex-col">
                <span
                  className="font-inter font-[700] md:text-[50px] text-[25px]
                    text-gradient-2 leading-[51px] md:w-[635px] md:h-[60px] w-[365px] h-[40px] text-start"
                >
                  2. Use of Information:
                </span>

                <div className="flex flex-col gap-[2rem] text-start px-[0.5rem]">
                  <span
                    className="font-inter font-[400] text-dimWhite md:text-[18px] text-[14px] md:leading-[28px] sm:leading-[17px]
                   leading-[16px] text-start mt-2"
                  >
                    We use the Personal Information, Non-Personal Information,
                    Transactional Information and Other information provided by
                    You for the following:
                    <br /> <span className="text-lightWhite">(i)</span> to provide and
                    improve the Services and features on the Platform;{" "}
                    <span className="text-lightWhite"><br /> (ii)</span> to resolve
                    disputes and troubleshoot problems;{" "}
                    <span className="text-lightWhite"><br /> (iii)</span> to promote
                    Your safety and the safety of other individuals using the
                    Platform; <span className="text-lightWhite"><br /> (iv)</span> to
                    protect the security and integrity of the Platform and the
                    Services;<br />  <span className="text-lightWhite">(v)</span> to
                    inform You about online and offline offers, products,
                    services, and updates;{" "}
                    <br /> <span className="text-lightWhite">(vi)</span> to customise
                    Your experience on the Platform;{" "}
                    <br /> <span className="text-lightWhite">(vii)</span> to detect,
                    prevent and protect Us from any errors, fraud and other
                    criminal or prohibited activity on the Platform;{" "}
                    <br /> <span className="text-lightWhite">(viii)</span> to enforce
                    and inform about Our Terms;{" "}
                    <br /> <span className="text-lightWhite">(ix)</span> to process
                    and fulfil Your request for Services or respond to Your
                    comments, and queries on the Platform;{" "}
                    <br /> <span className="text-lightWhite">(x)</span> to contact
                    You;
                    <br /> <span className="text-lightWhite">(xi)</span> to communicate
                    important notices or changes in the Services provided by Us
                    or in the use of the Platform and the terms which govern the
                    relationship between You and Us;
                    <br /> <span className="text-lightWhite"> (xii)</span> to analyse
                    usage patterns; and{" "}
                    <br /> <span className="text-lightWhite">(xii)</span> for any other
                    any reason incidental to the reasons listed above; and for
                    any other purpose with your consent.
                  </span>

                  <span className="text-dimWhite">
                    You also specifically agree and consent to Us collecting,
                    storing, processing, transferring, and sharing information
                    (including Personal Information) related to You with third
                    parties such as with entities registered under applicable
                    laws solely for providing Services to You including
                    processing Your Transactions on the Platform.
                  </span>

                  <span className="text-dimWhite">
                    Provided that, the third party entities shall be bound by
                    contractual obligations to keep such information
                    confidential and use it only for the purposes for which We
                    disclose it to them.
                  </span>

                  <span className="text-dimWhite">
                    We may automatically track certain information about You
                    based upon Your behaviour on the Platform. We use this
                    information to do internal research on Your demographics,
                    interests, and behaviour to better understand, protect and
                    serve You. This information is compiled and analysed by the
                    Company on an aggregated and anonymized basis and not
                    individually, and in a manner that does not specifically
                    identify You.
                  </span>

                  <span className="text-dimWhite">
                    We may occasionally ask You to complete optional online
                    surveys. These surveys may ask You for Your contact
                    information and demographic information (like zip code, age,
                    or income level). We use this information to tailor Your
                    experience on the Platform, providing You with content that
                    We think You might be interested in and to display content
                    according to Your preferences. We use Your Personal
                    Information to send You promotional emails, however, We will
                    provide You the ability to opt-out of receiving such emails
                    from Us. If You opt out, We may still send You
                    non-promotional emails, such as emails about the Services
                    and Your Account on the Platform.
                  </span>
                </div>
              </div>
            </div>

            <div className={`flex flex-col gap-2 md:pb-[4rem] md:w-[1190px]`}>
              <div className="flex flex-col">
                <span
                  className="font-inter font-[700] md:text-[50px] text-[25px]
                    text-gradient-2 leading-[51px] md:w-[635px] md:h-[60px] w-[365px] h-[40px] text-start"
                >
                  3. Retention of Information:
                </span>

                <div className="flex flex-col gap-[2rem] text-start px-[0.5rem]">
                  <span
                    className="font-inter font-[400] text-dimWhite md:text-[18px] text-[13px] md:leading-[28px] sm:leading-[17px]
                   leading-[16px] text-start mt-2"
                  >
                    All information provided by You, save and except upon
                    withdrawal or termination, shall be retained in locations
                    outside the direct control of the Company (for instance, on
                    servers or databases co-locates with hosting providers). We
                    will delete information based on a request received from you
                    within a reasonable period and latest within 90 (ninety)
                    days of receiving a deletion request. However, we may retain
                    such portion of information and for such periods as may be
                    required under applicable law. Notwithstanding anything
                    contained herein, We may retain data after account deletion
                    for reasons including but limited to the following purposes:
                    <br /> <span className="text-lightWhite">(i)</span> if there is an
                    unresolved issue relating to your Account, or an unresolved
                    claim or dispute;{" "}
                    <br /> <span className="text-lightWhite">(ii)</span> if We are
                    required to by applicable law; and/or in aggregated and/or
                    anonymized form; or{" "}
                    <br /> <span className="text-lightWhite">(iii)</span> Company may
                    also retain certain information if necessary for its
                    legitimate business interests, such as fraud prevention and
                    enhancing safety and security of individuals using the
                    Platform.
                  </span>
                </div>
              </div>
            </div>

            <div className={`flex flex-col gap-2 md:pb-[4rem] md:w-[1190px]`}>
              <div className="flex flex-col">
                <span
                  className="font-inter font-[700] md:text-[50px] text-[25px]
                    text-gradient-2 leading-[51px] md:w-[635px] md:h-[60px] w-[365px] h-[40px] text-start"
                >
                  4. Sharing of Information:
                </span>

                <div className="flex flex-col gap-[2rem] text-start px-[0.5rem]">
                  <span
                    className="font-inter font-[400] text-dimWhite md:text-[18px] text-[13px] md:leading-[28px] sm:leading-[17px]
                   leading-[16px] text-start mt-2"
                  >
                    We may disclose Your Personal Information to Our third party
                    vendors, partnered institutions, consultants, and such other
                    individuals bound by contractual obligations to keep such
                    Personal Information confidential and use it only for the
                    purposes for which We disclose it to them. This disclosure
                    may be required for Us, for instance, to provide You access
                    to Our Services, or processing payments made by You, or to
                    validate Your bank accounts and Account information, to
                    facilitate and assist Our marketing and advertising
                    activities/initiatives, for undertaking auditing or data
                    analysis, or to prevent, detect, mitigate, and investigate
                    fraudulent or illegal activities related to Our Services.
                    <br />
                    Additionally, We may disclose Your information, to the
                    extent necessary:{" "}
                    <br /> <span className="text-lightWhite">(i)</span> to comply with
                    applicable laws and to respond to lawful requests and legal
                    process,<br />  <span className="text-lightWhite">(ii)</span> to
                    protect the rights and property of the Company, individuals
                    using the Platform, and others, including to enforce the
                    Terms, and <br />  <span className="text-lightWhite">(iii)</span> in
                    an emergency to protect the personal safety and assets of
                    the Company, individuals using the Platform, or any person.
                    <br />
                    We may, in compliance with applicable laws,
                    share/transfer/assign all of Your Personal Information and
                    other information with any other business entity(ies), in
                    the event of a merger, sale, re-organization, amalgamation,
                    joint ventures, assignment, restructuring of business or
                    transfer or disposition of all or any portion of Our
                    business. <br />
                    You hereby grant Us consent to share Your information with
                    third parties, as mentioned hereinabove and We shall in no
                    manner be responsible or be under any obligation to inform
                    You or seek additional consent from You for such sharing of
                    information.
                    <br />
                    Further, You agree and acknowledge that You shall strictly
                    keep all information of other individuals confidential and
                    shall not disclose such information to any third party
                    unless expressly consented to by the individual whose
                    information is being disclosed. In no circumstance
                    whatsoever will We be responsible or liable for any breach
                    of confidentiality by You or other individuals on the
                    Platform.
                  </span>
                </div>
              </div>
            </div>

            <div className={`flex flex-col gap-2 md:pb-[4rem] md:w-[1190px]`}>
              <div className="flex flex-col">
                <span
                  className="font-inter font-[700] md:text-[50px] text-[25px]
                    text-gradient-2 leading-[51px] md:w-[935px] md:h-[60px] w-[365px] h-[40px] text-start"
                >
                  5. Security Precautions and Measures:
                </span>

                <div className="flex flex-col gap-[2rem] text-start px-[0.5rem]">
                  <span
                    className="font-inter font-[400] text-dimWhite md:text-[18px] text-[13px] md:leading-[28px] sm:leading-[17px]
                   leading-[16px] text-start mt-2"
                  >
                    Our Platform has reasonable security measures and safeguards
                    in place to protect Your privacy and Personal Information
                    from loss, misuse, unauthorised access, disclosure,
                    destruction, and alteration of the information in compliance
                    with applicable laws. Further, whenever You change or access
                    Your Account on the Platform or any information relating to
                    it, We offer the use of a secure server. We cannot however
                    ensure or warrant the security of any information You
                    transmit to the Company or guarantee that Your Personal
                    Information and/or other Non-Personal Information provided
                    for availing the Services or Platform may not be accessed,
                    disclosed, altered, or destroyed by a breach of any of Our
                    security measures and safeguards. It is further clarified
                    that You have, for so long as You access and/or use the
                    Platform{" "}
                    <span className="text-lightWhite">
                      (directly or indirectly)
                    </span>{" "}
                    the obligation to ensure that You shall at all times take
                    adequate physical, managerial, and technical safeguards, at
                    Your end, to preserve the integrity and security of Your
                    data which shall include and not be limited to Your Personal
                    Information.
                    <br />
                    This Privacy Policy and the security controls and practices
                    implemented by Us to Protect Your Personal Information shall
                    be the reasonable security practices and procedures under
                    section 43A of the Information Technology Act, 2000
                  </span>
                </div>
              </div>
            </div>

            <div className={`flex flex-col gap-2 md:pb-[4rem] md:w-[1190px]`}>
              <div className="flex flex-col">
                <span
                  className="font-inter font-[700] md:text-[50px] text-[25px]
                    text-gradient-2 leading-[51px] md:w-[1035px] md:h-[100px] w-[365px] h-[40px] text-start"
                >
                  6. Links to Other Third – party Sites and collection of
                  information
                </span>

                <div className="flex flex-col gap-[2rem] text-start px-[0.5rem]">
                  <span
                    className="font-inter font-[400] text-dimWhite md:text-[18px] text-[13px] md:leading-[28px] sm:leading-[17px]
                   leading-[16px] text-start mt-2"
                  >
                    Our Platform may provide links to other third – party
                    Platforms (“Third – Party Sites”) that may collect Your
                    Personal Information including Your IP Address, browser
                    specification, or operating system. We are not in any manner
                    responsible for the security of such information or their
                    privacy practices or content of those Third – Party Sites.
                    Additionally, You may also encounter “cookies” or other
                    similar devices on certain pages of the Third – Party Sites
                    and it is hereby clarified that We do not control the use of
                    cookies by these Third – Party Sites. These third-party
                    service providers and Third-Party Sites may have their own
                    privacy policies governing the storage and retention of Your
                    information that You may be subject to. This Privacy Policy
                    does not govern any information provided to, stored on, or
                    used by these third-party providers and Third-Party Sites.
                    We recommend that when You enter a Third-Party Site, You
                    review the Third-Party Site’s privacy policy as it relates
                    to safeguarding of Your information. You agree and
                    acknowledge that We are not liable for the information
                    published in search results or by any Third-Party Sites.
                  </span>
                </div>
              </div>
            </div>

            <div className={`flex flex-col gap-2 md:pb-[4rem] md:w-[1190px]`}>
              <div className="flex flex-col">
                <span
                  className="font-inter font-[700] md:text-[50px] text-[25px]
                    text-gradient-2 leading-[51px] md:w-[1035px] md:h-[100px] w-[365px] h-[40px] text-start"
                >
                  7. Your Consent and Changes to Privacy Policy
                </span>

                <div className="flex flex-col gap-[2rem] text-start px-[0.5rem]">
                  <span
                    className="font-inter font-[400] text-dimWhite md:text-[18px] text-[13px] md:leading-[28px] sm:leading-[17px]
                   leading-[16px] text-start mt-2"
                  >
                    <span className="underline text-lightWhite font-[700]">
                      Withdrawal of consent:
                    </span>{" "}
                    You may choose to withdraw Your consent provided hereunder
                    at any point in time. Such withdrawal of the consent must be
                    sent in writing to info@copartner.in. In case You do not
                    provide Your consent or later withdraw Your consent, We
                    request you not to access the Platform and use the Services.
                    We reserve the right to not provide You any Services on the
                    Platform upon the withdrawal of Your consent. In such a
                    scenario, We may delete Your information or de-identify it
                    so that it is anonymous and not attributable to You. In the
                    event, We retain Your information post the withdrawal or
                    cancellation of Your consent, it shall only be for the
                    period permitted under applicable laws. We may continue to
                    retain Your information, if required under Applicable Law.
                  </span>
                </div>

                <div className="flex flex-col gap-[2rem] text-start px-[0.5rem]">
                  <span
                    className="font-inter font-[400] text-dimWhite md:text-[18px] text-[13px] md:leading-[28px] sm:leading-[17px]
                   leading-[16px] md:text-start mt-2 "
                  >
                    <span className="underline text-lightWhite font-[700]">
                      Correcting inaccuracies in the information:
                    </span>{" "}
                    You may correct or update any information online. In the
                    event of loss of access details, You may retrieve the same
                    or receive new access details by sending an e-mail to:
                    <span className="text-[#2F539B] cursor-pointer">
                      info@copartner.in
                    </span>
                  </span>
                </div>

                <div className="flex flex-col gap-[2rem] text-start px-[0.5rem]">
                  <span
                    className="font-inter font-[400] text-dimWhite md:text-[18px] text-[13px] md:leading-[28px] sm:leading-[17px]
                   leading-[16px] text-start mt-2"
                  >
                    <span className="underline text-lightWhite font-[700]">
                      Changes To Our Privacy Policy:
                    </span>{" "}
                    We reserve the unconditional right to change, modify, add,
                    or remove portions of this Privacy Policy at any time, by
                    notifying You of such changes. Any changes or updates will
                    be effective immediately. Your continued usage of the
                    Platform post such changes or updates, will serve as your
                    unqualified acceptance of such changes or updates. You
                    should review this Privacy Policy regularly for changes. You
                    can determine if changes have been made by checking the
                    “Last Updated” legend above.
                  </span>
                </div>
              </div>
            </div>

            <div className={`flex flex-col gap-2 md:pb-[4rem] md:w-[1190px]`}>
              <div className="flex flex-col">
                <span
                  className="font-inter font-[700] md:text-[50px] text-[25px]
                    text-gradient-2 leading-[51px] md:w-[735px] md:h-[60px] w-[365px] h-[40px] text-start"
                >
                  8. Grievance Officer
                </span>

                <div className="flex flex-col gap-[2rem] text-start px-[0.5rem]">
                  <span
                    className="font-inter font-[400] text-dimWhite md:text-[18px] text-[13px] md:leading-[28px] sm:leading-[17px]
                   leading-[16px] text-start"
                  >
                    If You have any grievance with respect to the Platform or
                    the Services, You may write to the grievance officer, the
                    name and contact details have been provided below published
                    in search results or by any Third-Party Sites.
                  </span>

                  <span
                    className="font-inter font-[400] text-dimWhite md:text-[18px] text-[11px] md:leading-[28px] sm:leading-[17px]
                   leading-[16px] text-start"
                  >
                    Name: Anshu Hooda
                  </span>

                  <span
                    className="font-inter font-[400] text-dimWhite md:text-[18px] text-[11px] md:leading-[28px] sm:leading-[17px]
                   leading-[16px] text-start"
                  >
                    Email: <span className="text-[#2F539B] cursor-pointer">info@copartner.in</span>
                  </span>

                  <span
                    className="font-inter font-[400] text-dimWhite md:text-[18px] text-[13px] md:leading-[28px] sm:leading-[17px]
                   leading-[16px] text-start"
                  >
                    We assure You that We shall ensure implementation of the
                    Privacy Policy, make the Privacy Policy available to
                    individuals and put our best efforts to redress Your
                    grievances expeditiously within 15 (fifteen) days from the
                    date of receipt of the grievance.
                  </span>
                </div>
              </div>
            </div>

            <div className={`flex flex-col gap-2 md:pb-[4rem] md:w-[1190px]`}>
              <div className="flex flex-col">
                <span
                  className="font-inter font-[700] md:text-[50px] text-[25px]
                    text-gradient-2 leading-[51px] md:w-[735px] md:h-[60px] w-[365px] h-[40px] text-start"
                >
                  9. Questions ?
                </span>

                <div className="flex flex-col gap-[2rem] text-start px-[0.5rem]">
                  <span
                    className="font-inter font-[400] text-dimWhite md:text-[18px] text-[11px] md:leading-[28px] sm:leading-[17px]
                   leading-[16px] md:text-start text-center"
                  >
                    Please feel free to contact us at <span className="text-[#2F539B] cursor-pointer">info@copartner.in</span> regarding any questions on the Privacy Policy.
                  </span>

                  <span
                    className="font-inter font-[400] text-dimWhite md:text-[18px] text-[13px] md:leading-[28px] sm:leading-[17px]
                   leading-[16px] text-start"
                  >
                    Last Updated : 10 April. 24
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
