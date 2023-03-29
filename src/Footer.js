import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component{
   render(){
    return(
        <footer class="footer_hub container-fluid">
        <div class="footer_hub">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 footer_link">
                <span>
                    Shopping Hub
                </span>
                <ul>
                    <li><Link to="/">Who We Are</Link></li>
                    <li><Link to="/">Join Our Team</Link></li>
                    <li><Link to="/">Terms & Condition</Link></li>
                    <li><Link to="/">We Respect Your Privacy</Link></li>
                    <li><Link to="/">Fees & Payment</Link></li>
                    <li><Link to="/">Return & Refunds Policy</Link></li>
                    <li><Link to="/">Promotion Terms & Condition</Link></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 footer_link">
                <span>
                    Help
                </span>
                <ul>
                    <li><Link to="/">Track Your Order</Link></li>
                    <li><Link to="/">Frequently Asked Questions</Link></li>
                    <li><Link to="/">Returns</Link></li>
                    <li><Link to="/">Collections</Link></li>
                    <li><Link to="/">Payments</Link></li>
                    <li><Link to="/">Customer Care</Link></li>
                    <li><Link to="/">How I Redeem My Coupon</Link></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 footer_link">
                <span>
                    Shop By
                </span>
                <ul>
                    <li><Link to="/">Men</Link></li>
                    <li><Link to="/">Women</Link></li>
                    <li><Link to="/">Kids</Link></li>
                    <li><Link to="/">New Arrivals</Link></li>
                    <li><Link to="/">Brand Directory</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Collection</Link></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 footer_link">
                <span>
                    Follow Us
                </span>
                <ul>
                    <li><Link to="/">Facebook</Link></li>
                    <li><Link to="/">Instagram</Link></li>
                    <li><Link to="/">Twitter</Link></li>
                    <li><Link to="/">Pinterest</Link></li>
                   
                </ul>
            </div>
           
        </div>
        <hr />
        <div class="payment">
            <div class="row payment_section">
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 ms-4">
                    <span>Payment Methods</span>
                    <div class="row">
                    <div class="col-lg-3">
                        <img src="https://i.ibb.co/J3jCTSc/netbanking.png" alt="netbanking"/>
                    </div>
                    <div class="col-lg-2">
                        <img src="https://i.ibb.co/wMJ8YR2/visa.png" alt="visa"/>
                    </div>
                    <div class="col-lg-2">
                        <img src="https://i.ibb.co/FbRKK6m/card.png" alt="card"/>
                    </div>
                    <div class="col-lg-3">
                        <img src="https://i.ibb.co/c8Rph04/cashon.png" alt="cash"/>
                    </div>
                    <div class="col-lg-2">
                        <img src="https://i.ibb.co/PTgL2Mb/wallet.png" alt="wallet"/>
                    </div>
                </div>
                </div>
                <div class="security_margin col-lg-2 col-md-2 col-sm-4 col-xs-12">
                    <span>Secure Systems</span>
                    <div>
                        <img src="https://i.ibb.co/c2fStHM/security.png" alt="security"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </footer>
    )
   }
}

export default Footer