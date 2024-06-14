import React from 'react'
import { Link } from 'react-router-dom';


function Privacy() {
    return (
      <div className="privacy-policy">
        <div className='policy-title'>PRIVACY POLICY</div>
        <div className="policy">
        <p>
        At Valiram, we value your privacy and strive to protect your personal data
        in compliance with the governing laws of the countries we operate in.
      </p> <br/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum in dolorum sit iste suscipit, voluptate nemo labore sint deleniti quia hic. Officiis exercitationem cupiditate labore corporis enim consectetur voluptatem quod.
       <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui libero sint repellendus eligendi, aliquid, aperiam laboriosam reprehenderit modi expedita, similique magni mollitia repellat exercitationem dicta culpa tenetur obcaecati voluptatum neque?
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque maxime magni similique odit blanditiis repudiandae dolorem vero, nisi nobis ducimus, natus recusandae eligendi vel architecto unde earum error distinctio.
       <br/>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor cumque facere hic fugiat quam, aliquam quaerat, in dicta commodi nesciunt accusantium delectus omnis architecto quisquam nostrum ipsam nemo atque odit?
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis similique labore quo magni. Saepe dolorum, eius minima, pariatur cupiditate eos, aperiam praesentium beatae ducimus quas id nemo fugit perspiciatis?
        <br/>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam molestiae amet soluta expedita incidunt fuga quasi culpa optio reiciendis laboriosam, consequatur similique, sunt sit ratione totam debitis praesentium! Distinctio, animi.
        <br/>
        Our Privacy Policy has been drafted out to help you understand how Valiram
        collects, records, manages, uses, stores, transfers and discloses your
        personal data. As an organization, we strive to maintain the highest
        standards of data security and privacy, always adhering to the laws of
        each country we operate in.
      </p><br/>
      <p>
        We may update this Privacy Policy from time to time to reflect changes to
        our privacy practices or for other legal, operational or regulatory reasons.
        If we amend this Privacy Policy, we will revise the "last updated" date
        located at the top of this Privacy Policy.
      </p><br/>
      <p>
        By agreeing to this privacy policy,we (and our service providers, on our
        behalf) may use the information we collect from and about you for a variety
        of purposes, including the following:
      </p>
      <br/>
      <ul>
        <li>
          To fulfill your requests for products and services and to keep you
          updated about your orders
        </li>
        <li>
          Keeping you informed (either via post, telephone, email or SMS service)
          about our new stores, products, services, upcoming events, or promotions;
        </li>
        <li>To facilitate your participation in any contests or events</li>
        <li>Where appropriate for market research</li>
        <li>
          Affiliate marketing initiatives with partners or third-party service
          provides related to Valiram
        </li>
      </ul>
      </div>
        <Link to="/registration/member/privacy/signedup">
       <button className='agree-btn'>I agree</button>  
       </Link> 
       </div>
    )
}

export default Privacy
