import React from 'react';
import './Main.css';
import Arrow from '../images/Arrow.png';
import vector from '../images/Vector.png';
import line1 from '../images/_.png';
import line2 from '../images/Line 177.png';
import line3 from '../images/Frame 782.png';
import bagimg from '../images/emojione_shopping-bags.png';


export default function Main() {
  return (
    <div>
       <div className='home'><img src={Arrow} alt="" /><span className='home-text'>Home</span></div>
       <section className='section'>
            <div className='line2'>
                <div className='my-acc'>My Account</div>
                <div className='need-help'>Need Help?</div>
            </div>
            <div className='name-div'> <span className='name-rp'> Hello, <span className='c-b'>Ramkrishna Pandey</span></span> <span ><span className='edit-bt'>Edit</span><img  src={vector} alt="" /></span> </div>
            <div className='tracking'>
                <div>
                    <span className='tr-head'>My Orders</span><span> <img src={line1} alt="" /></span>  <br /> <span className='txt'>View, modify & track orders</span>
                </div>
                <div>
                <span><img className='ab' src={line2} alt="" /></span>
                </div>
                <div>
                    <span className='tr-head'>My Address</span><span> <img src={line1} alt="" /></span> <br /> <span className='txt'>Edit, add or remove addresses</span>
                </div>
                <div>
                <span><img className='ab' src={line2} alt="" /></span>
                </div>
                <div>
                    <span className='tr-head'>Wallet</span><span><img className='sp-img' src={line1} alt="" /></span><br /> <span className='txt'>ebo Wallet History and redeemed Coins</span>
                </div>
                <div>
                <span><img className='ab' src={line2} alt="" /></span>
                </div>
                <div>
                    <span className='tr-head'>Referral</span><span><img className='sp-img' src={line1} alt="" /></span><br /> <span className='txt'>Invite your friends and earn rewards</span>
                </div>
                <div>
                <span><img className='ab' src={line2} alt="" /></span>
                </div>
                <div>
                    <span className='tr-head'>Saved occassion</span><span><img src={line1} alt="" /></span><br /> <span className='txt'>Save personal and beloved important  events info.</span>
                </div>
            </div>
            <div >
                <img className='line' src={line3} alt="" />
            </div >
            <div className='img-pd'>
                <img  src={bagimg} alt="" />
                <div className='lst-div'>
                    <span className='look-to'>Looking to celebrate?</span> <br /> <span><button className='btn-lg'>Let’s go</button></span>
                </div>

            </div>
            
       </section>
       
    </div>
  )
}
